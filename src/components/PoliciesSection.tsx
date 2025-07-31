import { Clock, Truck, CreditCard, Shield } from "lucide-react";

const policies = [
  {
    icon: Clock,
    title: "Order Notice",
    description: "Please order at least 48 hours in advance for custom cakes and large orders."
  },
  {
    icon: Truck,
    title: "Delivery & Pickup",
    description: "Free delivery within 10km radius. Pickup available from our home kitchen in Kakkanad."
  },
  {
    icon: CreditCard,
    title: "Payment Options",
    description: "We accept GPay, PhonePe, Bank Transfer, and cash on delivery."
  },
  {
    icon: Shield,
    title: "Quality Promise",
    description: "100% fresh ingredients, hygienic preparation, and satisfaction guaranteed or money back."
  }
];

export const PoliciesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-coconut-cream/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            How to Order
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple steps to bring our delicious creations to your table
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {policies.map((policy, index) => {
            const IconComponent = policy.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-spice rounded-full mb-6 shadow-warm group-hover:shadow-glow transition-shadow duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {policy.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {policy.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Order Process */}
        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border/50">
          <h3 className="text-2xl font-display font-semibold text-center text-foreground mb-8">
            Ready to Order? It's Easy!
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">📱</div>
              <h4 className="font-semibold text-foreground mb-2">1. Contact Us</h4>
              <p className="text-muted-foreground text-sm">WhatsApp or call us with your requirements</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🎂</div>
              <h4 className="font-semibold text-foreground mb-2">2. Customize</h4>
              <p className="text-muted-foreground text-sm">Choose flavors, quantities, and delivery details</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🚚</div>
              <h4 className="font-semibold text-foreground mb-2">3. Enjoy</h4>
              <p className="text-muted-foreground text-sm">We'll deliver fresh to your doorstep</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};