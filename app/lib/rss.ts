// RSS 2.0 for Insights. No imports, so `node --test` can load it directly.

const escapeXml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]!)

type FeedPost = { slug: string; title: string; date: string; summary: string }

export function rssFeed({ title, description, link, language, posts }: { title: string; description: string; link: string; language: string; posts: FeedPost[] }): string {
  const items = posts
    .map((post) => {
      const url = `${link}/${post.slug}`
      const pubDate = new Date(`${post.date}T00:00:00Z`).toUTCString()
      return [
        '    <item>',
        `      <title>${escapeXml(post.title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <description>${escapeXml(post.summary)}</description>`,
        '    </item>',
      ].join('\n')
    })
    .join('\n')
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${escapeXml(title)}</title>`,
    `    <link>${escapeXml(link)}</link>`,
    `    <description>${escapeXml(description)}</description>`,
    `    <language>${language}</language>`,
    `    <atom:link href="${escapeXml(`${link}/rss.xml`)}" rel="self" type="application/rss+xml" />`,
    ...(items ? [items] : []),
    '  </channel>',
    '</rss>',
    '',
  ].join('\n')
}
