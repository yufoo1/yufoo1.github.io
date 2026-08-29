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

## Repository skills

- Before committing any documentation change, use `.agents/skills/docs-preflight/SKILL.md`.
- When creating or reorganizing a paper reading note, use `.agents/skills/add-paper-note/SKILL.md`.
- After adding, moving, renaming, or removing a paper reading note, use `.agents/skills/update-paper-index/SKILL.md` to synchronize the multi-level frontend index, then run the docs preflight.

## Validation and Git

- Run `npm run typecheck` and `npm run build` after changing site code, configuration, dependencies, or documentation rendering.
- Treat `docs/paper/` and its `_category_.json` labels as the source of truth for the paper index. Do not hand-edit content between the generated markers in `docs/index.md`.
- Do not commit generated `build/`, `.docusaurus/`, or `node_modules/` content.
- Do not commit, amend, push, deploy remotely, or rewrite history unless the user explicitly asks.
- Before a requested commit, confirm that every referenced local asset is tracked or staged with its document.
