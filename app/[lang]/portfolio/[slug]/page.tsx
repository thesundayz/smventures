import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VenturePage from "@/app/components/VenturePage";
import { findListedVenture, listedVentures } from "@/app/data/ventures";
import { fmt, getDictionary, localePath } from "@/app/i18n";
import { langFrom } from "@/app/i18n/server";
import { BASE_URL } from "@/app/lib/links";
import { alternates } from "@/app/lib/seo";

// Only listed ventures have a page; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return listedVentures.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/portfolio/[slug]">): Promise<Metadata> {
  const lang = await langFrom(params);
  const venture = findListedVenture((await params).slug);
  if (!venture) return {};
  const t = getDictionary(lang).venture;
  return {
    title: { absolute: fmt(t.metaTitle, { name: venture.name }) },
    description: venture.desc[lang],
    alternates: alternates(lang, `/portfolio/${venture.slug}`),
  };
}

export default async function Page({ params }: PageProps<"/[lang]/portfolio/[slug]">) {
  const lang = await langFrom(params);
  const venture = findListedVenture((await params).slug);
  if (!venture) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: venture.name,
    description: venture.desc[lang],
    logo: new URL(venture.logo, BASE_URL).toString(),
    ...(venture.domain ? { url: `https://${venture.domain}` } : {}),
    ...(venture.founded ? { foundingDate: venture.founded } : {}),
    ...(venture.basedIn ? { location: { "@type": "Place", name: venture.basedIn[lang] } } : {}),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VenturePage venture={venture} t={getDictionary(lang).venture} lang={lang} portfolioHref={`${localePath(lang, "/")}#portfolio`} />
    </>
  );
}
