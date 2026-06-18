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
  'hero.tagline': { en: 'Exploring the world with AI agents.', zh: '用智能体探索世界.' },
  'hero.bio': {
    en: 'I\'m a software engineering undergraduate at __ZJU__, focused on large language model systems, AI agents, and cloud-native deployment. Currently, I\'m researching attention-free hybrid SSM architectures and interning as an LLM algorithm engineer at __H3C__.',
    zh: '我是__ZJU__计算机科学与技术学院本科生，专注于大语言模型系统、AI 智能体方向前沿探索与应用开发。目前正在研究大模型记忆系统，并在__H3C__担任大模型算法实习工程师。',
  },
  'hero.zju': { en: 'Zhejiang University', zh: '浙江大学' },
  'hero.h3c': { en: 'H3C', zh: '新华三' },
  'hero.cta': { en: 'Get in touch', zh: '联系我' },

  // About
  'about.heading': { en: 'About Me', zh: '关于我' },
  'about.p1': {
    en: 'Hello! I\'m Ruizhe Zhang, a software engineering undergraduate at __ZJU__\'s College of Computer Science and Technology, and a member of the software team at ZJU Inspiration Interdisciplinary Innovation& Entrepreneurship Laboratory.',
    zh: '你好！我是张瑞喆，__ZJU__计算机科学与技术学院的本科生，浙江大学启真交叉学科创新创业实验室（X-Lab）软件团队成员。',
  },
  'about.p2': {
    en: 'I work at the intersection of large language models and systems engineering. My research explores attention-free hybrid SSM architectures and memory systems, and my recent projects focus on multi-agent deployment pipelines, RAG-based research assistants, and long-horizon memory systems for conversational agents.',
    zh: '研究方向覆盖大语言模型与系统工程。探索过无注意力的混合 SSM 架构，大模型记忆机制；近期的项目主要围绕对话智能体的长短程记忆系统、多智能体流水线、基于 RAG 的 AI Agent 应用系统。',
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
  'about.huanjie': { en: 'Sealos Cloud', zh: '环界云计算' },

  // Jobs
  'jobs.heading': { en: 'Where I\'ve Worked', zh: '我的工作经历' },

  // Featured
  'featured.heading': { en: 'Some Things I\'ve Built', zh: '一些我做过的项目' },
  'featured.overline': { en: 'Featured Project', zh: '精选项目' },
  'featured.learnMore': { en: 'Learn More', zh: '了解更多' },

  // Projects
  'projects.heading': { en: 'Other Noteworthy Projects', zh: '我做过的事情' },
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
    en: 'Designed by Bchiang Chiang',
    zh: '由 Bchiang Chiang 设计',
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
  'job.Huanjie.company': { en: 'Sealos Cloud', zh: '环界云计算' },
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

  // 'job.ZJUXLab.title': { en: 'Student', zh: '学生' },
  // 'job.ZJUXLab.company': { en: 'ZJU Student Affairs', zh: '浙江大学学生工作' },
  // 'job.ZJUXLab.range': { en: 'September 2024 - Present', zh: '2024 年 9 月 - 至今' },
  // 'job.ZJUXLab.b1': {
  //   en: 'Member of the software technology team at Zhejiang University\'s Inspiration Interdisciplinary Innovation& Entrepreneurship Laboratory (X-Lab), participate in the research and commercialization of interdisciplinary laboratory projects.',
  //   zh: '浙江大学启真交叉学科创新创业实验室（X-Lab）软件技术团队成员，参与实验室交叉学科落地项目研究与成果转化。',
  // },
  // 'job.ZJUXLab.b2': {
  //   en: 'Deputy Secretary of the Second General Branch of the Communist Youth League at Yunfeng College, Qiushi Honors School, organizing student initiatives, membership work and large-scale event operation alongside coursework.',
  //   zh: '求是学院云峰学园第二总支副书记，组织和推动学生工作、团员工作、大型活动运营。',
  // },
  // 'job.ZJUXLab.b3': {
  //   en: 'Member of the Student Union at the College of Computer Science and Technology, organizing multiple events within the college',
  //   zh: '浙江大学计算机科学与技术学院学生会干事，承办学院内多场活动',
  // },

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
    en: 'Co-first author on a research project addressing how to balance **local detail precision** and **long-range dependency memory** in large-scale sequence and vision modeling under a constrained compute budget. We propose an **attention-free hybrid architecture** unifying the efficiency of SSMs with the fine-grained feature capacity of Transformers, reducing O(n²) complexity to near-linear, achieving **SOTA** on multiple benchmarks.',
    zh: '作为共同一作的研究项目，关注在有限算力下大规模序列与视觉建模中如何兼顾**局部细节精度**与**长程依赖记忆**。我们提出一种**无注意力的混合架构**，融合 SSM 的高效性与 Transformer 的细粒度特征建模能力，将二次复杂度降至近线性，并在多个 benchmark 上达到 **SOTA**。',
  },

  // Projects (filename → key)
  'project.IntelliDeploy.title': {
    en: 'IntelliDeploy',
    zh: 'IntelliDeploy',
  },
  'project.IntelliDeploy.body': {
    en: 'The world\'s first app that takes an idea to production with a single chat and a single click — a next-gen idea-to-product delivery loop.',
    zh: '全球首款用户通过一次对话一次点击即可将想法急速落地的应用，做新一代的创意 — 产品交付闭环。',
  },
  'project.IntelliDeploy.tech.0': { en: 'Python', zh: 'Python' },
  'project.IntelliDeploy.tech.1': { en: 'TypeScript', zh: 'TypeScript' },
  'project.IntelliDeploy.tech.2': { en: 'LLM Agents', zh: '大模型智能体' },

  'project.Pawzzle.title': {
    en: 'Pawzzle',
    zh: 'Pawzzle 寻爪',
  },
  'project.Pawzzle.body': {
    en: 'An AI-Agent-driven human–pet matching and onboarding-support product, addressing stray-animal abandonment and shelter survival crises.',
    zh: '一款 AI Agent 驱动的人宠匹配 + 磨合期支持产品，解决流浪动物弃养困境与救助站生存危机。',
  },
  'project.Pawzzle.tech.0': { en: 'TypeScript', zh: 'TypeScript' },
  'project.Pawzzle.tech.1': { en: 'Java', zh: 'Java' },
  'project.Pawzzle.tech.2': { en: 'AI Agent', zh: 'AI 智能体' },

  'project.TradingAgent.title': {
    en: 'Trading-Agent',
    zh: 'Trading-Agent',
  },
  'project.TradingAgent.body': {
    en: 'A LangChain-based stock analysis platform that pushes first-hand insights to WeChat, making investment information easier to access.',
    zh: '基于 LangChain 的股票分析平台，并将一手咨询推送到微信，让投资信息更加便捷地被获取。',
  },
  'project.TradingAgent.tech.0': { en: 'Python', zh: 'Python' },
  'project.TradingAgent.tech.1': { en: 'LangChain', zh: 'LangChain' },
  'project.TradingAgent.tech.2': { en: 'WeChat', zh: '微信' },

  'project.PythonHelper.title': {
    en: 'Python AI Teaching Assistant',
    zh: 'Python AI 助教',
  },
  'project.PythonHelper.body': {
    en: 'Co-developed with Zhejiang University\'s Python teaching group — an AI teaching assistant exploring the next generation of learning platforms.',
    zh: '与浙江大学 Python 课题组合作开发 AI 助教，探索下一代学习平台。',
  },
  'project.PythonHelper.tech.0': { en: 'JavaScript', zh: 'JavaScript' },
  'project.PythonHelper.tech.1': { en: 'Python', zh: 'Python' },
  'project.PythonHelper.tech.2': { en: 'LLM', zh: '大模型' },

  'project.CozeSearchAgent.title': {
    en: 'Research Database AI Agent',
    zh: '科研数据库 AI Agent',
  },
  'project.CozeSearchAgent.body': {
    en: 'A ZJU-flavored Google Scholar — quickly connecting entrepreneurs with ZJU professors to streamline research commercialization.',
    zh: 'Google Scholar 浙大版，快速对接企业家与浙大教授，优化成果转化链路。',
  },
  'project.CozeSearchAgent.tech.0': { en: 'JavaScript', zh: 'JavaScript' },
  'project.CozeSearchAgent.tech.1': { en: 'Coze', zh: 'Coze' },
  'project.CozeSearchAgent.tech.2': { en: 'RAG', zh: 'RAG' },

  'project.HumiHop.title': {
    en: 'HumiHop App',
    zh: 'HumiHop App',
  },
  'project.HumiHop.body': {
    en: 'A dance-teaching platform with precise motion capture, letting you sharpen your moves from home.',
    zh: '舞蹈教学平台，实现精准动捕，在家也能精进舞蹈技术。',
  },
  'project.HumiHop.tech.0': { en: 'Python', zh: 'Python' },
  'project.HumiHop.tech.1': { en: 'JavaScript', zh: 'JavaScript' },
  'project.HumiHop.tech.2': { en: 'Motion Capture', zh: '动作捕捉' },

  'project.Mapify.title': {
    en: 'Mapify',
    zh: 'Mapify',
  },
  'project.Mapify.body': {
    en: 'Untangles the logic of an entire LLM conversation and visualizes it as a graph, making chats easier to follow.',
    zh: '梳理与大模型整场对话的逻辑关系并图谱可视化，让聊天更有条理。',
  },
  'project.Mapify.tech.0': { en: 'TypeScript', zh: 'TypeScript' },
  'project.Mapify.tech.1': { en: 'JavaScript', zh: 'JavaScript' },
  'project.Mapify.tech.2': { en: 'LLM', zh: '大模型' },

  'project.ZhongcheCup.title': {
    en: 'BladeSight',
    zh: 'BladeSight',
  },
  'project.ZhongcheCup.body': {
    en: 'A complete non-contact wind-turbine inspection system delivering a sub-pixel-accurate detection algorithm.',
    zh: '一套完整的非接触式风机巡检系统，负责计算机视觉部分，实现亚像素精度识别算法。',
  },
  'project.ZhongcheCup.tech.0': { en: 'Python', zh: 'Python' },
  'project.ZhongcheCup.tech.1': { en: 'Computer Vision', zh: '计算机视觉' },
  'project.ZhongcheCup.tech.2': { en: 'Sub-pixel', zh: '亚像素' },

  'project.LingTour.title': {
    en: 'LingTour',
    zh: 'LingTour',
  },
  'project.LingTour.body': {
    en: 'Precisely matches travelers with local guides, reinventing the on-the-ground travel experience.',
    zh: '实现游客与地方领队精准匹配，重塑游客旅游体验。',
  },
  'project.LingTour.tech.0': { en: 'TypeScript', zh: 'TypeScript' },
  'project.LingTour.tech.1': { en: 'Vue', zh: 'Vue' },
  'project.LingTour.tech.2': { en: 'WeChat MP', zh: '微信小程序' },

  'project.MiniSQL.title': {
    en: 'MiniSQL',
    zh: 'MiniSQL',
  },
  'project.MiniSQL.body': {
    en: 'A hand-written MiniSQL database system, implementing the full database stack from the ground up.',
    zh: '手写 MiniSQL 数据库系统，从底层开始实现数据库完整功能。',
  },
  'project.MiniSQL.tech.0': { en: 'C++', zh: 'C++' },
  'project.MiniSQL.tech.1': { en: 'C', zh: 'C' },
  'project.MiniSQL.tech.2': { en: 'Yacc/Lex', zh: 'Yacc/Lex' },

  // Awards section heading + nav
  'awards.heading': { en: 'Awards & Honors', zh: '我拿过的奖' },
  'awards.prev': { en: 'Previous', zh: '上一个' },
  'awards.next': { en: 'Next', zh: '下一个' },

  // Awards (filename → key)
  'award.ResearchTraining.title': {
    en: 'National College Student Innovation Training Program',
    zh: '国家级科研训练计划',
  },
  'award.ResearchTraining.body': {
    en: 'Selected',
    zh: '项目入选',
  },
  'award.ResearchTraining.tags.0': { en: 'Selected', zh: '项目入选' },
  'award.ResearchTraining.tags.1': { en: 'National Level', zh: '国家级' },

  'award.CRRCCup2026.title': {
    en: 'CRRC Cup Renewable Energy Sci-Tech Competition',
    zh: '"中国中车杯"全国大学生可再生能源科技作品竞赛',
  },
  'award.CRRCCup2026.body': {
    en: 'First Prize',
    zh: '一等奖',
  },
  'award.CRRCCup2026.tags.0': { en: 'First Prize', zh: '一等奖' },
  'award.CRRCCup2026.tags.1': { en: 'National Level', zh: '国家级' },

  'award.YangtzeDelta2026.title': {
    en: 'Yangtze River Delta Student Entrepreneurship Practice Competition',
    zh: '长三角地区大学生创新创业实践赛',
  },
  'award.YangtzeDelta2026.body': {
    en: 'Runner-up (2nd place)',
    zh: '亚军（第二名）',
  },
  'award.YangtzeDelta2026.tags.0': { en: 'Runner-up', zh: '亚军' },
  'award.YangtzeDelta2026.tags.1': { en: 'National Level', zh: '国家级' },

  'award.Puyingjin2026.title': {
    en: 'ZJU Puyingjin Innovation & Entrepreneurship Competition',
    zh: '浙江大学"蒲公英"大学生创新大赛',
  },
  'award.Puyingjin2026.body': {
    en: 'Gold "Suiying" Award (1st place)',
    zh: '金穗奖（第一名）',
  },
  'award.Puyingjin2026.tags.0': { en: 'Gold (1st)', zh: '金奖' },
  'award.Puyingjin2026.tags.1': { en: 'University Level', zh: '校级' },

  'award.AIHackathon2026.title': {
    en: 'AI Hackathon Tour 2026 — ZJU Stop',
    zh: 'AI Hackathon Tour 2026 浙大站',
  },
  'award.AIHackathon2026.body': {
    en: 'Runner-up (2nd place)',
    zh: '亚军（第二名）',
  },
  'award.AIHackathon2026.tags.0': { en: '2nd Place', zh: '亚军' },
  'award.AIHackathon2026.tags.1': { en: 'Hackathon', zh: '黑客松' },

  'award.PKUGeek2026.title': {
    en: 'PKU New Youth Geek Hackathon',
    zh: '北京大学新青年极客松',
  },
  'award.PKUGeek2026.body': {
    en: '3rd place',
    zh: '季军（第三名）',
  },
  'award.PKUGeek2026.tags.0': { en: '3rd Place', zh: '季军' },
  'award.PKUGeek2026.tags.1': { en: 'Hackathon', zh: '黑客松' },

  'award.ChuangyingFuture.title': {
    en: 'Chuangying Future Innovation Competition',
    zh: '“创赢未来”2026创业大赛杭州市选拔赛',
  },
  'award.ChuangyingFuture.body': {
    en: 'Second Prize',
    zh: '二等奖',
  },
  'award.ChuangyingFuture.tags.0': { en: '2nd Place', zh: '二等奖' },
  'award.ChuangyingFuture.tags.1': { en: 'City Level', zh: '市级' },

  'award.LarkAI.title': {
    en: 'Lark AI Campus Challenge',
    zh: '飞书AI校园挑战赛',
  },
  'award.LarkAI.body': {
    en: 'Direct to the finals',
    zh: '直通决赛',
  },
  'award.LarkAI.tags.0': { en: 'Direct to the finals', zh: '直通决赛' },
  'award.LarkAI.tags.1': { en: 'Hackathon', zh: '黑客松' },
};

export default translations;
