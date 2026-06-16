import { getCollection } from "astro:content";
import { filterPublishedPosts, getPostUrl, sortPostsByDate } from "../lib/blog";
import { siteConfig } from "../site.config";

const staticRoutes = [
  "/",
  "/blog",
  "/archives",
  "/tags",
  "/categories",
  "/projects",
  "/favorites",
  "/about",
];

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const posts = sortPostsByDate(filterPublishedPosts(await getCollection("blog")));
  const urls = [
    ...staticRoutes.map((route) => ({
      loc: new URL(route, siteConfig.url).toString(),
      lastmod: new Date().toISOString(),
    })),
    ...posts.map((post) => ({
      loc: new URL(getPostUrl(post), siteConfig.url).toString(),
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString(),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${xmlEscape(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
