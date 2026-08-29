import {readFile, readdir, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const START_MARKER = '<!-- paper-index:start -->';
const END_MARKER = '<!-- paper-index:end -->';
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, '../../../..');
const paperRoot = path.join(repositoryRoot, 'docs/paper');
const indexPath = path.join(repositoryRoot, 'docs/index.md');
const checkOnly = process.argv.includes('--check');

function humanizeSlug(slug) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ');
}

function parseFrontMatter(source) {
  if (!source.startsWith('---')) {
    return {};
  }

  const end = source.indexOf('\n---', 3);
  if (end === -1) {
    return {};
  }

  const values = {};
  for (const line of source.slice(3, end).split(/\r?\n/)) {
    const match = line.match(/^([a-zA-Z_][\w-]*):\s*(.*?)\s*$/);
    if (match) {
      values[match[1]] = match[2].replace(/^(['"])(.*)\1$/, '$2');
    }
  }
  return values;
}

function markdownLabel(value) {
  return value.replace(/([\\[\]])/g, '\\$1');
}

async function readCategory(directory) {
  const fallback = path.basename(directory);
  try {
    const metadata = JSON.parse(
      await readFile(path.join(directory, '_category_.json'), 'utf8'),
    );
    return {
      label: metadata.label || humanizeSlug(fallback),
      position: Number.isFinite(metadata.position)
        ? metadata.position
        : Number.POSITIVE_INFINITY,
      explicit: true,
    };
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    return {
      label: humanizeSlug(fallback),
      position: Number.POSITIVE_INFINITY,
      explicit: false,
    };
  }
}

async function readDocument(filePath) {
  const source = await readFile(filePath, 'utf8');
  const frontMatter = parseFrontMatter(source);
  const heading = source.match(/^#\s+(.+?)\s*$/m)?.[1];
  const title = frontMatter.title || heading || path.basename(filePath, '.md');
  const relativePath = path.relative(path.dirname(indexPath), filePath);

  return {
    type: 'document',
    basename: path.basename(filePath, '.md'),
    label: title.replace(/\s+\{#[^}]+\}\s*$/, ''),
    shortLabel: (frontMatter.sidebar_label || title.split(':', 1)[0]).replace(
      /\s+\{#[^}]+\}\s*$/,
      '',
    ),
    position: Number.parseFloat(frontMatter.sidebar_position) || Number.POSITIVE_INFINITY,
    target: `./${relativePath.split(path.sep).join('/')}`,
  };
}

function compareEntries(left, right) {
  return (
    left.position - right.position ||
    left.label.localeCompare(right.label, 'zh-Hans-CN')
  );
}

async function readDirectory(directory) {
  const category = await readCategory(directory);
  const entries = await readdir(directory, {withFileTypes: true});
  const children = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'photo') {
      continue;
    }

    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      const child = await readDirectory(entryPath);
      if (child.children.length > 0) {
        children.push(child);
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      children.push(await readDocument(entryPath));
    }
  }

  children.sort(compareEntries);
  if (
    !category.explicit &&
    children.some((child) => child.type === 'document') &&
    (children.length !== 1 ||
      children[0].type !== 'document' ||
      children[0].basename !== path.basename(directory))
  ) {
    throw new Error(
      `Leaf paper directory ${path.relative(repositoryRoot, directory)} must contain one same-named Markdown file or define _category_.json.`,
    );
  }
  return {type: 'category', ...category, children};
}

function renderEntry(entry, depth) {
  const indentation = '  '.repeat(depth);
  if (entry.type === 'document') {
    return [
      `${indentation}- [${markdownLabel(entry.shortLabel)}](${entry.target})`,
    ];
  }

  const isPaperStorageDirectory =
    !entry.explicit &&
    entry.children.length > 0 &&
    entry.children.every((child) => child.type === 'document');
  if (isPaperStorageDirectory) {
    return entry.children.flatMap((child) => renderEntry(child, depth));
  }

  const lines = [`${indentation}- **${markdownLabel(entry.label)}**`];
  for (const child of entry.children) {
    lines.push(...renderEntry(child, depth + 1));
  }
  return lines;
}

const tree = await readDirectory(paperRoot);
const lines = tree.children.flatMap((entry) => renderEntry(entry, 0));
const generatedBlock = [
  START_MARKER,
  lines.length > 0 ? lines.join('\n') : '_暂无论文导读。_',
  END_MARKER,
].join('\n');

const currentIndex = await readFile(indexPath, 'utf8');
const markerPattern = new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`);

if (!markerPattern.test(currentIndex)) {
  throw new Error(`Missing paper index markers in ${indexPath}`);
}

const updatedIndex = currentIndex.replace(markerPattern, generatedBlock);
if (checkOnly) {
  if (updatedIndex !== currentIndex) {
    console.error('Paper index is out of date. Run npm run update-paper-index.');
    process.exitCode = 1;
  } else {
    console.log('Paper index is up to date.');
  }
} else if (updatedIndex === currentIndex) {
  console.log('Paper index is already up to date.');
} else {
  await writeFile(indexPath, updatedIndex);
  console.log('Updated docs/index.md from docs/paper/.');
}
