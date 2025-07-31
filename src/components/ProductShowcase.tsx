import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "./ProductCard";
import productCakes from "@/assets/product-cakes.jpg";
import productCookies from "@/assets/product-cookies.jpg";
import productSavories from "@/assets/product-savories.jpg";

const products = [
  {
    id: 1,
    image: productCakes,
    name: "Kerala Fruit Cake",
    price: "₹800/kg",
    description: "Rich, moist fruit cake infused with traditional Kerala spices and dry fruits. Perfect for celebrations.",
    badge: "Bestseller",
    category: "Cakes"
  },
  {
    id: 2,
    image: productCookies,
    name: "Coconut Cardamom Cookies",
    price: "₹350/dozen",
    description: "Crispy, aromatic cookies with fresh coconut and cardamom. A perfect tea-time companion.",
    category: "Cookies"
  },
  {
    id: 3,
    image: productSavories,
    name: "Traditional Murukku",
    price: "₹200/250g",
    description: "Crispy, spiral-shaped savory snacks seasoned with traditional Kerala spices.",
    badge: "New!",
    category: "Savories"
  },
  {
    id: 4,
    image: productCakes,
    name: "Custom Birthday Cake",
    price: "₹1200/kg",
    description: "Personalized celebration cakes with your choice of flavors and decorations.",
    category: "Cakes"
  },
  {
    id: 5,
    image: productCookies,
    name: "Banana Chips Premium",
    price: "₹180/200g",
    description: "Crispy banana chips made from Kerala bananas, lightly salted and perfectly fried.",
    category: "Savories"
  },
  {
    id: 6,
    image: productSavories,
    name: "Festive Plum Cake",
    price: "₹950/kg",
    description: "Traditional Christmas plum cake with rum-soaked fruits and aromatic spices.",
    badge: "Seasonal",
    category: "Cakes"
  }
];

const categories = ["All", "Cakes", "Cookies", "Savories"];

export const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Our Delicious Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our range of traditional Kerala delicacies and modern favorites, 
            each crafted with love and the finest ingredients.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "warm" : "coconut"}
              size="lg"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              badge={product.badge}
              category={product.category}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl" className="group">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};