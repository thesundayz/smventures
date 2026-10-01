import { findListedVenture, sectorOf } from "@/app/data/ventures";
import { getDictionary } from "@/app/i18n";
import { OG_SIZE, OG_TYPE, ogImage } from "@/app/lib/og-image";
import { ogLang } from "@/app/lib/og-params";

type Params = { lang: string; slug: string };

export async function generateImageMetadata({ params }: { params: Promise<Params> | Params }) {
  const { slug } = await params;
  const venture = findListedVenture(slug);
  return [{ id: "card", alt: venture?.name ?? slug, size: OG_SIZE, contentType: OG_TYPE }];
}

export default async function Image({ params }: { params: Promise<Params> }) {
  const lang = await ogLang(params);
  const venture = findListedVenture((await params).slug);
  const t = getDictionary(lang).home.portfolio;
  if (!venture) return ogImage({ kicker: t.kicker, title: getDictionary(lang).brand.name });
  return ogImage({ kicker: `${t.kicker} · ${sectorOf(venture.tag[lang])}`, title: venture.name, subtitle: venture.headline[lang] });
}
