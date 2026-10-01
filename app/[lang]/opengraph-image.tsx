import { getDictionary } from "@/app/i18n";
import { OG_SIZE, OG_TYPE, ogImage } from "@/app/lib/og-image";
import { ogLang } from "@/app/lib/og-params";

export async function generateImageMetadata({ params }: { params: Promise<{ lang: string }> | { lang: string } }) {
  const t = getDictionary(await ogLang(params)).home.hero;
  return [{ id: "card", alt: t.title, size: OG_SIZE, contentType: OG_TYPE }];
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const t = getDictionary(await ogLang(params)).home.hero;
  return ogImage({ kicker: t.kicker, title: t.title });
}
