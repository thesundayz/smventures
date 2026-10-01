import type { Metadata } from "next";
import ShareholdersBand from "@/app/components/ShareholdersBand";
import Approach from "@/app/components/home/Approach";
import HomeHero from "@/app/components/home/HomeHero";
import PortfolioGrid from "@/app/components/home/PortfolioGrid";
import InsightsSection from "@/app/components/insights/InsightsSection";
import { getDictionary, localePath } from "@/app/i18n";
import { langFrom } from "@/app/i18n/server";
import { publishedInsights } from "@/app/lib/insights";
import { BASE_URL, INSTAGRAM, LINKEDIN_COMPANY, LOGO_URL } from "@/app/lib/links";
import { pageMetadata } from "@/app/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = await langFrom(params);
  const t = getDictionary(lang).meta;
  return pageMetadata({ lang, path: "/", title: t.title, description: t.description, absoluteTitle: true });
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = await langFrom(params);
  const t = getDictionary(lang);
  const insights = publishedInsights(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SMVentures",
    url: BASE_URL,
    logo: LOGO_URL,
    description:
      lang === "en"
        ? "SMVentures is a venture builder that co-builds and operates companies across Indonesia's most important industries."
        : t.meta.description,
    foundingLocation: {
      "@type": "Place",
      name: "Jakarta, Indonesia",
    },
    sameAs: [LINKEDIN_COMPANY, INSTAGRAM],
    founder: {
      "@type": "Person",
      name: "Sandi Mardiansyah",
      url: "https://www.sandimardiansyah.com",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <HomeHero t={t.home.hero} stats={t.home.stats} lang={lang} />
        <PortfolioGrid t={t.home.portfolio} numberWords={t.numberWords} lang={lang} />
        <Approach t={t.home.approach} />
        {insights.length > 0 && (
          <InsightsSection posts={insights} t={t.insights} lang={lang} base={localePath(lang, "/insights")} />
        )}
        <ShareholdersBand t={t.home.shareholders} lang={lang} />
      </main>
    </>
  );
}
