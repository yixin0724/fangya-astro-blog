# YiXin 个人博客

这是 YiXin 的个人博客项目，用于长期记录技术学习、项目实践、科研日记和阶段性思考。网站基于 Astro 构建，内容以 Markdown 管理，并通过分类、标签、归档和本地搜索组织成一个可持续维护的个人知识系统。

## 项目特点

- 中文个人技术博客，保留必要的专业英文名词，如 `AI Agent`、`LLM`、`RAG`、`GitHub`。
- 六大内容模块：后端工程、AI Agent、编程基础、大数据、日常札记、项目记录。
- 支持文章归档、标签索引、分类索引、RSS、站点地图和 Pagefind 本地搜索。
- 项目页提供“详情”和 `GitHub` 两个入口，详情页采用 README 风格介绍项目。
- 视觉风格偏精密、清爽、有技术感，支持浅色和深色模式。

## 技术栈

- [Astro](https://astro.build/)：静态站点框架
- Markdown / Content Collection：文章内容管理
- TypeScript：类型约束和工具函数
- Pagefind：静态站点本地全文搜索
- CSS：全站视觉系统、响应式布局和文章排版

## 目录结构

```text
.
├── public/                 # 静态资源、favicon、头像等
├── src/
│   ├── components/         # 通用组件和项目组件
│   ├── content/blog/       # Markdown 文章内容
│   ├── data/               # 导航、项目、收藏等站点数据
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
- `AI Agent`
- `Programming`
- `Big Data`
- `Daily Notes`
- `Project Notes`

页面展示时会转换为中文名称，例如“后端工程”“编程基础”“日常札记”等。

## 部署说明

项目构建产物位于 `dist/`，该目录由构建命令生成，不需要提交到 Git 仓库。部署时可将 `npm run build` 后生成的 `dist/` 发布到静态托管平台。

当前站点配置域名：

```ts
site: "https://www.fangya.top"
```

## GitHub

当前项目远程仓库：

[git@github.com:yixin0724/fangya-astro-blog.git](git@github.com:yixin0724/fangya-astro-blog.git)

---

© 2026 YiXin. 永远保持一颗学徒的心！
