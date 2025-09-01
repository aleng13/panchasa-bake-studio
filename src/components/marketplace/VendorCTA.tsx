import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Users, TrendingUp, Heart } from "lucide-react";

const benefits = [
  {
    icon: Store,
    title: "Your Own Store",
    description: "Get a beautiful, personalized storefront"
  },
  {
    icon: Users,
    title: "Campus Community", 
    description: "Connect with thousands of students"
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Analytics and tools to boost sales"
  },
  {
    icon: Heart,
    title: "Zero Commission",
    description: "Keep 100% of your earnings"
  }
];

const stats = [
  { number: "500+", label: "Active Vendors" },
  { number: "10K+", label: "Happy Customers" },
  { number: "₹2L+", label: "Monthly Sales" },
  { number: "4.9★", label: "Average Rating" }
];

export const VendorCTA = () => {
  return (
    <section id="vendor" className="py-20 bg-gradient-spice text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            Start Your Campus Business Today
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join hundreds of successful student entrepreneurs who are building their dreams on Panchasara. 
            Zero fees, maximum support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
            >
              Become a Vendor
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              Watch Success Stories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/80 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg italic mb-4">
              "Panchasara helped me turn my hobby into a business. I've made over ₹50,000 in just 6 months!"
            </p>
            <div className="flex items-center justify-center space-x-3">
              <img 
                src="/src/assets/testimonial-baker1.jpg"
                alt="Success story"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold">Ananya Krishnan</div>
                <div className="text-white/80 text-sm">Final Year, Computer Science</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};