import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Clock } from "lucide-react";

const newProducts = [
  {
    id: 1,
    name: "Lavender Honey Macarons",
    description: "Delicate French macarons with lavender and honey",
    price: "₹480",
    image: "/src/assets/product-cookies.jpg",
    baker: "Artisan Macarons",
    daysAgo: 1,
    badge: "New Today"
  },
  {
    id: 2,
    name: "Seasonal Fruit Tart",
    description: "Fresh seasonal fruits on vanilla custard base",
    price: "₹520",
    image: "/src/assets/product-cakes.jpg",
    baker: "Tart & Co.",
    daysAgo: 2,
    badge: "Limited Edition"
  },
  {
    id: 3,
    name: "Multigrain Health Bread",
    description: "Nutritious blend of ancient grains and seeds",
    price: "₹180",
    image: "/src/assets/product-savories.jpg",
    baker: "Health Bakes",
    daysAgo: 3,
    badge: "Healthy Choice"
  },
  {
    id: 4,
    name: "Earl Grey Tea Cookies",
    description: "Sophisticated tea-infused shortbread cookies",
    price: "₹290",
    image: "/src/assets/product-cookies.jpg",
    baker: "Tea Time Treats",
    daysAgo: 4,
    badge: "Artisan Made"
  }
];

export const NewArrivals = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
            New Arrivals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh creations from our talented bakers, crafted with love and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              <div className="relative">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <Badge 
                  className={`absolute top-4 left-4 text-xs font-medium ${
                    product.badge === 'New Today' ? 'bg-accent text-accent-foreground' :
                    product.badge === 'Limited Edition' ? 'bg-primary text-primary-foreground' :
                    product.badge === 'Healthy Choice' ? 'bg-palm-green text-white' :
                    'bg-spice-cinnamon text-white'
                  }`}
                >
                  {product.badge}
                </Badge>
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {product.daysAgo === 1 ? 'Today' : `${product.daysAgo}d ago`}
                  </span>
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

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-xl transition-all duration-300"
          >
            View All New Arrivals
          </Button>
        </div>
      </div>
    </section>
  );
};