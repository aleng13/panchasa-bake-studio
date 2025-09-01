import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Gift, Zap } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Campus Food Festival",
    type: "event",
    description: "Join us for the biggest campus food celebration with 20+ vendors",
    date: "Dec 15, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Main Auditorium",
    image: "/src/assets/platform-hero.jpg",
    badge: "This Weekend",
    participants: 15
  },
  {
    id: 2,
    title: "Winter Warmth Sale",
    type: "offer",
    description: "Get up to 30% off on hot beverages and comfort foods",
    date: "Valid till Dec 31",
    time: "All Day",
    location: "All Vendors",
    image: "/src/assets/product-cakes.jpg",
    badge: "30% OFF",
    participants: 8
  },
  {
    id: 3,
    title: "New Vendor Spotlight",
    type: "spotlight",
    description: "Discover 5 new talented creators who just joined our platform",
    date: "This Week",
    time: "Featured",
    location: "Campus Wide",
    image: "/src/assets/testimonial-baker1.jpg",
    badge: "New",
    participants: 5
  }
];

const quickOffers = [
  {
    title: "Flash Sale",
    description: "50% off cookies",
    timeLeft: "2h left",
    vendor: "Ravi's Cookies"
  },
  {
    title: "Bundle Deal",
    description: "Cake + Cookies combo",
    timeLeft: "Today only",
    vendor: "Priya's Kitchen"
  },
  {
    title: "Free Delivery",
    description: "Orders above ₹300",
    timeLeft: "Weekend only",
    vendor: "All Vendors"
  }
];

export const EventsOffers = () => {
  return (
    <section id="events" className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Events & Special Offers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't miss out on exciting campus events and exclusive deals
          </p>
        </div>

        {/* Main Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className={`absolute top-4 left-4 ${
                    event.type === 'event' ? 'bg-palm-green text-white' :
                    event.type === 'offer' ? 'bg-destructive text-destructive-foreground' :
                    'bg-accent text-accent-foreground'
                  }`}
                >
                  {event.badge}
                </Badge>
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-xs font-medium text-foreground">
                    {event.participants} vendors
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                
                <Button className="w-full">
                  {event.type === 'event' ? 'Learn More' : 
                   event.type === 'offer' ? 'Shop Now' : 'Explore'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Offers Bar */}
        <div className="bg-card rounded-2xl p-6 shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground flex items-center">
              <Zap className="w-5 h-5 mr-2 text-spice-turmeric" />
              Quick Deals
            </h3>
            <Button variant="outline" size="sm">
              View All Offers
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickOffers.map((offer, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-spice rounded-lg flex items-center justify-center">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-foreground text-sm">
                    {offer.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {offer.description}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {offer.timeLeft} • {offer.vendor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};