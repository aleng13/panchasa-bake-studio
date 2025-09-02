import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Clock, Sparkles } from "lucide-react";

const newProducts = [
  {
    id: 1,
    name: "Lavender Honey Macarons",
    description: "Delicate French macarons with lavender and honey",
    price: 480,
    image: "/src/assets/product-cookies.jpg",
    baker: "Artisan Macarons",
    daysAgo: 1,
    badge: "Just Added"
  },
  {
    id: 2,
    name: "Seasonal Fruit Tart",
    description: "Fresh seasonal fruits on vanilla custard base",
    price: 520,
    image: "/src/assets/product-cakes.jpg",
    baker: "Tart & Co.",
    daysAgo: 2,
    badge: "Limited Edition"
  },
  {
    id: 3,
    name: "Multigrain Health Bread",
    description: "Nutritious blend of ancient grains and seeds",
    price: 180,
    image: "/src/assets/product-savories.jpg",
    baker: "Health Bakes",
    daysAgo: 3,
    badge: "Just Added"
  },
  {
    id: 4,
    name: "Earl Grey Tea Cookies",
    description: "Sophisticated tea-infused shortbread cookies",
    price: 290,
    image: "/src/assets/product-cookies.jpg",
    baker: "Tea Time Treats",
    daysAgo: 4,
    badge: "Just Added"
  }
];

export const NewArrivals = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-16 right-20 w-36 h-36 bg-accent/5 rounded-full blur-2xl animate-float-gentle" />
      <div className="absolute bottom-20 left-16 w-28 h-28 bg-primary/5 rounded-full blur-2xl animate-float-gentle" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Fresh & New</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            New Arrivals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fresh from the oven! Discover the latest homemade delights from our talented bakers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {newProducts.map((product, index) => (
            <div
              key={product.id}
              className="floating-card bg-card rounded-2xl shadow-soft overflow-hidden group border border-border/50 relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Shimmer effect overlay for new items */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-semibold shadow-soft ${
                    product.badge === "Just Added" 
                      ? "bg-accent text-accent-foreground" 
                      : product.badge === "Limited Edition" 
                      ? "bg-destructive text-destructive-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {product.badge}
                  </div>
                )}
                <div className="absolute top-4 right-4 flex items-center gap-1 glass-morphism px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-semibold">{product.daysAgo}d ago</span>
                </div>
              </div>
              
              <div className="p-6 relative z-10">
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

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="glass-morphism border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-warm hover:scale-105 group"
          >
            <span>View All New Arrivals</span>
            <Sparkles className="w-5 h-5 ml-2 group-hover:animate-pulse" />
          </Button>
        </div>
      </div>
    </section>
  );
};