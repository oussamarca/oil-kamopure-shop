import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductSection from "@/components/ProductSection";
import HowToUseSection from "@/components/HowToUseSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ProductSection />
      <HowToUseSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
