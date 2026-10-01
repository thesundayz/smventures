import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VenturePage from "@/app/components/VenturePage";
import { findListedVenture, listedVentures } from "@/app/data/ventures";
import { fmt, getDictionary } from "@/app/i18n";
import { BASE_URL } from "@/app/lib/links";

// Only listed ventures have a page; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return listedVentures.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const venture = findListedVenture((await params).slug);
  if (!venture) return {};
  const t = getDictionary("en").venture;
  return {
    title: fmt(t.metaTitle, { name: venture.name }),
    description: venture.desc.en,
    alternates: { canonical: `/portfolio/${venture.slug}` },
  };
}

export default async function Page({ params }: PageProps<"/portfolio/[slug]">) {
  const venture = findListedVenture((await params).slug);
  if (!venture) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: venture.name,
    description: venture.desc.en,
    logo: new URL(venture.logo, BASE_URL).toString(),
    ...(venture.domain ? { url: `https://${venture.domain}` } : {}),
    ...(venture.founded ? { foundingDate: venture.founded } : {}),
    ...(venture.basedIn ? { location: { "@type": "Place", name: venture.basedIn.en } } : {}),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VenturePage venture={venture} t={getDictionary("en").venture} lang="en" portfolioHref="/#portfolio" />
    </>
  );
}
