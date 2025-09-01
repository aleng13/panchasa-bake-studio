import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    vendor: "Priya's Kitchen",
    price: "₹450",
    originalPrice: "₹500",
    image: "/src/assets/product-cakes.jpg",
    badge: "Best Seller",
    discount: "10% OFF"
  },
  {
    id: 2,
    name: "Butter Cookies Pack",
    vendor: "Ravi's Cookies", 
    price: "₹180",
    originalPrice: null,
    image: "/src/assets/product-cookies.jpg",
    badge: "Fresh Today",
    discount: null
  },
  {
    id: 3,
    name: "Masala Mixture",
    vendor: "Sid's Savories",
    price: "₹120",
    originalPrice: "₹150",
    image: "/src/assets/product-savories.jpg",
    badge: "Campus Fave",
    discount: "20% OFF"
  },
  {
    id: 4,
    name: "Red Velvet Cupcakes",
    vendor: "Priya's Kitchen",
    price: "₹280",
    originalPrice: null,
    image: "/src/assets/product-cakes.jpg", 
    badge: "New",
    discount: null
  },
  {
    id: 5,
    name: "Coconut Cookies",
    vendor: "Ravi's Cookies",
    price: "₹160",
    originalPrice: "₹200",
    image: "/src/assets/product-cookies.jpg",
    badge: "Vegan",
    discount: "20% OFF"
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Handpicked favorites from our community
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge 
                    className={`absolute top-3 left-3 text-xs ${
                      product.badge === 'Best Seller' ? 'bg-primary text-primary-foreground' :
                      product.badge === 'Fresh Today' ? 'bg-palm-green text-white' :
                      product.badge === 'Campus Fave' ? 'bg-spice-turmeric text-foreground' :
                      product.badge === 'New' ? 'bg-accent text-accent-foreground' :
                      'bg-coconut-cream text-foreground'
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}
                {product.discount && (
                  <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs">
                    {product.discount}
                  </Badge>
                )}
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  by {product.vendor}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-primary text-lg">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="w-full">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};