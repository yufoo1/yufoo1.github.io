# yufoo1's Docs

A docs-only [Docusaurus](https://docusaurus.io/) site written in TypeScript.
The cover is served at `/`, and hierarchical documentation is served at
`/docs/`. All content is standard Markdown; MDX is intentionally disabled.

The previous documentation site and its full Git history are preserved on the
`archive/original-docs` branch.

## Paper notes

Paper reading notes live in `docs/paper/`. Rows follow the order of the paper
index in `docs/index.md`; see `AGENTS.md` for the workflow of adding a paper.

| Category | Paper | Source |
| --- | --- | --- |
| 具身智能 / 模型 / 视觉-语言-导航模型 | [StreamVLN: Streaming Vision-and-Language Navigation via SlowFast Context Modeling](docs/paper/embodied-ai/model/vln/streamvln/streamvln.md) | [arXiv:2507.05240](https://arxiv.org/abs/2507.05240) |
| 具身智能 / 算法 / 强化学习 | [Self-Improving Vision-Language-Action Models with Data Generation via Residual RL](docs/paper/embodied-ai/algo/rl/pld-nvidia/pld-nvidia.md) | [arXiv:2511.00091](https://arxiv.org/abs/2511.00091) |
| 具身智能 / 系统 / 强化学习 | [EBRL: Asynchronous Embodied RL by Multi-Grained Resource Management](docs/paper/embodied-ai/infra/rl/ebrl-nju/ebrl-nju.md) | [arXiv:2609.27547](https://arxiv.org/abs/2609.27547) |
| 具身智能 / 系统 / 强化学习 | [RL-VLA³: A Flexible and Asynchronous Reinforcement Learning Framework for VLA Training](docs/paper/embodied-ai/infra/rl/rl-vla3-pku/rl-vla3-pku.md) | [arXiv:2602.05765](https://arxiv.org/abs/2602.05765) |
| 系统 / 形式化验证 | [Anvil: Verifying Liveness of Cluster Management Controllers](docs/paper/system/verification/anvil-uiuc/anvil-uiuc.md) | [OSDI '24](https://www.usenix.org/conference/osdi24/presentation/sun-xudong) |
| 系统 / 形式化验证 | [Smart Casual Verification of the Confidential Consortium Framework](docs/paper/system/verification/ccf-microsoft/ccf-microsoft.md) | [NSDI '25](https://www.usenix.org/conference/nsdi25/presentation/howard) |
| 系统 / 形式化验证 | [Sharding the State Machine: Automated Modular Reasoning for Complex Concurrent Systems](docs/paper/system/verification/ironsync-cmu/ironsync-cmu.md) | [OSDI '23](https://www.usenix.org/conference/osdi23/presentation/hance) |
| 系统 / 形式化验证 | [Welder: Compositional Liveness Verification of Cluster Control Planes](docs/paper/system/verification/welder-uiuc/welder-uiuc.md) | [SOSP '26](https://dl.acm.org/doi/10.1145/3830418.3843868) |

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
