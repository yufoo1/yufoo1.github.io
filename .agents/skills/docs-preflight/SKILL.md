---
name: docs-preflight
description: Review new or changed Docusaurus Markdown before commit. Use for 提交前检查、文档检查、proofreading, validating local images and links, or preparing documentation changes for commit.
---

# Documentation preflight

Review only new or changed documentation and its assets. Preserve the author's meaning and do not broaden the edit into a rewrite.

## Determine the scope

- Inspect staged changes first, then relevant unstaged and untracked files under `docs/` so nothing intended for the commit is missed.
- Include changed `_category_.json` files and images referenced by changed Markdown.
- Do not treat existing unrelated wording as part of the review.

## Content review

- Read each changed Markdown file completely.
- Fix clear Chinese or English typos, duplicated words, broken punctuation, and obvious grammar errors.
- Keep paper names, model names, symbols, equations, citations, and domain terminology unchanged unless the correction is certain.
- Flag ambiguous technical claims or wording for the user instead of inventing a correction.
- Reject placeholder, demo, or fabricated content.
- Check heading order, fenced code blocks, inline code, Markdown syntax, and balanced math delimiters.

## Images and links

For every rendered image in changed Markdown:

- Require a repository-local relative path; flag `http:`, `https:`, protocol-relative, data URI, and filesystem-absolute image sources.
- Resolve the path relative to the Markdown file and confirm that the file exists inside the repository.
- Confirm that the image is tracked or staged. An untracked image is a blocking issue for a requested commit.
- Check that the filename casing exactly matches the reference and that meaningful alt text is used when practical.

Resolve relative document links the same way and flag missing targets. External hyperlinks may remain external; do not claim they are valid unless they were actually checked.

## Site validation

- Run `git diff --check`.
- Run `npm run check-paper-index` and require it to pass whenever `docs/paper/`, its category metadata, or `docs/index.md` changed.
- Run `npm run typecheck` and `npm run build`.
- For documents containing math, confirm the generated HTML contains KaTeX nodes.
- Confirm removed or renamed documents do not leave stale links in `docs/index.md` or category metadata.

Report the reviewed files, corrections made, unresolved concerns, and validation results. Do not commit or push unless the user separately authorizes it.
