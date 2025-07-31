import { MapPin, Star, ChefHat, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import bakerLogo from "@/assets/baker-logo.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] bg-gradient-hero overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-foreground/20"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 min-h-[600px] md:min-h-[700px] flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Baker Logo */}
          <div className="mb-6">
            <img 
              src={bakerLogo} 
              alt="Priya's Kitchen Logo" 
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-glow object-cover"
            />
          </div>
          
          {/* Store Name & Tagline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight">
            Priya's Kitchen
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-body mb-8 max-w-2xl">
            Crafting Sweet Memories in Kochi with Love & Traditional Flavors
          </p>
          
          {/* Key Info Snippets */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Kakkanad, Kochi</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <ChefHat className="w-4 h-4" />
              <span className="text-sm font-medium">Custom Cakes & Traditional Sweets</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Star className="w-4 h-4 fill-current text-spice-turmeric" />
              <span className="text-sm font-medium">4.9 Stars</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Baker
            </Button>
            <Button 
              variant="coconut" 
              size="xl"
              className="group"
            >
              <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Share Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};