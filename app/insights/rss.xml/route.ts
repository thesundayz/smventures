// GET /insights/rss.xml: the published English posts (never drafts in production), built once.
import { getDictionary } from "@/app/i18n";
import { visibleInsights } from "@/app/lib/insights";
import { BASE_URL } from "@/app/lib/links";
import { rssFeed } from "@/app/lib/rss";

export const dynamic = "force-static";

export function GET() {
  const t = getDictionary("en").insights;
  const xml = rssFeed({
    title: t.feedTitle,
    description: t.metaDescription,
    link: `${BASE_URL}/insights`,
    language: "en",
    posts: visibleInsights("en"),
  });
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
