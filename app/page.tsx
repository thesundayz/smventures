import ShareholdersBand from "./components/ShareholdersBand";
import Approach from "./components/home/Approach";
import HomeHero from "./components/home/HomeHero";
import PortfolioGrid from "./components/home/PortfolioGrid";
import { getDictionary } from "./i18n";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SMVentures",
  url: "https://smventures.id",
  logo: "https://res.cloudinary.com/ddr9t2l0o/image/upload/v1774944179/smvc_logo_transparent_zlwinx.png",
  description:
    "SMVentures is a venture builder that co-builds and operates companies across Indonesia's most important industries.",
  foundingLocation: {
    "@type": "Place",
    name: "Jakarta, Indonesia",
  },
  sameAs: [
    "https://www.linkedin.com/company/smventures",
    "https://www.instagram.com/smventures",
  ],
  founder: {
    "@type": "Person",
    name: "Sandi Mardiansyah",
    url: "https://www.sandimardiansyah.com",
  },
};

export default function Home() {
  const t = getDictionary("en");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HomeHero t={t.home.hero} stats={t.home.stats} />
        <PortfolioGrid t={t.home.portfolio} numberWords={t.numberWords} lang="en" />
        <Approach t={t.home.approach} />
        <ShareholdersBand t={t.home.shareholders} />
      </main>
    </>
  );
}
