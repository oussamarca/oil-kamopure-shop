import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductSection from "@/components/ProductSection";
import ImageGallerySection from "@/components/ImageGallerySection";
import HowToUseSection from "@/components/HowToUseSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ProductSection />
        <ImageGallerySection />
        <HowToUseSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;


export default Index;
