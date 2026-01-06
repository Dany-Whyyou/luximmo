import Header from "./components/Header";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import Architecture from "./components/Architecture";
import Devis from "./components/Devis";
import Realisations from "./components/Realisations";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Presentation />
        <Services />
        <Architecture />
        <Devis />
        <Realisations />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
