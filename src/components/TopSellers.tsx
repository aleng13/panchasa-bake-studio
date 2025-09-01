import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const topProducts = [
  {
    id: 1,
    name: "Classic Chocolate Cake",
    description: "Rich, moist chocolate cake with premium cocoa",
    price: "₹650",
    image: "/src/assets/product-cakes.jpg",
    baker: "Priya's Kitchen",
    rating: 4.9,
    badge: "Top Seller"
  },
  {
    id: 2,
    name: "Artisan Sourdough Bread",
    description: "Handcrafted with 24-hour fermentation",
    price: "₹280",
    image: "/src/assets/product-savories.jpg",
    baker: "Traditional Breads Co.",
    rating: 4.8,
    badge: "Chef's Choice"
  },
  {
    id: 3,
    name: "Butter Cookies Assortment",
    description: "Premium selection of handmade butter cookies",
    price: "₹320",
    image: "/src/assets/product-cookies.jpg",
    baker: "Cookie Haven",
    rating: 4.9,
    badge: "Customer Favorite"
  },
  {
    id: 4,
    name: "Red Velvet Cupcakes",
    description: "Velvety smooth cupcakes with cream cheese frosting",
    price: "₹450",
    image: "/src/assets/product-cakes.jpg",
    baker: "Sweet Delights",
    rating: 4.7,
    badge: "Premium"
  }
];

export const TopSellers = () => {
  return (
    <section className="py-20 bg-coconut-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Top Sellers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most loved treats by our community of food enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge 
                  className={`absolute top-4 left-4 text-xs font-medium ${
                    product.badge === 'Top Seller' ? 'bg-primary text-primary-foreground' :
                    product.badge === 'Chef\'s Choice' ? 'bg-spice-turmeric text-foreground' :
                    product.badge === 'Customer Favorite' ? 'bg-palm-green text-white' :
                    'bg-accent text-accent-foreground'
                  }`}
                >
                  {product.badge}
                </Badge>
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-spice-turmeric text-spice-turmeric" />
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-2 leading-relaxed">
                  {product.description}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  by {product.baker}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 py-2 transition-all duration-300 hover:shadow-soft"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
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