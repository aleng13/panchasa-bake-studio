import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Menon",
    rating: 5,
    text: "Priya's cakes are absolutely divine! Ordered a custom birthday cake for my daughter and it exceeded all expectations. The taste was incredible and the decoration was exactly what we wanted.",
    occasion: "Birthday Celebration"
  },
  {
    name: "Rahul Krishnan",
    rating: 5,
    text: "Best traditional Kerala snacks in Kochi! The banana chips and murukku taste exactly like my grandmother's recipes. Quality is consistent and delivery is always on time.",
    occasion: "Festival Order"
  },
  {
    name: "Deepa & Family",
    rating: 5,
    text: "We've been regular customers for over a year now. Priya's attention to detail and use of fresh ingredients makes all the difference. Highly recommend for any celebration!",
    occasion: "Regular Customer"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-spice-turmeric/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset-orange/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
            Customer Love
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nothing makes us happier than seeing smiles on our customers' faces
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-warm border border-border/50 hover:shadow-glow transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-current text-spice-turmeric" 
                  />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-card-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>
              
              {/* Customer Info */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-card-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.occasion}
                    </p>
                  </div>
                  <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                    💝
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-4 shadow-soft border border-border/50">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current text-spice-turmeric" />
              <span className="font-semibold text-foreground">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <span className="text-muted-foreground text-sm">200+ Happy Customers</span>
            <div className="w-px h-6 bg-border"></div>
            <span className="text-muted-foreground text-sm">500+ Orders Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
};