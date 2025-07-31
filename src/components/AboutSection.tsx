import bakerPortrait from "@/assets/baker-portrait.jpg";

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Baker Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm group">
              <img 
                src={bakerPortrait} 
                alt="Priya - Head Baker" 
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-spice-turmeric rounded-full opacity-20 blur-xl"></div>
          </div>
          
          {/* Story Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
              From Our Home to Yours
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Welcome to Priya's Kitchen, where every creation tells a story of tradition, 
                love, and the rich culinary heritage of Kerala. What started as sharing 
                homemade treats with neighbors has blossomed into a passion for bringing 
                authentic flavors to your celebrations.
              </p>
              <p>
                Using time-honored recipes passed down through generations, combined with 
                the finest local ingredients like fresh coconut, aromatic cardamom, and 
                golden turmeric, each bite transports you to the warm kitchens of God's Own Country.
              </p>
              <p>
                From custom celebration cakes that make your special moments unforgettable 
                to traditional snacks that remind you of home, every creation is crafted 
                with the same love and care as if it were for my own family.
              </p>
            </div>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 bg-spice-turmeric/10 rounded-full px-4 py-2">
                <span className="text-2xl">🙏</span>
                <span className="text-sm font-medium text-spice-cinnamon">
                  "Cooking is an act of love" - Priya
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};