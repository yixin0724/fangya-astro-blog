export const navItems = [
  { label: "首页", href: "/" },
  { label: "归档", href: "/archives" },
  { label: "标签", href: "/tags" },
  { label: "分类", href: "/categories" },
  { label: "项目", href: "/projects" },
  { label: "收藏", href: "/favorites" },
  { label: "关于", href: "/about" },
];

export const latestPosts = [
  {
    title: "Java 实现 OCR 文字识别功能",
    href: "/archives/java-ocr",
    category: "Backend",
    tags: ["Java", "OCR"],
    excerpt: "记录一次使用 Java 完成 OCR 文字识别功能的实现过程、依赖选择和接口设计。",
    date: "Jun 10, 2026",
    month: "June",
    year: "2026",
    readingTime: "6 min read",
  },
  {
    title: "AI Agent 工具调用流程笔记",
    href: "/archives/agent-tool-calling",
    category: "AI Agent",
    tags: ["LLM", "Agent"],
    excerpt: "整理 Agent 调用工具、读取结果、继续推理的基本工作流，以及项目实践中的设计取舍。",
    date: "Jun 08, 2026",
    month: "June",
    year: "2026",
    readingTime: "8 min read",
  },
  {
    title: "Spring Boot 接口设计复盘",
    href: "/archives/spring-api-design",
    category: "Backend",
    tags: ["Spring Boot", "API"],
    excerpt: "从一次后端接口开发出发，复盘参数校验、异常处理、返回结构和调试记录。",
    date: "Jun 05, 2026",
    month: "June",
    year: "2026",
    readingTime: "5 min read",
  },
  {
    title: "最近的学习节奏记录",
    href: "/archives/learning-rhythm",
    category: "Daily",
    tags: ["Diary", "Learning"],
    excerpt: "记录近期技术学习、项目推进和阅读思考，给之后的自己保留一份清晰的阶段快照。",
    date: "Jun 01, 2026",
    month: "June",
    year: "2026",
    readingTime: "4 min read",
  },
  {
    title: "Spring Boot 项目总结",
    href: "/archives/spring-boot-summary",
    category: "Project Notes",
    tags: ["Java", "Spring Boot"],
    excerpt: "回顾一次 Spring Boot 项目的模块设计、接口实现、问题排查和阶段性总结。",
    date: "Dec 20, 2025",
    month: "December",
    year: "2025",
    readingTime: "7 min read",
  },
  {
    title: "Python 爬虫基础整理",
    href: "/archives/python-crawler-basics",
    category: "Programming",
    tags: ["Python", "Crawler"],
    excerpt: "整理 Python 爬虫的请求、解析、异常处理和简单反爬策略。",
    date: "Jun 08, 2026",
    month: "June",
    year: "2026",
    readingTime: "5 min read",
  },
  {
    title: "HBase 安装记录",
    href: "/archives/hbase-install-notes",
    category: "Big Data",
    tags: ["HBase", "Hadoop"],
    excerpt: "记录一次 HBase 本地环境安装、配置检查和启动问题排查。",
    date: "Jun 01, 2026",
    month: "June",
    year: "2026",
    readingTime: "6 min read",
  },
];

export const tags = [
  { name: "Java", count: 18, href: "/tags/java" },
  { name: "Spring Boot", count: 14, href: "/tags/spring-boot" },
  { name: "AI Agent", count: 12, href: "/tags/ai-agent" },
  { name: "Python", count: 10, href: "/tags/python" },
  { name: "Crawler", count: 5, href: "/tags/crawler" },
  { name: "Hadoop", count: 6, href: "/tags/hadoop" },
  { name: "HBase", count: 4, href: "/tags/hbase" },
  { name: "Hive", count: 4, href: "/tags/hive" },
  { name: "OCR", count: 3, href: "/tags/ocr" },
  { name: "Backend", count: 9, href: "/tags/backend" },
  { name: "Daily", count: 20, href: "/tags/daily" },
  { name: "Essay", count: 8, href: "/tags/essay" },
];

