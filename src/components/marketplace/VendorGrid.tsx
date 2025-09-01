import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const vendors = [
  {
    id: 1,
    name: "Priya's Kitchen",
    image: "/src/assets/baker-logo.jpg",
    speciality: "Traditional Cakes",
    rating: 4.8,
    badge: "Campus Favourite",
    orders: 150
  },
  {
    id: 2,
    name: "Anu's Artisan",
    image: "/src/assets/testimonial-baker1.jpg", 
    speciality: "Handmade Jewelry",
    rating: 4.9,
    badge: "New",
    orders: 45
  },
  {
    id: 3,
    name: "Ravi's Cookies",
    image: "/src/assets/testimonial-baker2.jpg",
    speciality: "Gourmet Cookies", 
    rating: 4.7,
    badge: null,
    orders: 89
  },
  {
    id: 4,
    name: "Maya's Art",
    image: "/src/assets/baker-portrait.jpg",
    speciality: "Digital Prints",
    rating: 4.6,
    badge: "Top Rated",
    orders: 67
  },
  {
    id: 5,
    name: "Sid's Savories",
    image: "/src/assets/product-savories.jpg",
    speciality: "Spicy Snacks",
    rating: 4.5,
    badge: null,
    orders: 123
  },
  {
    id: 6,
    name: "Keerthi's Crafts",
    image: "/src/assets/product-cookies.jpg",
    speciality: "Home Decor",
    rating: 4.8,
    badge: "Trending",
    orders: 78
  }
];

export const VendorGrid = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Meet Our Campus Creators
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover talented bakers, artisans, and creators from your campus community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {vendors.map((vendor) => (
            <div 
              key={vendor.id}
              className="group cursor-pointer"
            >
              <div className="relative">
                <div className="w-full aspect-square bg-card rounded-2xl p-4 shadow-soft group-hover:shadow-warm transition-all duration-300 group-hover:-translate-y-1">
                  <img 
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {vendor.badge && (
                    <Badge 
                      className={`absolute -top-2 -right-2 text-xs ${
                        vendor.badge === 'Campus Favourite' ? 'bg-primary text-primary-foreground' :
                        vendor.badge === 'New' ? 'bg-accent text-accent-foreground' :
                        vendor.badge === 'Top Rated' ? 'bg-spice-turmeric text-foreground' :
                        'bg-palm-green text-white'
                      }`}
                    >
                      {vendor.badge}
                    </Badge>
                  )}
                </div>
                
                <div className="mt-3 text-center">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {vendor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {vendor.speciality}
                  </p>
                  <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 fill-spice-turmeric text-spice-turmeric" />
                    <span>{vendor.rating}</span>
                    <span>•</span>
                    <span>{vendor.orders} orders</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
            View All Vendors →
          </button>
        </div>
      </div>
    </section>
  );
};