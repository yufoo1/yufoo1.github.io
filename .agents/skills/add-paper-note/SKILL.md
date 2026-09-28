---
name: add-paper-note
description: Create or organize a paper reading note in this Docusaurus repository. Use when adding 论文导读、论文笔记, figures, formulas, or sidebar categories under docs/paper/.
---

# Add a paper note

Create only content supported by the user's source material. Do not add generic filler, invented findings, or demo pages.

## Placement

- Follow the existing hierarchy under `docs/paper/` and preserve user-chosen terminology.
- Use a stable lowercase directory slug for the paper and keep its Markdown and assets together.
- Give semantic directory levels an `_category_.json` label. For a leaf directory created only to colocate one paper with its `photo/` assets, omit `_category_.json` and name the Markdown file after the directory. This keeps `embodied-ai/model/vln/streamvln/streamvln.md` displayed as `具身智能 / 模型 / 视觉-语言-导航模型 / StreamVLN` rather than adding a second `StreamVLN` category.
- Store rendered figures in the note's `photo/` directory. Never hotlink an image; copy or add the authorized local asset to the repository and use a relative Markdown path.
- Add `_category_.json` only when a directory needs a display label. Reuse the established Chinese taxonomy and ask before introducing a materially new category.

## Authoring

- Use standard Markdown, not MDX.
- Keep the official paper title exact. Preserve model names, abbreviations, mathematical notation, and code identifiers.
- Use `$...$` for inline formulas and `$$...$$` or fenced `math` blocks for display formulas.
- Use descriptive headings and meaningful image alt text without changing the author's intended structure.
- Run the `update-paper-index` skill after adding, moving, renaming, or removing a paper note. Do not manually edit the generated index block.

After authoring, follow the `docs-preflight` skill. Do not commit or push without explicit user authorization.
