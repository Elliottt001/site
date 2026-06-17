---
date: '1'
title: 'Attention-Free Hybrid SSM Architecture'
cover: './demo.png'
cta: ''
tech:
  - State Space Models
  - Transformer
  - PyTorch
  - ImageNet-1K
  - Food-101
  - AGNews / ACL-IMDb
---

Co-first author on a research project addressing how to balance **local detail precision** and **long-range dependency memory** in large-scale sequence and vision modeling under a constrained compute budget. We propose an **attention-free hybrid architecture** unifying the efficiency of SSMs with the fine-grained feature capacity of Transformers, using _k_ learnable concept centers for **soft bucketing** that reduces O(n²) complexity to near-linear O(nk + k²), achieving **SOTA** on multiple benchmarks.

I designed and implemented the core **routing and interaction module** — a dynamic router for token soft-bucketing and a concept graph for global interaction with adaptive routing policy and graph complexity — built the training framework with key regularizers (e.g. load-balancing loss) to prevent mode collapse, and ran end-to-end experiments by restructuring ImageNet-1K, Food-101, AGNews, and ACL-IMDb from semi-structured raw data into the training format.