export const projects = [
  {
    name: "Agent Knowledge Base Console",
    description: "用于把 Markdown 技术笔记整理成可检索知识单元的实验项目，服务后续 RAG 和 Agent 工作流。",
    status: "原型",
    tech: ["Astro", "Pagefind", "LLM", "RAG"],
    github: "https://github.com/yixin0724",
    details: "/projects/agent-knowledge-base",
  },
  {
    name: "Personal Blog System",
    description: "当前个人博客系统，承载技术写作、分类归档、全文搜索、RSS、站点地图和长期知识管理。",
    status: "建设中",
    tech: ["Astro", "Markdown", "TypeScript"],
    github: "https://github.com/yixin0724",
    details: "/projects/personal-blog-system",
  },
  {
    name: "AI Agent Demo",
    description: "围绕工具调用、流程自动化和 LLM 应用设计的小型 AI Agent 实验项目。",
    status: "规划中",
    tech: ["LLM", "Agent", "Python"],
    github: "https://github.com/yixin0724",
    details: "/projects/ai-agent-demo",
  },
  {
    name: "Backend Practice",
    description: "沉淀 API、数据库、认证授权和系统设计相关的后端练习与项目记录。",
    status: "维护中",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/yixin0724",
    details: "/projects/backend-practice",
  },
];

export const favorites = [
  {
    group: "开发工具",
    description: "日常编码、调试和项目开发常用工具。",
    items: [
      { name: "IntelliJ IDEA", href: "https://www.jetbrains.com/idea/", description: "Java 后端开发 IDE。" },
      { name: "VS Code", href: "https://code.visualstudio.com/", description: "前端开发和笔记编辑器。" },
      { name: "Docker", href: "https://www.docker.com/", description: "用于本地容器化开发。" },
    ],
  },
  {
    group: "AI 与 Agent",
    description: "AI Agent 和 LLM 应用开发相关资源。",
    items: [
      { name: "OpenAI Docs", href: "https://platform.openai.com/docs", description: "API 和模型文档。" },
      { name: "LangChain", href: "https://www.langchain.com/", description: "用于构建 LLM 工作流的框架。" },
      { name: "LlamaIndex", href: "https://www.llamaindex.ai/", description: "面向 LLM 应用的数据框架。" },
    ],
  },
  {
    group: "后端参考",
    description: "后端开发与系统设计参考。",
    items: [
      { name: "Spring", href: "https://spring.io/", description: "Java 后端生态。" },
      { name: "MySQL", href: "https://www.mysql.com/", description: "关系型数据库参考。" },
      { name: "Redis", href: "https://redis.io/", description: "缓存和数据结构存储。" },
    ],
  },
  {
    group: "技术博客",
    description: "值得反复阅读的技术博客和产品文章。",
    items: [
      { name: "Astro Blog", href: "https://astro.build/blog/", description: "Astro 更新和示例。" },
      { name: "GitHub Blog", href: "https://github.blog/", description: "工程实践和产品文章。" },
    ],
  },
  {
    group: "书籍",
    description: "技术学习中适合长期阅读的书籍。",
    items: [
      { name: "Designing Data-Intensive Applications", href: "https://dataintensive.net/", description: "分布式系统和数据架构。" },
      { name: "Clean Code", href: "https://www.oreilly.com/library/view/clean-code-a/9780136083238/", description: "可读、可维护的代码实践。" },
    ],
  },
  {
    group: "课程",
    description: "适合系统学习的课程和结构化材料。",
    items: [
      { name: "MIT 6.824", href: "https://pdos.csail.mit.edu/6.824/", description: "分布式系统课程笔记和实验。" },
      { name: "CS50", href: "https://cs50.harvard.edu/", description: "计算机科学基础课程。" },
    ],
  },
  {
    group: "常用网站",
    description: "常用于查文档、做参考和获取灵感的网站。",
    items: [
      { name: "MDN Web Docs", href: "https://developer.mozilla.org/", description: "Web 平台参考文档。" },
      { name: "Can I use", href: "https://caniuse.com/", description: "浏览器兼容性查询。" },
      { name: "DevDocs", href: "https://devdocs.io/", description: "快速 API 文档浏览器。" },
    ],
  },
];

export const focusAreas = [
  "后端工程",
  "AI Agent",
  "分布式系统",
  "技术写作",
  "个人知识管理",
];

export const techStack = [
  { label: "编程语言", value: "Java, Python, JavaScript, TypeScript, C++" },
  { label: "后端", value: "Spring Boot, MyBatis, REST API" },
  { label: "数据库", value: "MySQL, Redis" },
  { label: "大数据", value: "Hadoop, HBase, Hive" },
  { label: "AI", value: "LLM, AI Agent, RAG, Tool Calling" },
  { label: "工具", value: "Git, Docker, Linux" },
];

export const timeline = [
  { year: "2026", text: "研究 AI Agent，并持续建设个人博客系统。" },
  { year: "2025", text: "推进后端开发练习和项目实践。" },
  { year: "2024", text: "学习 Java、数据库、大数据和软件工程基础。" },
];
