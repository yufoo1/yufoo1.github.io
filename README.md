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
| 系统 / 形式化验证 | [Specula: Scaling formal specifications for autonomous model checking of system code](docs/paper/system/verification/specula/specula.md) | [arXiv:2607.25333](https://arxiv.org/abs/2607.25333) |
| 系统 / 形式化验证 | [TLAPS-Bench: Formally Proving Correctness of Real-World System Specifications with TLA+ Proof System](docs/paper/system/verification/tlaps-bench/tlaps-bench.md) | [arXiv:2611.02849](https://arxiv.org/abs/2611.02849) |
| 系统 / 形式化验证 | [Welder: Compositional Liveness Verification of Cluster Control Planes](docs/paper/system/verification/welder-uiuc/welder-uiuc.md) | [SOSP '26](https://dl.acm.org/doi/10.1145/3830418.3843868) |
| 大模型 / 模型 / DeepSeek | [DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models](docs/paper/llm/model/deepseek/deepseekmoe/deepseekmoe.md) | [arXiv:2401.06066](https://arxiv.org/abs/2401.06066) |
| 大模型 / 模型 / DeepSeek | [DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model](docs/paper/llm/model/deepseek/deepseek-v2/deepseek-v2.md) | [arXiv:2405.04434](https://arxiv.org/abs/2405.04434) |
| 大模型 / 模型 / DeepSeek | [DeepSeek-V3 Technical Report](docs/paper/llm/model/deepseek/deepseek-v3/deepseek-v3.md) | [arXiv:2412.19437](https://arxiv.org/abs/2412.19437) |
| 大模型 / 模型 / DeepSeek | [Insights into DeepSeek-V3: Scaling Challenges and Reflections on Hardware for AI Architectures](docs/paper/llm/model/deepseek/deepseek-v3-insights/deepseek-v3-insights.md) | [arXiv:2505.09343](https://arxiv.org/abs/2505.09343) |
| 大模型 / 模型 / DeepSeek | [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](docs/paper/llm/model/deepseek/deepseek-r1/deepseek-r1.md) | [arXiv:2501.12948](https://arxiv.org/abs/2501.12948) |
| 大模型 / 模型 / DeepSeek | [Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention](docs/paper/llm/model/deepseek/nsa/nsa.md) | [arXiv:2502.11089](https://arxiv.org/abs/2502.11089) |
| 大模型 / 模型 / DeepSeek | [DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](docs/paper/llm/model/deepseek/deepseek-v3-2/deepseek-v3-2.md) | [arXiv:2512.02556](https://arxiv.org/abs/2512.02556) |
| 大模型 / 模型 / DeepSeek | [mHC: Manifold-Constrained Hyper-Connections](docs/paper/llm/model/deepseek/mhc/mhc.md) | [arXiv:2512.24880](https://arxiv.org/abs/2512.24880) |
| 大模型 / 模型 / DeepSeek | [DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence](docs/paper/llm/model/deepseek/deepseek-v4/deepseek-v4.md) | [arXiv:2606.19348](https://arxiv.org/abs/2606.19348) |
| 大模型 / 模型 / DeepSeek | [DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression](docs/paper/llm/model/deepseek/deepseek-v4-1-flash/deepseek-v4-1-flash.md) | [arXiv:2609.19969](https://arxiv.org/abs/2609.19969) |
| 大模型 / 模型 / GLM | [GLM-130B: An Open Bilingual Pre-trained Model](docs/paper/llm/model/glm/glm-130b/glm-130b.md) | [arXiv:2210.02414](https://arxiv.org/abs/2210.02414) |
| 大模型 / 模型 / GLM | [GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models](docs/paper/llm/model/glm/glm-4-5/glm-4-5.md) | [arXiv:2508.06471](https://arxiv.org/abs/2508.06471) |
| 大模型 / 模型 / GLM | [GLM-5: from Vibe Coding to Agentic Engineering](docs/paper/llm/model/glm/glm-5/glm-5.md) | [arXiv:2602.15763](https://arxiv.org/abs/2602.15763) |
| 大模型 / 模型 / GLM | [IndexCache: Accelerating Sparse Attention via Cross-Layer Index Reuse](docs/paper/llm/model/glm/indexcache/indexcache.md) | [arXiv:2603.12201](https://arxiv.org/abs/2603.12201) |
| 大模型 / 模型 / GLM | [GLM-5.2: Built for Long-Horizon Tasks](docs/paper/llm/model/glm/glm-5-2/glm-5-2.md) | [官方博客](https://z.ai/blog/glm-5.2) |
| 大模型 / 模型 / Kimi | [Kimi k1.5: Scaling Reinforcement Learning with LLMs](docs/paper/llm/model/kimi/kimi-k1-5/kimi-k1-5.md) | [arXiv:2501.12599](https://arxiv.org/abs/2501.12599) |
| 大模型 / 模型 / Kimi | [Muon is Scalable for LLM Training](docs/paper/llm/model/kimi/muon-scalable/muon-scalable.md) | [arXiv:2502.16982](https://arxiv.org/abs/2502.16982) |
| 大模型 / 模型 / Kimi | [Kimi K2: Open Agentic Intelligence](docs/paper/llm/model/kimi/kimi-k2/kimi-k2.md) | [arXiv:2507.20534](https://arxiv.org/abs/2507.20534) |
| 大模型 / 模型 / Kimi | [Kimi Linear: An Expressive, Efficient Attention Architecture](docs/paper/llm/model/kimi/kimi-linear/kimi-linear.md) | [arXiv:2510.26692](https://arxiv.org/abs/2510.26692) |
| 大模型 / 模型 / Kimi | [Kimi K2.5: Visual Agentic Intelligence](docs/paper/llm/model/kimi/kimi-k2-5/kimi-k2-5.md) | [arXiv:2602.02276](https://arxiv.org/abs/2602.02276) |
| 大模型 / 模型 / Kimi | [Attention Residuals](docs/paper/llm/model/kimi/attention-residuals/attention-residuals.md) | [arXiv:2603.15031](https://arxiv.org/abs/2603.15031) |
| 大模型 / 模型 / Kimi | [Kimi K3: Open Frontier Intelligence](docs/paper/llm/model/kimi/kimi-k3/kimi-k3.md) | [arXiv:2607.24653](https://arxiv.org/abs/2607.24653) |
| 大模型 / 模型 / Qwen | [Qwen2.5 Technical Report](docs/paper/llm/model/qwen/qwen2-5/qwen2-5.md) | [arXiv:2412.15115](https://arxiv.org/abs/2412.15115) |
| 大模型 / 模型 / Qwen | [Qwen3 Technical Report](docs/paper/llm/model/qwen/qwen3/qwen3.md) | [arXiv:2505.09388](https://arxiv.org/abs/2505.09388) |
| 大模型 / 模型 / Qwen | [Gated Delta Networks: Improving Mamba2 with Delta Rule](docs/paper/llm/model/qwen/gated-deltanet/gated-deltanet.md) | [arXiv:2412.06464](https://arxiv.org/abs/2412.06464) |
| 大模型 / 模型 / Qwen | [Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free](docs/paper/llm/model/qwen/gated-attention/gated-attention.md) | [arXiv:2505.06708](https://arxiv.org/abs/2505.06708) |
| 大模型 / 模型 / Qwen | [Qwen3-Next: Towards Ultimate Training & Inference Efficiency](docs/paper/llm/model/qwen/qwen3-next/qwen3-next.md) | [官方博客](https://www.alibabacloud.com/blog/qwen3-next-towards-ultimate-training-%26-inference-efficiency_602580) |
| 大模型 / 模型 / Qwen | [Qwen3.5: Towards Native Multimodal Agents](docs/paper/llm/model/qwen/qwen3-5/qwen3-5.md) | [官方博客](https://qwen.ai/blog?id=qwen3.5) |
| 大模型 / 模型 / Qwen | [Qwen3.5-Omni Technical Report](docs/paper/llm/model/qwen/qwen3-5-omni/qwen3-5-omni.md) | [arXiv:2604.15804](https://arxiv.org/abs/2604.15804) |
| 大模型 / 模型 / Qwen | [Qwen3.8-Max: A New Bar for Coding and Cowork](docs/paper/llm/model/qwen/qwen3-8-max/qwen3-8-max.md) | [官方博客](https://qwen.ai/blog?id=qwen3.8) |
| 大模型 / 系统 / 推理引擎 | [Efficiently Scaling Transformer Inference](docs/paper/llm/infra/engine/transformer-inference-google/transformer-inference-google.md) | [arXiv:2211.05102](https://arxiv.org/abs/2211.05102) |
| 大模型 / 系统 / 推理引擎 | [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](docs/paper/llm/infra/engine/flashattention-stanford/flashattention-stanford.md) | [arXiv:2205.14135](https://arxiv.org/abs/2205.14135) |
| 大模型 / 系统 / 推理引擎 | [Orca: A Distributed Serving System for Transformer-Based Generative Models](docs/paper/llm/infra/engine/orca-snu/orca-snu.md) | [OSDI '22](https://www.usenix.org/conference/osdi22/presentation/yu) |
| 大模型 / 系统 / 推理引擎 | [Efficient Memory Management for Large Language Model Serving with PagedAttention](docs/paper/llm/infra/engine/vllm-berkeley/vllm-berkeley.md) | [arXiv:2309.06180](https://arxiv.org/abs/2309.06180) |
| 大模型 / 系统 / 推理引擎 | [SGLang: Efficient Execution of Structured Language Model Programs](docs/paper/llm/infra/engine/sglang-berkeley/sglang-berkeley.md) | [arXiv:2312.07104](https://arxiv.org/abs/2312.07104) |
| 大模型 / 系统 / 推理引擎 | [FlashInfer: Efficient and Customizable Attention Engine for LLM Inference Serving](docs/paper/llm/infra/engine/flashinfer-uw/flashinfer-uw.md) | [arXiv:2501.01005](https://arxiv.org/abs/2501.01005) |
| 大模型 / 系统 / 调度 | [FastServe: Iteration-Level Preemptive Scheduling for Large Language Model Inference](docs/paper/llm/infra/scheduling/fastserve-pku/fastserve-pku.md) | [NSDI '26](https://www.usenix.org/conference/nsdi26/presentation/wu-bingyang) |
| 大模型 / 系统 / 调度 | [SARATHI: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills](docs/paper/llm/infra/scheduling/sarathi-microsoft/sarathi-microsoft.md) | [arXiv:2308.16369](https://arxiv.org/abs/2308.16369) |
| 大模型 / 系统 / 调度 | [Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve](docs/paper/llm/infra/scheduling/sarathi-serve-microsoft/sarathi-serve-microsoft.md) | [OSDI '24](https://www.usenix.org/conference/osdi24/presentation/agrawal) |
| 大模型 / 系统 / 调度 | [DeepSpeed-FastGen: High-throughput Text Generation for LLMs via MII and DeepSpeed-Inference](docs/paper/llm/infra/scheduling/deepspeed-fastgen-microsoft/deepspeed-fastgen-microsoft.md) | [arXiv:2401.08671](https://arxiv.org/abs/2401.08671) |
| 大模型 / 系统 / 调度 | [Llumnix: Dynamic Scheduling for Large Language Model Serving](docs/paper/llm/infra/scheduling/llumnix-alibaba/llumnix-alibaba.md) | [OSDI '24](https://www.usenix.org/conference/osdi24/presentation/sun-biao) |
| 大模型 / 系统 / 调度 | [AlpaServe: Statistical Multiplexing with Model Parallelism for Deep Learning Serving](docs/paper/llm/infra/scheduling/alpaserve-berkeley/alpaserve-berkeley.md) | [OSDI '23](https://www.usenix.org/conference/osdi23/presentation/li-zhouhan) |
| 大模型 / 系统 / 调度 | [dLoRA: Dynamically Orchestrating Requests and Adapters for LoRA LLM Serving](docs/paper/llm/infra/scheduling/dlora-pku/dlora-pku.md) | [OSDI '24](https://www.usenix.org/conference/osdi24/presentation/wu-bingyang) |
| 大模型 / 系统 / PD 分离 | [Splitwise: Efficient Generative LLM Inference Using Phase Splitting](docs/paper/llm/infra/disaggregation/splitwise-microsoft/splitwise-microsoft.md) | [arXiv:2311.18677](https://arxiv.org/abs/2311.18677) |
| 大模型 / 系统 / PD 分离 | [DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving](docs/paper/llm/infra/disaggregation/distserve-pku/distserve-pku.md) | [OSDI '24](https://www.usenix.org/conference/osdi24/presentation/zhong-yinmin) |
| 大模型 / 系统 / PD 分离 | [Inference without Interference: Disaggregate LLM Inference for Mixed Downstream Workloads](docs/paper/llm/infra/disaggregation/tetriinfer-huawei/tetriinfer-huawei.md) | [arXiv:2401.11181](https://arxiv.org/abs/2401.11181) |
| 大模型 / 系统 / PD 分离 | [Mooncake: Trading More Storage for Less Computation — A KVCache-centric Architecture for Serving LLM Chatbot](docs/paper/llm/infra/disaggregation/mooncake-moonshot/mooncake-moonshot.md) | [FAST '25](https://www.usenix.org/conference/fast25/presentation/qin) |
| 大模型 / 系统 / PD 分离 | [DualPath: Accelerating Agentic LLM Inference by Harvesting Disaggregated KV-Cache Storage I/O](docs/paper/llm/infra/disaggregation/dualpath-deepseek/dualpath-deepseek.md) | [SIGCOMM '26](https://dl.acm.org/doi/10.1145/3789240.3829159) |
| 大模型 / 系统 / 长上下文并行 | [Ring Attention with Blockwise Transformers for Near-Infinite Context](docs/paper/llm/infra/context-parallel/ring-attention-berkeley/ring-attention-berkeley.md) | [arXiv:2310.01889](https://arxiv.org/abs/2310.01889) |
| 大模型 / 系统 / 长上下文并行 | [Striped Attention: Faster Ring Attention for Causal Transformers](docs/paper/llm/infra/context-parallel/striped-attention-mit/striped-attention-mit.md) | [arXiv:2311.09431](https://arxiv.org/abs/2311.09431) |
| 大模型 / 系统 / 长上下文并行 | [DeepSpeed Ulysses: System Optimizations for Enabling Training of Extreme Long Sequence Transformer Models](docs/paper/llm/infra/context-parallel/deepspeed-ulysses-microsoft/deepspeed-ulysses-microsoft.md) | [arXiv:2309.14509](https://arxiv.org/abs/2309.14509) |
| 大模型 / 系统 / 长上下文并行 | [Context Parallelism for Scalable Million-Token Inference](docs/paper/llm/infra/context-parallel/context-parallelism-meta/context-parallelism-meta.md) | [arXiv:2411.01783](https://arxiv.org/abs/2411.01783) |
| 大模型 / 系统 / 长上下文并行 | [LoongServe: Efficiently Serving Long-Context Large Language Models with Elastic Sequence Parallelism](docs/paper/llm/infra/context-parallel/loongserve-pku/loongserve-pku.md) | [SOSP '24](https://dl.acm.org/doi/10.1145/3694715.3695948) |
| 大模型 / 系统 / 长上下文并行 | [No Request Left Behind: Tackling Heterogeneity in Long-Context LLM Inference with Medha](docs/paper/llm/infra/context-parallel/medha-gatech/medha-gatech.md) | [arXiv:2409.17264](https://arxiv.org/abs/2409.17264) |
| 大模型 / 系统 / 长上下文并行 | [Helix Parallelism: Rethinking Sharding Strategies for Interactive Multi-Million-Token LLM Decoding](docs/paper/llm/infra/context-parallel/helix-nvidia/helix-nvidia.md) | [arXiv:2507.07120](https://arxiv.org/abs/2507.07120) |
| 大模型 / 系统 / 长上下文并行 | [TokenLake: A Unified Segment-level Prefix Cache Pool for Fine-grained Elastic Long-Context LLM Serving](docs/paper/llm/infra/context-parallel/tokenlake-pku/tokenlake-pku.md) | [arXiv:2508.17219](https://arxiv.org/abs/2508.17219) |
| 大模型 / 系统 / MoE 部署 | [MegaScale-Infer: Efficient Mixture-of-Experts Model Serving with Disaggregated Expert Parallelism](docs/paper/llm/infra/moe/megascale-infer-bytedance/megascale-infer-bytedance.md) | [SIGCOMM '25](https://dl.acm.org/doi/10.1145/3718958.3750506) |
| 大模型 / 系统 / MoE 部署 | [UltraEP: Unleash MoE Training and Inference on Rack-Scale Nodes with Near-Optimal Load Balancing](docs/paper/llm/infra/moe/ultraep-pku/ultraep-pku.md) | [arXiv:2606.04101](https://arxiv.org/abs/2606.04101) |
| 大模型 / 系统 / 强化学习 | [Optimizing RLHF Training for Large Language Models with Stage Fusion](docs/paper/llm/infra/rl/rlhfuse-pku/rlhfuse-pku.md) | [NSDI '25](https://www.usenix.org/conference/nsdi25/presentation/zhong) |
| 大模型 / 系统 / 强化学习 | [StreamRL: Scalable, Heterogeneous, and Elastic RL for LLMs with Disaggregated Stream Generation](docs/paper/llm/infra/rl/streamrl-pku/streamrl-pku.md) | [arXiv:2504.15930](https://arxiv.org/abs/2504.15930) |
| 大模型 / 系统 / 强化学习 | [DistRS: Disaggregated Reward Service for RLVR with Batch-Level Constraint](docs/paper/llm/infra/rl/distrs-pku/distrs-pku.md) | [NSDI '26](https://www.usenix.org/conference/nsdi26/presentation/zhu-ruidong) |
| 大模型 / 系统 / 强化学习 | [Heddle: A Distributed Orchestration System for Agentic RL Rollout](docs/paper/llm/infra/rl/heddle-pku/heddle-pku.md) | [arXiv:2603.28101](https://arxiv.org/abs/2603.28101) |
| 大模型 / 系统 / 强化学习 | [ReLibra: Routing-Replay-Guided Load Balancing for MoE Training in Reinforcement Learning](docs/paper/llm/infra/rl/relibra-pku/relibra-pku.md) | [arXiv:2605.08639](https://arxiv.org/abs/2605.08639) |

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
