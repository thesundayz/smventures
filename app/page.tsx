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

export default function Home() {
  return (
    <>
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
