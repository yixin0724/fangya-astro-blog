import { getCollection } from "astro:content";
import {
  filterPublishedPosts,
  formatDate,
  getPostUrl,
  getPrimaryCategory,
  sortPostsByDate,
} from "../lib/blog";
import { siteConfig } from "../site.config";

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const posts = sortPostsByDate(filterPublishedPosts(await getCollection("blog"))).slice(0, 30);
  const siteUrl = new URL("/", siteConfig.url).toString();

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${xmlEscape(siteConfig.name)}</title>
    <link>${xmlEscape(siteUrl)}</link>
    <description>${xmlEscape(siteConfig.description)}</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${posts
  .map((post) => {
    const url = new URL(getPostUrl(post), siteConfig.url).toString();
    return `    <item>
      <title>${xmlEscape(post.data.title)}</title>
      <link>${xmlEscape(url)}</link>
      <guid>${xmlEscape(url)}</guid>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      <category>${xmlEscape(getPrimaryCategory(post))}</category>
      <description>${xmlEscape(`${post.data.description} (${formatDate(post.data.pubDate)})`)}</description>
    </item>`;
  })
  .join("\n")}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
