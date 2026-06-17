/* eslint-disable max-len */
// Central translation dictionary. Keys are English-flavoured identifiers, values
// hold both English and Chinese variants. Use t('key') from useLanguage().

const translations = {
  // Nav
  'nav.about': { en: 'About', zh: '关于' },
  'nav.experience': { en: 'Experience', zh: '经历' },
  'nav.work': { en: 'Work', zh: '项目' },
  'nav.contact': { en: 'Contact', zh: '联系' },
  'nav.resume': { en: 'Resume', zh: '简历' },
  'nav.langToEN': { en: 'EN', zh: 'EN' },
  'nav.langToZH': { en: '中', zh: '中' },
  'nav.langAria': { en: 'Switch language', zh: '切换语言' },

  // Layout misc
  'layout.skip': { en: 'Skip to Content', zh: '跳到正文' },

  // Hero
  'hero.greeting': { en: 'Hi, my name is', zh: '你好，我是' },
  'hero.name': { en: 'Ruizhe Zhang.', zh: '张瑞喆 Elliottt' },
  'hero.tagline': { en: 'I explore the world with AI agents.', zh: '用智能体探索世界.' },
  'hero.bio': {
    en: 'I\'m a software engineering undergraduate at __ZJU__, focused on large language model systems, AI agents, and cloud-native deployment. Currently, I\'m researching attention-free hybrid SSM architectures and interning as an LLM algorithm engineer at __H3C__.',
    zh: '我是__ZJU__软件工程专业的本科生，专注于大语言模型系统、AI 智能体方向。目前正在研究大模型记忆系统，并在__H3C__担任大模型算法实习工程师。',
  },
  'hero.zju': { en: 'Zhejiang University', zh: '浙江大学' },
  'hero.h3c': { en: 'H3C', zh: '新华三' },
  'hero.cta': { en: 'Get in touch', zh: '联系我' },

  // About
  'about.heading': { en: 'About Me', zh: '关于我' },
  'about.p1': {
    en: 'Hello! I\'m Ruizhe Zhang, a software engineering undergraduate at __ZJU__\'s College of Computer Science and Technology, and a member of the software team at ZJU Inspiration Interdisciplinary Innovation& Entrepreneurship Laboratory.',
    zh: '你好！我是张瑞喆，__ZJU__计算机科学与技术学院软件工程专业的本科生，同时也是浙江大学启真交叉学科创新创业实验室（X-Lab）软件团队成员。',
  },
  'about.p2': {
    en: 'I work at the intersection of large language models and systems engineering. My research explores attention-free hybrid SSM architectures as a co-first author, and my recent projects focus on multi-agent deployment pipelines, RAG-based research assistants, and long-horizon memory systems for conversational agents.',
    zh: '我的方向位于大语言模型与系统工程的交叉地带。学术上以共同一作身份探索无注意力的混合 SSM 架构；近期的项目主要围绕对话智能体的长短程记忆系统、多智能体流水线、基于 RAG 的 AI Agent 应用系统。',
  },
  'about.p3': {
    en: 'I\'ve had the chance to build production AI systems at __H3C__ and lead the __Sealos__-based AICD project at __Huanjie__, shipping LLM-driven tooling end to end.',
    zh: '我曾在__H3C__参与产线级 AI 记忆系统的研发，并在__Huanjie__主导基于__Sealos__的 AICD 项目，端到端地交付由大模型驱动的工具链。',
  },
  'about.p4': {
    en: 'Here are a few technologies I\'ve been working with recently:',
    zh: '以下是我近期常用的一些技术：',
  },
  'about.zju': { en: 'Zhejiang University', zh: '浙江大学' },
  'about.h3c': { en: 'H3C', zh: '新华三' },
  'about.sealos': { en: 'Sealos', zh: 'Sealos' },
  'about.huanjie': { en: 'Sealos Cloud', zh: '珠海环界云计算有限公司' },

  // Jobs
  'jobs.heading': { en: 'Where I\'ve Worked', zh: '我的工作经历' },

  // Featured
  'featured.heading': { en: 'Some Things I\'ve Built', zh: '一些我做过的项目' },
  'featured.overline': { en: 'Featured Project', zh: '精选项目' },
  'featured.learnMore': { en: 'Learn More', zh: '了解更多' },

  // Projects (Awards)
  'projects.heading': { en: 'Awards & Honors', zh: '奖项与荣誉' },
  'projects.archive': { en: 'view the archive', zh: '查看完整列表' },
  'projects.more': { en: 'Show More', zh: '展开更多' },
  'projects.less': { en: 'Show Less', zh: '收起' },

  // Contact
  'contact.overline': { en: 'What\'s Next?', zh: '接下来？' },
  'contact.title': { en: 'Get In Touch', zh: '联系我' },
  'contact.body': {
    en: 'I\'m always open to research collaborations, internships, and interesting LLM/agent projects. If you\'d like to chat about a project, an opportunity, or just want to say hi, feel free to drop me a line — I\'ll get back to you as soon as I can.',
    zh: '欢迎和我聊科研合作、实习机会，或者任何有趣的大模型/智能体项目。无论是想讨论项目、机会，还是单纯打个招呼，都可以给我发邮件——我会尽快回复。',
  },
  'contact.cta': { en: 'Say Hello', zh: '打个招呼' },

  // Archive
  'archive.title': { en: 'Archive', zh: '存档' },
  'archive.subtitle': { en: 'A big list of things I\'ve worked on', zh: '我做过的事情' },
  'archive.year': { en: 'Year', zh: '年份' },
  'archive.titleCol': { en: 'Title', zh: '名称' },
  'archive.madeAt': { en: 'Made at', zh: '所属' },
  'archive.builtWith': { en: 'Built with', zh: '技术栈' },
  'archive.link': { en: 'Link', zh: '链接' },

  // Footer
  'footer.credit': {
    en: 'Copyright © 2026 Ruizhe Zhang All rights reserved. ',
    zh: '版权所有 © 2026 张瑞喆 保留所有权利。',
  },

  // ====== Markdown-driven content (mirrors files in content/) ======
  // Jobs
  'job.H3C.title': { en: 'LLM Algorithm Intern', zh: '大模型算法实习生' },
  'job.H3C.company': { en: 'H3C', zh: '新华三' },
  'job.H3C.range': { en: 'April 2026 - Present', zh: '2026 年 4 月 - 至今' },
  'job.H3C.b1': {
    en: 'Partnered with the Binjiang District Discipline Inspection Commission to build an agent memory system for multi-turn dialogue in classified business scenarios, supporting structured text parsing, knowledge graph conversion, and multi-source memory storage and retrieval.',
    zh: '与滨江区纪委监委合作，针对涉密业务场景下的多轮对话构建智能体记忆系统，支持结构化文本解析、知识图谱转换以及多源记忆的存储与检索。',
  },
  'job.H3C.b2': {
    en: 'Designed and implemented a layered memory backend covering short-term, long-term, episodic, and strategic memory, combining relational, vector, and graph databases plus file indices, with metadata indexing, vector similarity search, and graph traversal to improve recall accuracy and efficiency.',
    zh: '设计并实现了涵盖短期、长期、情景与策略记忆的分层记忆后端，融合关系型、向量与图数据库及文件索引，结合元数据索引、向量相似检索与图遍历，提升召回准确率与效率。',
  },
  'job.H3C.b3': {
    en: 'Built a dynamic prompt and recall mechanism that composes prompts from question intent, conversation summaries, related episodic memory, and answering strategies, enabling consistent and controllable responses across multi-turn adversarial dialogues.',
    zh: '构建了动态提示与召回机制，将问题意图、对话摘要、相关情景记忆与回答策略组合成提示词，从而在多轮对抗式对话中保持一致且可控的回答。',
  },

  'job.Huanjie.title': { en: 'AICD Project Lead', zh: 'AICD 项目负责人' },
  'job.Huanjie.company': { en: 'Sealos Cloud', zh: '珠海环界云' },
  'job.Huanjie.range': { en: 'January - April 2026', zh: '2026 年 1 月 - 4 月' },
  'job.Huanjie.b1': {
    en: 'Led development of an LLM-driven AICD system that removes traditional K8s/Docker operations barriers, enabling one-click automatic deployment of arbitrary GitHub projects onto the Sealos cloud OS.',
    zh: '主导开发基于大模型驱动的 AICD 系统，消除传统 K8s/Docker 运维门槛，实现任意 GitHub 项目向 Sealos 云操作系统的一键自动部署。',
  },
  'job.Huanjie.b2': {
    en: 'Designed an AI agent skill library, abstracting K8s internals into `deploy` (stateless workloads and network exposure) and `database` (MySQL, Redis, etc.) modules exposed as safe, standardized function-calling interfaces for LLMs.',
    zh: '设计了 AI 智能体技能库，将 K8s 内部能力抽象为 `deploy`（无状态工作负载与网络暴露）和 `database`（MySQL、Redis 等）模块，并以安全、规范的 function-calling 接口提供给大模型调用。',
  },
  'job.Huanjie.b3': {
    en: 'Deeply wrapped the K8s client to build a dynamic YAML rendering and dispatch engine, turning complex cluster resource management into declarative instructions an LLM can understand and emit.',
    zh: '深度封装 K8s 客户端，构建动态 YAML 渲染与下发引擎，将复杂的集群资源管理转化为大模型可理解、可生成的声明式指令。',
  },

  'job.ZJUXLab.title': { en: 'Student', zh: '学生' },
  'job.ZJUXLab.company': { en: 'ZJU Student Affairs', zh: '浙江大学学生工作' },
  'job.ZJUXLab.range': { en: 'September 2024 - Present', zh: '2024 年 9 月 - 至今' },
  'job.ZJUXLab.b1': {
    en: 'Member of the software technology team at Zhejiang University\'s Inspiration Interdisciplinary Innovation& Entrepreneurship Laboratory (X-Lab), participate in the research and commercialization of interdisciplinary laboratory projects.',
    zh: '浙江大学启真交叉学科创新创业实验室（X-Lab）软件技术团队成员，参与实验室交叉学科落地项目研究与成果转化。',
  },
  'job.ZJUXLab.b2': {
    en: 'Deputy Secretary of the Second General Branch of the Communist Youth League at Yunfeng College, Qiushi Honors School, organizing student initiatives, membership work and large-scale event operation alongside coursework.',
    zh: '求是学院云峰学园第二总支副书记，组织和推动学生工作、团员工作、大型活动运营。',
  },
  'job.ZJUXLab.b3': {
    en: 'Member of the Student Union at the College of Computer Science and Technology, organizing multiple events within the college',
    zh: '浙江大学计算机科学与技术学院学生会干事，承办学院内多场活动',
  },

  // Featured projects
  'featured.CozeSearchAgent.title': {
    en: 'Research Database AI Agent',
    zh: '科研数据库 AI 智能体',
  },
  'featured.CozeSearchAgent.p1': {
    en: 'In collaboration with Associate Professor Zheng Gang at Zhejiang University, this project builds an LLM + research-database agent that helps entrepreneurs quickly find and match with professors for research collaboration, lowering the information barrier between industry and academia.',
    zh: '与浙江大学郑刚副教授合作，构建大模型 + 科研数据库智能体，帮助创业者快速检索并匹配适合科研合作的教师，降低产业与学术之间的信息门槛。',
  },
  'featured.CozeSearchAgent.p2': {
    en: 'I collected and cleaned roughly **7,000 professor records** with deduplication and exception handling, applying a data-warehouse layered model (raw → cleaned → topic). I independently shipped the three core backend cloud functions — AI agent orchestration, search and aggregation, and favorites CRUD — and built the chat experience, including the main conversation page with message sending and side-panel history loading.',
    zh: '我独立完成了约 **7,000 条教师数据**的采集、去重与异常处理，并按照数据仓库分层（原始 → 清洗 → 主题）建模；独立完成后端三大核心云函数（AI 智能体编排、搜索与聚合、收藏 CRUD），并搭建了完整的对话体验，包括主会话页消息发送与侧栏历史加载。',
  },

  'featured.IntelliDeploy.title': {
    en: 'IntelliDeploy — Natural Language to Live Cloud App',
    zh: 'IntelliDeploy —— 一键变GitHub代码为云上产品',
  },
  'featured.IntelliDeploy.p1': {
    en: 'Users describe their needs in natural language and IntelliDeploy matches the best GitHub repository, then a multi-agent system auto-resolves heterogeneous environments, missing dependencies, and runtime errors before deploying to the Sealos cloud — delivering a live, accessible product end to end.',
    zh: '用户以自然语言描述需求，IntelliDeploy 自动匹配最合适的 GitHub 仓库，再由多智能体系统自动解决异构环境、缺失依赖与运行时错误，最终将应用部署到 Sealos 云上，端到端交付可访问的产品。',
  },
  'featured.IntelliDeploy.p2': {
    en: 'As tech lead I designed the full algorithm: a multi-agent decision system (**Builder** drafts the plan, **Reviewer** checks deployability, **Security** screens risks, **Consensus** finalizes the decision), four fallback deployment strategies (direct deploy, patch fix, scaffold composition, from-scratch authoring), and a self-healing loop with parallel repair, retry, timeout control, circuit breaking, and rollback after failed deploys. I also drove the API design and the full-stack frontend/backend implementation and integration.',
    zh: '作为技术负责人，我设计了完整的算法体系：多智能体决策系统（**Builder** 起草方案，**Reviewer** 审核可部署性，**Security** 排查风险，**Consensus** 最终决策），四种逐级回退的部署策略（直接部署、补丁修复、脚手架拼装、从零编写），以及具备并行修复、重试、超时控制、熔断与部署失败回滚的自愈循环。我同时主导了 API 设计与前后端的全栈实现与集成。',
  },

  'featured.SSMResearch.title': {
    en: 'Attention-Free Hybrid SSM Architecture',
    zh: '无注意力的混合 SSM 架构研究',
  },
  'featured.SSMResearch.p1': {
    en: 'Co-first author on a research project addressing how to balance **local detail precision** and **long-range dependency memory** in large-scale sequence and vision modeling under a constrained compute budget. We propose an **attention-free hybrid architecture** unifying the efficiency of SSMs with the fine-grained feature capacity of Transformers, using *k* learnable concept centers for **soft bucketing** that reduces O(n²) complexity to near-linear O(nk + k²), achieving **SOTA** on multiple benchmarks.',
    zh: '作为共同一作的研究项目，关注在有限算力下大规模序列与视觉建模中如何兼顾**局部细节精度**与**长程依赖记忆**。我们提出一种**无注意力的混合架构**，融合 SSM 的高效性与 Transformer 的细粒度特征建模能力，借助 *k* 个可学习的概念中心进行**软分桶**，将 O(n²) 复杂度降至近线性的 O(nk + k²)，并在多个 benchmark 上达到 **SOTA**。',
  },
  'featured.SSMResearch.p2': {
    en: 'I designed and implemented the core **routing and interaction module** — a dynamic router for token soft-bucketing and a concept graph for global interaction with adaptive routing policy and graph complexity — built the training framework with key regularizers (e.g. load-balancing loss) to prevent mode collapse, and ran end-to-end experiments by restructuring ImageNet-1K, Food-101, AGNews, and ACL-IMDb from semi-structured raw data into the training format.',
    zh: '我设计并实现了核心的**路由与交互模块**——用于 token 软分桶的动态路由器，以及具有自适应路由策略与图复杂度的概念图全局交互模块；搭建了训练框架并加入关键正则项（如负载均衡损失）防止模式坍塌；并将 ImageNet-1K、Food-101、AGNews、ACL-IMDb 从半结构化原始数据重构为训练所需格式，跑通了端到端实验。',
  },

  // Projects / Awards (filename → key)
  'project.AIHackathon2026.title': {
    en: 'AI Hackathon Tour 2026 — ZJU Stop',
    zh: '2026 AI Hackathon Tour 浙大站',
  },
  'project.AIHackathon2026.body': {
    en: 'Runner-up (2nd place) at AI Hackathon Tour 2026, Zhejiang University stop — building and shipping an AI-powered application end to end during the competition.',
    zh: '在 2026 AI Hackathon Tour 浙大站获得亚军（第二名），赛中从零端到端构建并交付一款 AI 驱动的应用。',
  },
  'project.AIHackathon2026.tech.0': { en: '2nd Place', zh: '亚军' },
  'project.AIHackathon2026.tech.1': { en: 'Hackathon', zh: '黑客松' },

  'project.CRRCCup2026.title': {
    en: 'CRRC Cup Renewable Energy Sci-Tech Competition',
    zh: '中车杯全国大学生可再生能源科技竞赛',
  },
  'project.CRRCCup2026.body': {
    en: 'First Prize at the 8th National College Student Renewable Energy Excellent Sci-Tech Works Competition ("CRRC Cup"), 2026.',
    zh: '“中国中车杯”第八届全国大学生可再生能源优秀科技作品竞赛一等奖',
  },
  'project.CRRCCup2026.tech.0': { en: 'First Prize', zh: '一等奖' },
  'project.CRRCCup2026.tech.1': { en: 'National Level', zh: '国家级' },

  'project.PKUGeek2026.title': {
    en: 'PKU New Youth Geek Hackathon — Tencent Light Public-Welfare Track',
    zh: '北大新青年极客马拉松 · 腾讯 Light 公益赛道',
  },
  'project.PKUGeek2026.body': {
    en: '3rd place at the Peking University 2026 New Youth Geek Hackathon, Tencent Light Public-Welfare track.',
    zh: '在北京大学 2026 年新青年极客马拉松腾讯 Light 公益赛道中获得季军（第三名）。',
  },
  'project.PKUGeek2026.tech.0': { en: '3rd Place', zh: '季军' },
  'project.PKUGeek2026.tech.1': { en: 'Hackathon', zh: '黑客松' },

  'project.Puyingjin2026.title': {
    en: 'ZJU Puyingjin Innovation & Entrepreneurship Competition',
    zh: '浙江大学"蒲公英杯"学生创新创业竞赛',
  },
  'project.Puyingjin2026.body': {
    en: 'Gold "Suiying" Award (1st place) at the 18th Zhejiang University "Puyingjin" Student Innovation and Entrepreneurship Competition, 2026.',
    zh: '在浙江大学第十八届"蒲公英杯"学生创新创业竞赛中获得"穗英"金奖（第一名）。',
  },
  'project.Puyingjin2026.tech.0': { en: 'Gold (1st)', zh: '金奖（第一名）' },
  'project.Puyingjin2026.tech.1': { en: 'University Level', zh: '校级' },

  'project.YangtzeDelta2026.title': {
    en: 'Yangtze River Delta Student Entrepreneurship Practice Competition',
    zh: '长三角学生创新创业实践竞赛',
  },
  'project.YangtzeDelta2026.body': {
    en: 'Runner-up (2nd place) at the 2026 Yangtze River Delta Student Innovation and Entrepreneurship Practice Competition, representing Zhejiang University.',
    zh: '代表浙江大学参加 2026 年长三角学生创新创业实践竞赛，获得亚军（第二名）。',
  },
  'project.YangtzeDelta2026.tech.0': { en: 'Award', zh: '获奖' },
  'project.YangtzeDelta2026.tech.1': { en: 'National Level', zh: '国家级' },
};

export default translations;
