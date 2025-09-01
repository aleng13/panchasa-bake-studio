import { Navigation } from "@/components/marketplace/Navigation";
import { VendorGrid } from "@/components/marketplace/VendorGrid";
import { FeaturedProducts } from "@/components/marketplace/FeaturedProducts";
import { TrendingCategories } from "@/components/marketplace/TrendingCategories";
import { SearchFilters } from "@/components/marketplace/SearchFilters";
import { StoriesBanner } from "@/components/marketplace/StoriesBanner";
import { EventsOffers } from "@/components/marketplace/EventsOffers";
import { VendorCTA } from "@/components/marketplace/VendorCTA";
import { MarketplaceFooter } from "@/components/marketplace/MarketplaceFooter";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users } from "lucide-react";

const heroStats = [
  { icon: Users, number: "500+", label: "Active Vendors" },
  { icon: Star, number: "4.9", label: "Average Rating" },
  { icon: TrendingUp, number: "10K+", label: "Happy Customers" }
];

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/platform-hero.jpg')`
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="bg-spice-turmeric text-foreground mb-6 text-sm px-4 py-2">
            🎉 Now serving 500+ campus creators
          </Badge>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Campus.<br />
            Your Creations.<br />
            <span className="text-spice-turmeric">Your Marketplace.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover amazing products from talented student creators, artisans, and home bakers 
            right here on campus. <span className="font-semibold">Fresh, local, and made with love.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 rounded-lg shadow-warm transition-all duration-300 hover:-translate-y-1">
              Start Shopping
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1">
              Become a Vendor
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-90">
            {heroStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <stat.icon className="w-5 h-5 text-spice-turmeric" />
                <span className="font-bold text-lg">{stat.number}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SearchFilters />
      <VendorGrid />
      <FeaturedProducts />
      <TrendingCategories />
      <StoriesBanner />
      <EventsOffers />
      <VendorCTA />
      <MarketplaceFooter />
    </div>
  );
};