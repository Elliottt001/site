---
date: '3'
title: 'IntelliDeploy — Natural Language to Live Cloud App'
cover: './demo1.png'
cover2: './demo2.png'
cover3: './demo3.png'
github: 'https://github.com/Elliottt001/IntelliDeploy'
external: 'https://github.com/Elliottt001/IntelliDeploy'
tech:
  - Expo / React Native
  - Spring Boot
  - LangChain
  - PostgreSQL + pgvector
  - Top-K Retrieval + LLM Rerank
---

Users describe their needs in natural language and IntelliDeploy matches the best GitHub repository, then a multi-agent system auto-resolves heterogeneous environments, missing dependencies, and runtime errors before deploying to the Sealos cloud — delivering a live, accessible product end to end.

As tech lead I designed the full algorithm: a multi-agent decision system (**Builder** drafts the plan, **Reviewer** checks deployability, **Security** screens risks, **Consensus** finalizes the decision), four fallback deployment strategies (direct deploy, patch fix, scaffold composition, from-scratch authoring), and a self-healing loop with parallel repair, retry, timeout control, circuit breaking, and rollback after failed deploys. I also drove the API design and the full-stack frontend/backend implementation and integration.
