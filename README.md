# yufoo1's Docs

A docs-only [Docusaurus](https://docusaurus.io/) site written in TypeScript.
The cover is served at `/`, and hierarchical documentation is served at
`/docs/`. All content is standard Markdown; MDX is intentionally disabled.

The previous documentation site and its full Git history are preserved on the
`archive/original-docs` branch.

## Development

Requires Node.js 20 or newer.

```bash
npm install
npm start
```

## Validation

```bash
npm run typecheck
npm run build
```

## Writing

Create a `.md` file in `docs/`. A minimal document looks like this:

```md
---
title: Post title
sidebar_position: 1
---

Document content.
```

Nested folders are reflected in the generated documentation sidebar.
