import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BarSection from "@/components/BarSection";
import StaySection from "@/components/StaySection";
import HistoryConceptSection from "@/components/HistoryConceptSection";
import AccessSection from "@/components/AccessSection";
import CtaSection from "@/components/CtaSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BarSection />
        <StaySection />
        <HistoryConceptSection />
        <AccessSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
