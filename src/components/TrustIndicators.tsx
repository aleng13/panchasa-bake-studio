import { Shield, Truck, Clock, Heart } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "Safe & Hygienic",
    description: "All our bakers follow strict food safety standards"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Fresh treats delivered within 2 hours in your area"
  },
  {
    icon: Clock,
    title: "Made to Order",
    description: "Every item is freshly prepared just for you"
  },
  {
    icon: Heart,
    title: "Local Love",
    description: "Supporting passionate home bakers in your community"
  }
];

export const TrustIndicators = () => {
  return (
    <section className="py-16 bg-coconut-cream/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-spice rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};