import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PremiumHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with hero image and overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 249, 240, 0.85), rgba(255, 244, 230, 0.9)), url('/src/assets/hero-banner.jpg')`
        }}
      />
      
      {/* Blur overlay for focus */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
          Panchasara
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Connecting you with the finest homemade treats from passionate local bakers
        </p>
        
        {/* Premium search bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
            <input
              type="text"
              placeholder="Search for homemade cakes, cookies, or breads..."
              className="w-full pl-16 pr-6 py-6 text-lg bg-card border-2 border-border rounded-2xl shadow-warm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder:text-muted-foreground"
            />
            <Button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl shadow-soft"
            >
              Search
            </Button>
          </div>
        </div>
        
        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-4 rounded-xl shadow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
          >
            Shop Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            List Your Bakery
          </Button>
        </div>
      </div>
    </section>
  );
};