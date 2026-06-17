export const navItems = [
  { label: "首页", href: "/" },
  { label: "归档", href: "/archives" },
  { label: "标签", href: "/tags" },
  { label: "分类", href: "/categories" },
  { label: "项目", href: "/projects" },
  { label: "所爱", href: "/favorites" },
  { label: "关于", href: "/about" },
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
    group: "英雄联盟",
    description: "LOL 爱好者，联盟五区玩家，刚入门游戏，目前主玩上单，也会玩 AD。",
    items: [
      { name: "游戏状态", description: "联盟五区，刚入门游戏，正在认真理解对线、兵线、团战和节奏。" },
      { name: "当前段位", description: "郊区大师的小菜 AD 和上单，技术还在练，嘴硬也还在练。" },
      { name: "偏爱位置", description: "上单更像长期博弈，AD 更考验走位和输出环境，两种体验都很上头。" },
    ],
  },
  {
    group: "AI 与大模型",
    description: "最喜欢 AI，尤其是大模型和深度学习，兴趣排名第一。",
    items: [
      { name: "深度学习", description: "对模型结构、训练范式和智能涌现保持长期兴趣。" },
      { name: "AI Agent", description: "关注工具调用、RAG、工作流自动化，以及 Agent 如何真正解决问题。" },
      { name: "大模型应用", description: "喜欢把 LLM 放进真实工程场景里，而不是只停留在概念层面。" },
    ],
  },
  {
    group: "技术学习",
    description: "对新技术有强烈好奇心，沉迷学习技术无法自拔。",
    items: [
      { name: "后端开发", description: "主要学习后端工程，Java、Spring Boot、数据库和系统设计是长期主线。" },
      { name: "全栈趋势", description: "Vibe Coding 的时代，后端也基本都在向全栈能力发展。" },
      { name: "学习状态", description: "学习使我快乐！(/doge)" },
    ],
  },
  {
    group: "科研方向",
    description: "长理读研中，也是国防科大的联合培养生，研究 HPC 工作流调度相关优化。",
    items: [
      { name: "HPC", description: "关注高性能计算场景下的工作流调度、任务编排和优化问题。" },
      { name: "研究习惯", description: "尽量把实验、阅读和工程实践都沉淀成可复盘的笔记。" },
      { name: "长期目标", description: "在科研和工程之间找到稳定连接点。" },
    ],
  },
];
