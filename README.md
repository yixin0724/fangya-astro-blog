# YiXin 个人博客

这是 YiXin 的个人博客项目，用于长期记录技术学习、项目实践、科研日记和阶段性思考。网站基于 Astro 构建，内容以 Markdown 管理，并通过分类、标签、归档和本地搜索组织成一个可持续维护的个人知识系统。

在线地址：[https://www.fangya.top](https://www.fangya.top)

## 项目特点

- 中文个人技术博客，保留必要的专业英文名词，如 `AI Agent`、`LLM`、`RAG`、`GitHub`。
- 六大内容模块：后端工程、AI、编程基础、大数据、日常札记、项目记录。
- 支持文章归档、标签索引、分类索引、RSS、站点地图和 Pagefind 本地搜索。
- 项目页提供“详情”和 `GitHub` 两个入口，详情页采用 README 风格介绍项目。
- 视觉风格偏精密、清爽、有技术感，支持浅色和深色模式。

## 技术栈

- [Astro](https://astro.build/)：静态站点框架
- Markdown / Content Collection：文章内容管理
- TypeScript：类型约束和工具函数
- Pagefind：静态站点本地全文搜索
- CSS：全站视觉系统、响应式布局和文章排版

## 环境要求

- Node.js `>=22.12.0`
- npm

## 目录结构

```text
.
├── public/                 # 静态资源、favicon、头像等
├── src/
│   ├── components/         # 通用组件和项目组件
│   ├── content/blog/       # Markdown 文章内容
│   ├── data/               # 导航、项目、所爱等站点数据
│   ├── layouts/            # 全局布局和文章布局
│   ├── lib/                # 博客工具函数
│   ├── pages/              # 页面路由
│   └── site.config.ts      # 站点基础配置
├── astro.config.mjs
├── package.json
└── README.md
```

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

开发服务默认运行在 `http://localhost:4321`。需要注意的是，开发模式不会生成 Pagefind 搜索索引。

## 构建与预览

生成静态站点和搜索索引：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

如果需要测试搜索功能，请先运行 `npm run build`，再运行 `npm run preview`，并在预览地址中测试搜索。

## 内容维护

文章位于 `src/content/blog/`，每篇文章通过 frontmatter 管理标题、描述、发布时间、分类和标签。

分类建议保持为以下六类之一：

- `Backend`
- `AI`
- `Programming`
- `Big Data`
- `Daily Notes`
- `Project Notes`

页面展示时会转换为中文名称，例如“后端工程”“编程基础”“日常札记”等。

### 新增普通文章

在 `src/content/blog/` 下新建一个 Markdown 文件，文件名会成为文章访问路径。例如：

```text
src/content/blog/llm-rag-notes.md
```

文章头信息示例：

```md
---
title: "RAG 学习记录"
description: "记录一次 RAG 基础流程、向量检索和提示词组织的学习过程。"
pubDate: 2026-06-17
categories: "AI"
tags:
  - RAG
  - 大模型
  - 学习记录
draft: false
---

这里写正文内容。
```

维护规则：

- `categories` 建议只填写一个，并且使用上面六大分类之一。
- `tags` 可以填写多个，不需要提前注册，系统会自动生成对应标签页。
- `draft: true` 表示草稿，不会进入正式文章列表。
- 新文章会自动进入首页最新文章、文章列表、归档、分类页、标签页、RSS、站点地图和搜索索引。

### 新增项目文章

项目相关的长文复盘、开发记录或 README 风格说明，也放在 `src/content/blog/` 下，只需要把分类设置为 `Project Notes`。例如：

```text
src/content/blog/my-project-record.md
```

项目文章头信息示例：

```md
---
title: "个人博客系统项目复盘"
description: "记录个人博客系统的设计目标、技术选型、页面结构和后续优化方向。"
pubDate: 2026-06-17
categories: "Project Notes"
tags:
  - 项目实战
  - Astro
  - Markdown
draft: false
---

这里写项目复盘、开发过程或 README 风格说明。
```

如果这个项目还需要出现在导航栏的“项目”页面中，需要额外维护两个位置：

1. 在 `src/data/mock.ts` 的 `projects` 数组中新增项目卡片，填写 `name`、`description`、`status`、`tech`、`github` 和 `details`。
2. 在 `src/pages/projects/` 下新增一个详情页，例如 `my-project.astro`，使用现有的 `ProjectReadme` 组件编写 README 风格项目说明。

项目卡片示例：

```ts
{
  name: "My Project",
  description: "一句话说明这个项目解决什么问题。",
  status: "建设中",
  tech: ["Astro", "TypeScript", "Markdown"],
  github: "https://github.com/yixin0724",
  details: "/projects/my-project",
}
```

项目详情页示例：

```astro
---
import ProjectReadme from "../../components/projects/ProjectReadme.astro";
---

<ProjectReadme
  title="My Project"
  status="建设中"
  description="一句话说明这个项目解决什么问题。"
  tech={["Astro", "TypeScript", "Markdown"]}
  github="https://github.com/yixin0724"
  overview="这里写项目背景、目标和整体设计。"
  features={[
    "说明项目已经具备的能力。",
    "说明关键模块或技术亮点。",
  ]}
  roadmap={[
    "说明后续计划优化的方向。",
  ]}
/>
```

### 更新后检查

新增或修改文章后，建议执行：

```bash
npm run build
```

如果需要测试搜索功能，请先构建，再执行：

```bash
npm run preview
```

## 部署说明

项目构建产物位于 `dist/`，该目录由构建命令生成，不需要提交到 Git 仓库。部署时可将 `npm run build` 后生成的 `dist/` 发布到静态托管平台。

当前站点配置域名：

```ts
site: "https://www.fangya.top"
```

## GitHub

当前项目远程仓库：

```bash
git@github.com:yixin0724/fangya-astro-blog.git
```

---

© 2026 YiXin. 永远保持一颗学徒的心！
