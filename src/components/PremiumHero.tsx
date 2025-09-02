import { Search, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-banner.jpg";

export const PremiumHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with hero image and overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--background) / 0.9), hsl(var(--coconut-cream) / 0.85)), url(${heroImage})`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-spice-turmeric/10 rounded-full blur-xl animate-float-gentle" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float-gentle" style={{ animationDelay: '1s' }} />
      
      {/* Glass overlay for depth */}
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-6 mb-8 animate-slide-up">
          <div className="trust-badge flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>10k+ Happy Customers</span>
          </div>
          <div className="trust-badge flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            <span>4.9 Rating</span>
          </div>
          <div className="trust-badge flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>500+ Local Bakers</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight animate-scale-in">
          Panchasara
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Connecting you with the finest homemade treats from passionate local bakers across Kerala
        </p>
        
        {/* Premium glass-morphism search bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-spice rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative glass-morphism rounded-2xl p-1 shadow-glass">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6 transition-colors group-hover:text-primary" />
              <input
                type="text"
                placeholder="Search for homemade cakes, cookies, or breads..."
                className="w-full pl-16 pr-6 py-6 text-lg bg-transparent border-none focus:outline-none focus:ring-0 placeholder:text-muted-foreground font-medium"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-spice hover:shadow-glow text-primary-foreground px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        
        {/* Call to action buttons with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg"
            className="relative overflow-hidden bg-gradient-spice hover:shadow-luxury text-primary-foreground text-lg px-12 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
          >
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="glass-morphism border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-12 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-warm"
          >
            List Your Bakery
          </Button>
        </div>
      </div>
    </section>
  );
};