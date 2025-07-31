import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { PoliciesSection } from "@/components/PoliciesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <HeroSection />
      <AboutSection />
      <ProductShowcase />
      <PoliciesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
