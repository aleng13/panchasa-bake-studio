import { Sparkles, Cake, Rocket, Share2, Heart, Star, ChefHat, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import platformHero from "@/assets/platform-hero.jpg";
import testimonialBaker1 from "@/assets/testimonial-baker1.jpg";
import testimonialBaker2 from "@/assets/testimonial-baker2.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Beautiful Themes",
    description: "Professional designs crafted specifically for Kerala home bakers"
  },
  {
    icon: ChefHat,
    title: "Easy Product Management",
    description: "Add your cakes, cookies, and traditional treats with a few clicks"
  },
  {
    icon: Smartphone,
    title: "WhatsApp Order Integration",
    description: "Customers can reach you directly through WhatsApp for seamless ordering"
  },
  {
    icon: Share2,
    title: "Your Own Unique Link",
    description: "Get a personalized panchasara.com/your-name URL to share everywhere"
  }
];

const testimonials = [
  {
    quote: "Panchasara gave my small business a professional look overnight! My customers love how easy it is to browse my cakes.",
    name: "Meera K.",
    location: "Ernakulam",
    image: testimonialBaker1
  },
  {
    quote: "I went from sharing photos on WhatsApp to having a real online store. Orders have doubled since I joined Panchasara!",
    name: "Anjali R.",
    location: "Kottayam",
    image: testimonialBaker2
  }
];

export const Homepage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/builder');
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${platformHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-foreground/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
              Your Kitchen.<br />
              Your Story.<br />
              <span className="text-spice-turmeric">Your Online Store.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-body mb-8 max-w-3xl leading-relaxed">
              Panchasara helps home bakers in Kerala build a beautiful online presence, 
              manage orders, and grow their passion. No commission, no complex setup.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="xl" 
                className="group text-lg"
                onClick={handleGetStarted}
              >
                <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Create Your Free Store
              </Button>
              <Button 
                variant="coconut" 
                size="xl"
                className="group text-lg"
              >
                <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                See Success Stories
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current text-spice-turmeric" />
                <span className="text-sm font-medium">500+ Happy Bakers</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5" />
                <span className="text-sm font-medium">Made for Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 fill-current text-sunset-orange" />
                <span className="text-sm font-medium">100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From your kitchen to a professional online store in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-spice rounded-full mb-8 shadow-warm group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Design Your Store
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pick a theme, add your logo, and tell your story. No code needed. 
                Our beautiful templates are designed specifically for home bakers.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-spice rounded-full mb-8 shadow-warm group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                <Cake className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Showcase Your Products
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Easily upload photos and descriptions of your delicious creations. 
                Organize by categories like cakes, cookies, and traditional sweets.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-spice rounded-full mb-8 shadow-warm group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Share & Sell
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get a unique link (panchasara.com/your-name) to share on WhatsApp, 
                Instagram, and Facebook. Start receiving orders immediately!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed specifically for home bakers in Kerala
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-spice-turmeric/10 rounded-xl mb-6">
                    <IconComponent className="w-8 h-8 text-spice-cinnamon" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
              Success Stories from Kerala
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from bakers who transformed their passion into thriving businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-warm transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-spice-turmeric" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-spice">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful home bakers in Kerala. Create your beautiful 
            online store in minutes, completely free.
          </p>
          <Button 
            variant="coconut" 
            size="xl" 
            className="text-lg font-semibold"
            onClick={handleGetStarted}
          >
            <Sparkles className="w-6 h-6" />
            Create Your Free Store Now
          </Button>
          <p className="text-white/70 text-sm mt-4">
            No credit card required • Setup takes less than 10 minutes
          </p>
        </div>
      </section>
    </div>
  );
};