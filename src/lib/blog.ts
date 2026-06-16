import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export const writingTopics = [
  {
    name: "Backend",
    label: "后端工程",
    href: "/categories/backend",
    description: "围绕 Java、Spring Boot、API、数据库和中间件的后端实践记录。",
  },
  {
    name: "AI Agent",
    label: "AI Agent",
    href: "/categories/ai-agent",
    description: "记录 LLM 应用、OCR、工具调用、RAG 和 Agent 实验。",
  },
  {
    name: "Programming",
    label: "编程基础",
    href: "/categories/programming",
    description: "整理编程语言、算法、数据结构、开发工具和编码习惯。",
  },
  {
    name: "Big Data",
    label: "大数据",
    href: "/categories/big-data",
    description: "沉淀 Hadoop、HBase、Hive、分布式存储和数据处理笔记。",
  },
  {
    name: "Daily Notes",
    label: "日常札记",
    href: "/categories/daily-notes",
    description: "保留科研、学习、阅读、语言训练和生活片段。",
  },
  {
    name: "Project Notes",
    label: "项目记录",
    href: "/categories/project-notes",
    description: "复盘项目实现、调试过程、阶段总结和工程取舍。",
  },
] as const;

export function getPostSlug(post: BlogPost) {
  return post.id.replace(/\.(md|mdx)$/i, "");
}

export function getPostUrl(post: BlogPost) {
  return `/blog/${getPostSlug(post)}`;
}

export function slugify(value: string) {
  return value.toLowerCase().trim().replace(/\s+/g, "-");
}

export function getPostCategories(post: BlogPost) {
  const { categories } = post.data;
  return Array.isArray(categories) ? categories : [categories];
}

export function getPrimaryCategory(post: BlogPost) {
  return getPostCategories(post)[0] ?? "Daily Notes";
}

export function getCategoryLabel(categoryName: string) {
  return writingTopics.find((topic) => topic.name === categoryName)?.label ?? categoryName;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", { month: "long" }).format(date);
}

export function getReadingTime(post: BlogPost) {
  const words = post.body.replace(/```[\s\S]*?```/g, "").trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `约 ${minutes} 分钟`;
}

export function sortPostsByDate(posts: BlogPost[]) {
  return [...posts].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function filterPublishedPosts(posts: BlogPost[]) {
  return posts.filter((post) => !post.data.draft);
}

export function getTagCounts(posts: BlogPost[]) {
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count, href: `/tags/${slugify(name)}` }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getCategoryCounts(posts: BlogPost[]) {
  const counts = new Map<string, number>(writingTopics.map((topic) => [topic.name, 0]));
  for (const post of posts) {
    for (const category of getPostCategories(post)) {
      if (counts.has(category)) {
        counts.set(category, (counts.get(category) ?? 0) + 1);
      }
    }
  }

  return writingTopics.map((topic) => {
    const count = counts.get(topic.name) ?? 0;
    return {
      ...topic,
      postCount: count,
      count: `${count} 篇文章`,
    };
  });
}
