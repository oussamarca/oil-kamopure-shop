import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductShowcase from "@/components/ProductShowcase";
import HowToUseSection from "@/components/HowToUseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BeforeAfterSection />
      <BenefitsSection />
      <ProductShowcase />
      <HowToUseSection />
      <TestimonialsSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
