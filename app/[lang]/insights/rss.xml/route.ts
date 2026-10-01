// GET /insights/rss.xml and /id/insights/rss.xml: the published posts in that language (never
// drafts in production), built once.
import { LANGS, getDictionary, isLang, localePath } from "@/app/i18n";
import { visibleInsights } from "@/app/lib/insights";
import { BASE_URL } from "@/app/lib/links";
import { rssFeed } from "@/app/lib/rss";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function GET(_request: Request, { params }: RouteContext<"/[lang]/insights/rss.xml">) {
  const { lang } = await params;
  if (!isLang(lang)) return new Response("Not found", { status: 404 });
  const t = getDictionary(lang).insights;
  const xml = rssFeed({
    title: t.feedTitle,
    description: t.metaDescription,
    link: `${BASE_URL}${localePath(lang, "/insights")}`,
    language: lang,
    posts: visibleInsights(lang),
  });
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
