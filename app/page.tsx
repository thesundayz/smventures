import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import HowWeWork from "./components/HowWeWork";
import People from "./components/People";
import VcComparison from "./components/VcComparison";
import Portfolio from "./components/Portfolio";
import UnfairAdvantages from "./components/UnfairAdvantages";
import WhoWeLookFor from "./components/WhoWeLookFor";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <HowWeWork />
        <People />
        <VcComparison />
        <Portfolio />
        <UnfairAdvantages />
        <WhoWeLookFor />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
