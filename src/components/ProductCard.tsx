import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  badge?: string;
  category: string;
}

export const ProductCard = ({ image, name, price, description, badge, category }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-2xl shadow-soft hover:shadow-warm transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/20 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {badge && (
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 bg-spice-turmeric text-foreground shadow-md font-medium"
          >
            {badge}
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Product Info */}
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <span className="text-xl font-bold text-primary shrink-0 ml-2">
            {price}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {category}
          </span>
          <button className="text-primary hover:text-primary/80 text-sm font-medium hover:underline transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};