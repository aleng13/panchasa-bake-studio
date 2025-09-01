import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    id: 1,
    name: "Cakes",
    icon: "🎂",
    count: 45,
    trending: true,
    image: "/src/assets/product-cakes.jpg"
  },
  {
    id: 2,
    name: "Cookies",
    icon: "🍪",
    count: 32,
    trending: false,
    image: "/src/assets/product-cookies.jpg"
  },
  {
    id: 3,
    name: "Savories",
    icon: "🥨",
    count: 28,
    trending: true,
    image: "/src/assets/product-savories.jpg"
  },
  {
    id: 4,
    name: "Jewelry",
    icon: "💍",
    count: 18,
    trending: false,
    image: "/src/assets/testimonial-baker1.jpg"
  },
  {
    id: 5,
    name: "Art Prints",
    icon: "🎨",
    count: 15,
    trending: true,
    image: "/src/assets/baker-portrait.jpg"
  },
  {
    id: 6,
    name: "Crafts",
    icon: "🎭",
    count: 22,
    trending: false,
    image: "/src/assets/testimonial-baker2.jpg"
  }
];

export const TrendingCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trending Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore what's popular on campus right now
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                activeCategory === category.name.toLowerCase() 
                  ? 'bg-primary text-primary-foreground shadow-warm' 
                  : 'bg-card hover:bg-card/80 shadow-soft hover:shadow-warm'
              }`}
              onClick={() => setActiveCategory(category.name.toLowerCase())}
            >
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-hero rounded-xl mb-4 flex items-center justify-center text-4xl relative overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover absolute inset-0 opacity-20"
                  />
                  <span className="relative z-10">{category.icon}</span>
                  {category.trending && (
                    <Badge className="absolute -top-1 -right-1 bg-spice-turmeric text-foreground text-xs">
                      Hot
                    </Badge>
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className={`font-semibold mb-1 ${
                    activeCategory === category.name.toLowerCase() 
                      ? 'text-primary-foreground' 
                      : 'text-foreground group-hover:text-primary'
                  } transition-colors`}>
                    {category.name}
                  </h3>
                  <p className={`text-sm ${
                    activeCategory === category.name.toLowerCase() 
                      ? 'text-primary-foreground/80' 
                      : 'text-muted-foreground'
                  }`}>
                    {category.count} items
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card text-foreground hover:bg-primary/10'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.name.toLowerCase() 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-foreground hover:bg-primary/10'
              }`}
              onClick={() => setActiveCategory(category.name.toLowerCase())}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};