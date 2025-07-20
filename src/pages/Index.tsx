import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SystemsSection from "@/components/SystemsSection";
import CasesSection from "@/components/CasesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SystemsSection />
      <CasesSection />
      <Footer />
    </div>
  );
};

export default Index;
