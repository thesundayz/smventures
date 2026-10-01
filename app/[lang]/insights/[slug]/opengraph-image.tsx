import { getDictionary } from "@/app/i18n";
import { formatDate } from "@/app/lib/format";
import { visibleInsights } from "@/app/lib/insights";
import { OG_SIZE, OG_TYPE, ogImage } from "@/app/lib/og-image";
import { ogLang } from "@/app/lib/og-params";

type Params = { lang: string; slug: string };

export async function generateImageMetadata({ params }: { params: Promise<Params> | Params }) {
  const lang = await ogLang(params);
  const { slug } = await params;
  const post = visibleInsights(lang).find((p) => p.slug === slug);
  return [{ id: "card", alt: post?.title ?? slug, size: OG_SIZE, contentType: OG_TYPE }];
}

export default async function Image({ params }: { params: Promise<Params> }) {
  const lang = await ogLang(params);
  const { slug } = await params;
  const t = getDictionary(lang).insights;
  const post = visibleInsights(lang).find((p) => p.slug === slug);
  if (!post) return ogImage({ kicker: t.kicker, title: t.title });
  return ogImage({ kicker: `${t.kicker} · ${formatDate(post.date, lang)}`, title: post.title, subtitle: post.summary });
}
