---
name: update-paper-index
description: Synchronize the Docusaurus paper landing page with the multi-level docs/paper directory tree. Use after adding, moving, renaming, or removing a 论文导读 or changing a paper category label.
---

# Update the paper index

Keep the frontend paper index aligned with the repository hierarchy. The directory tree and `_category_.json` labels are the source of truth.

## Hierarchy

- Represent semantic levels with a directory and `_category_.json` label. For example, `docs/paper/embodied-ai/model/` maps to `具身智能 / 模型`.
- A leaf directory used only to keep one paper and its `photo/` assets together is not a category. Keep the directory on disk, omit `_category_.json`, and name its Markdown file after the directory. Docusaurus then links the directory directly to that document, so `embodied-ai/model/vln/streamvln/streamvln.md` appears as `具身智能 / 模型 / 视觉-语言-导航模型 / StreamVLN`.
- The generator rejects a non-category leaf directory unless it contains exactly one same-named Markdown file. If the directory represents a real taxonomy level or contains multiple documents, add `_category_.json` instead of forcing it to flatten.
- Use stable lowercase directory slugs while preserving the requested display label and exact capitalization in `_category_.json`.
- Keep a paper note and its `photo/` assets together. Asset-only directories do not belong in the index.
- Do not invent categories or rename the user's taxonomy. Ask before adding a materially new research category when its placement is ambiguous.

## Synchronize

Run `npm run update-paper-index` from the repository root. The generator reads Markdown titles and semantic category labels, collapses leaf paper directories, then replaces only the block between `paper-index:start` and `paper-index:end` in `docs/index.md`.

Inspect the generated diff to confirm the nesting and labels match the filesystem. Do not hand-edit the generated block; correct the source title or `_category_.json` instead and rerun the command.

Before completion, run `npm run check-paper-index`, then follow the `docs-preflight` skill. Do not commit or push without explicit user authorization.
