import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Priya's Kitchen
            </h3>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Bringing the authentic taste of Kerala to your celebrations. 
              Every creation is made with love, tradition, and the finest ingredients.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:bg-background/10 text-background hover:text-background">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10 text-background hover:text-background">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10 text-background hover:text-background">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-sm">hello@priyaskitchen.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Kakkanad, Kochi<br />
                  Kerala 682030
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Order</h4>
            <div className="space-y-2">
              <button className="block text-background/80 hover:text-background text-sm transition-colors text-left">
                Custom Cakes
              </button>
              <button className="block text-background/80 hover:text-background text-sm transition-colors text-left">
                Traditional Sweets
              </button>
              <button className="block text-background/80 hover:text-background text-sm transition-colors text-left">
                Festive Specials
              </button>
              <button className="block text-background/80 hover:text-background text-sm transition-colors text-left">
                Bulk Orders
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/60 text-sm text-center md:text-left">
            © 2024 Priya's Kitchen. Made with ❤️ in Kerala.
          </div>
          <div className="flex items-center gap-2 text-background/60 text-sm">
            <span>Powered by</span>
            <span className="font-semibold text-spice-turmeric">Panchasara</span>
          </div>
        </div>
      </div>
    </footer>
  );
};