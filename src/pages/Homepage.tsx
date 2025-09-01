import { Navigation } from "@/components/marketplace/Navigation";
import { PremiumHero } from "@/components/PremiumHero";
import { TopSellers } from "@/components/TopSellers";
import { NewArrivals } from "@/components/NewArrivals";
import { TrendingCategories } from "@/components/marketplace/TrendingCategories";
import { VendorGrid } from "@/components/marketplace/VendorGrid";
import { PremiumFooter } from "@/components/PremiumFooter";

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PremiumHero />
      <TopSellers />
      <NewArrivals />
      <TrendingCategories />
      <VendorGrid />
      <PremiumFooter />
    </div>
  );
};