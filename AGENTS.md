# Repository Guidelines

## Project scope

- This is a Docusaurus 3 documentation site. Keep the blog disabled.
- The cover page is implemented in `src/pages/`; authored content belongs in `docs/`.
- Write content as standard Markdown (`.md`), not MDX.
- Do not add demo, placeholder, or fabricated documentation.

## Documentation conventions

- Preserve the author's technical meaning, terminology, and writing style. Fix only clear errors; flag ambiguous wording instead of guessing.
- Store every rendered image in this repository. Keep images next to their document, normally in a `photo/` subdirectory, and reference them with relative paths.
- Use `_category_.json` for human-readable sidebar labels. Existing Chinese taxonomy labels must be preserved unless the user requests a rename.
- Treat a leaf directory used only to colocate one paper with `photo/` as storage, not taxonomy. Keep it on disk, omit `_category_.json`, and give its Markdown file the same basename so Docusaurus links directly to the paper.
- Use `$...$` for inline math and `$$...$$` or fenced `math` blocks for display math.
- Avoid changing established document paths or slugs without explicit approval because published URLs may depend on them.

## Adding a paper note

1. Find the official source, preferably the arXiv abstract page, otherwise the venue or OpenReview page. Read the full paper and write only what it supports.
2. Place the note under an existing category in `docs/paper/` as `<category>/<slug>/<slug>.md`, with figures in `<slug>/photo/`. Ask the user before adding a category or choosing its Chinese label.
3. Pick at most two or three figures from the paper: the overall architecture first, then only figures that explain a core mechanism. Store them as PNG in `photo/` (convert SVG sources) and give each a descriptive Chinese alt text.
4. Write the note in the style below.
5. Run `npm run update-paper-index`, then add a row for the paper to the table in `README.md` with its category path, a link to the note, and a link to the official source. Keep the README rows in the same order as the generated index.
6. Run the docs preflight before any requested commit.

## Paper note style

- Write in Chinese. Keep paper, model, and method names and established English terms such as stage, rollout, policy, KV Cache, and SM in English.
- Use the exact paper title as the H1. If the title contains a colon, add a `sidebar_label` front matter with the full title so the index does not truncate it.
- Use flat `##` sections that follow the paper's own structure, typically 动机和挑战 or 整体架构 first, then one section per core mechanism. Omit experiments unless the user asks for them.
- Be concise and lead with the key point. Each section is one short paragraph, and each point takes one or two sentences. Keep only the numbers that support the argument; skip implementation details, pseudo-code walkthroughs, and derivations.
- Introduce each figure with 如图所示 and say what it shows.
- Keep only the core formulas, each followed by one sentence explaining it.
- Spell out less common abbreviations on first use as `Full Name（ABBR）`, for example `Multi-Process Service（MPS）`. Common ones such as SM, RL, and VLA stay abbreviated.

## Repository skills

- Before committing any documentation change, use `.agents/skills/docs-preflight/SKILL.md`.
- When creating or reorganizing a paper reading note, use `.agents/skills/add-paper-note/SKILL.md`.
- After adding, moving, renaming, or removing a paper reading note, use `.agents/skills/update-paper-index/SKILL.md` to synchronize the multi-level frontend index, update the paper table in `README.md` to match, then run the docs preflight.

## Validation and Git

- Run `npm run typecheck` and `npm run build` after changing site code, configuration, dependencies, or documentation rendering.
- Treat `docs/paper/` and its `_category_.json` labels as the source of truth for the paper index. Do not hand-edit content between the generated markers in `docs/index.md`.
- Do not commit generated `build/`, `.docusaurus/`, or `node_modules/` content.
- Do not commit, amend, push, deploy remotely, or rewrite history unless the user explicitly asks.
- Author and commit only as `yufoo1 <yufoo1.cs@gmail.com>`. Never use another name or email, and never add `Co-authored-by` or other attribution trailers, including Cursor.
- Before a requested commit, confirm that every referenced local asset is tracked or staged with its document.
