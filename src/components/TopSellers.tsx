import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Award } from "lucide-react";

const topProducts = [
  {
    id: 1,
    name: "Classic Chocolate Cake",
    description: "Rich, moist chocolate cake with premium cocoa",
    price: 650,
    image: "/src/assets/product-cakes.jpg",
    baker: "Priya's Kitchen",
    rating: 4.9,
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Artisan Sourdough Bread",
    description: "Handcrafted with 24-hour fermentation",
    price: 280,
    image: "/src/assets/product-savories.jpg",
    baker: "Traditional Breads Co.",
    rating: 4.8,
    badge: "Premium"
  },
  {
    id: 3,
    name: "Butter Cookies Assortment",
    description: "Premium selection of handmade butter cookies",
    price: 320,
    image: "/src/assets/product-cookies.jpg",
    baker: "Cookie Haven",
    rating: 4.9,
    badge: "Bestseller"
  },
  {
    id: 4,
    name: "Red Velvet Cupcakes",
    description: "Velvety smooth cupcakes with cream cheese frosting",
    price: 450,
    image: "/src/assets/product-cakes.jpg",
    baker: "Sweet Delights",
    rating: 4.7,
    badge: "Premium"
  }
];

export const TopSellers = () => {
  return (
    <section className="py-24 bg-gradient-warm relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-spice-turmeric/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            <span>Customer Favorites</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Top Sellers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the most loved homemade treats that keep our customers coming back for more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topProducts.map((product, index) => (
            <div
              key={product.id}
              className="floating-card bg-card rounded-2xl shadow-soft overflow-hidden group border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-spice opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-semibold shadow-soft ${
                    product.badge === "Bestseller" 
                      ? "bg-spice-turmeric text-foreground" 
                      : product.badge === "Premium" 
                      ? "bg-sunset-orange text-primary-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {product.badge}
                  </div>
                )}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 glass-morphism px-3 py-1.5 rounded-full">
                  <Star className="w-4 h-4 fill-spice-turmeric text-spice-turmeric" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-3 line-clamp-2 text-sm leading-relaxed">
                  {product.description}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  by <span className="font-semibold text-primary">{product.baker}</span>
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-primary">
                    ₹{product.price}
                  </span>
                  <Button 
                    size="sm"
                    className="bg-gradient-spice hover:shadow-glow text-primary-foreground px-5 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};