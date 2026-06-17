---
date: '2'
title: 'Research Database AI Agent'
cover: './demo1.png'
cover2: './demo2.png'
cover3: './demo3.png'
github: 'https://github.com/Elliottt001/CozeSearchAgent'
external: 'https://github.com/Elliottt001/CozeSearchAgent'
tech:
  - RAG
  - LLM
  - Node.js
  - Tencent CloudBase
  - Python
  - SQLite
---

In collaboration with Associate Professor Zheng Gang at Zhejiang University, this project builds an LLM + research-database agent that helps entrepreneurs quickly find and match with professors for research collaboration, lowering the information barrier between industry and academia.

I collected and cleaned roughly **7,000 professor records** with deduplication and exception handling, applying a data-warehouse layered model (raw → cleaned → topic). I independently shipped the three core backend cloud functions — AI agent orchestration, search and aggregation, and favorites CRUD — and built the chat experience, including the main conversation page with message sending and side-panel history loading.
