import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export const PremiumFooter = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-spice rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-display text-3xl font-bold">
                Panchasara
              </span>
            </div>
            <p className="text-background/80 text-lg leading-relaxed mb-6 max-w-md">
              Connecting passionate home bakers with food lovers. Experience the joy of authentic, 
              homemade treats crafted with love and tradition.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-background/10 hover:bg-primary hover:scale-105 rounded-xl flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-background/10 hover:bg-primary hover:scale-105 rounded-xl flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-background/10 hover:bg-primary hover:scale-105 rounded-xl flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-4">
              <a href="#" className="block text-background/80 hover:text-background hover:translate-x-2 transition-all duration-300">
                Home
              </a>
              <a href="#menu" className="block text-background/80 hover:text-background hover:translate-x-2 transition-all duration-300">
                Menu
              </a>
              <a href="#about" className="block text-background/80 hover:text-background hover:translate-x-2 transition-all duration-300">
                About Us
              </a>
              <a href="#become-baker" className="block text-background/80 hover:text-background hover:translate-x-2 transition-all duration-300">
                Become a Baker
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80">hello@panchasara.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-background/80">
                  123 Campus Street,<br />
                  University Area, City 560001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-center md:text-left">
              © 2024 Panchasara. Made with ❤️ for food lovers.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};