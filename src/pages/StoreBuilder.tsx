import { useState } from "react";
import { Palette, Layout, Type, FileText, Smartphone, Share2, Eye, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { PoliciesSection } from "@/components/PoliciesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const colorThemes = [
  {
    name: "Kerala Spice",
    description: "Warm turmeric, cinnamon & cardamom",
    primary: "hsl(45, 90%, 55%)", // turmeric
    secondary: "hsl(25, 65%, 45%)", // cinnamon
    accent: "hsl(120, 25%, 35%)" // cardamom green
  },
  {
    name: "Coconut Dreams",
    description: "Creamy whites with tropical accents",
    primary: "hsl(50, 15%, 95%)", // coconut cream
    secondary: "hsl(200, 50%, 60%)", // tropical blue
    accent: "hsl(160, 40%, 50%)" // palm green
  },
  {
    name: "Sunset Orange",
    description: "Vibrant oranges & warm reds",
    primary: "hsl(25, 85%, 60%)", // sunset orange
    secondary: "hsl(15, 75%, 55%)", // warm red
    accent: "hsl(45, 80%, 65%)" // golden yellow
  }
];

const fontPairings = [
  {
    name: "Elegant Serif",
    description: "Playfair Display & Inter",
    display: "Playfair Display",
    body: "Inter"
  },
  {
    name: "Modern Sans",
    description: "Montserrat & Lato",
    display: "Montserrat",
    body: "Lato"
  },
  {
    name: "Warm & Friendly",
    description: "Lora & Nunito Sans",
    display: "Lora",
    body: "Nunito Sans"
  }
];

const layoutOptions = [
  {
    id: "grid",
    name: "Grid View",
    description: "Visual-first card layout (Default)",
    icon: Layout
  },
  {
    id: "list",
    name: "List View",
    description: "Compact layout with details",
    icon: FileText
  }
];

export const StoreBuilder = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("appearance");
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [storeName, setStoreName] = useState("Priya's Kitchen");
  const [storeUrl, setStoreUrl] = useState("priyas-kitchen");

  const [storeData, setStoreData] = useState({
    theme: colorThemes[0],
    fontPairing: fontPairings[0],
    layout: "grid",
    storeName: "Priya's Kitchen",
    tagline: "Crafting Sweet Memories in Kochi with Love & Traditional Flavors",
    about: "Welcome to Priya's Kitchen, where every creation tells a story of tradition, love, and the rich culinary heritage of Kerala. What started as sharing homemade treats with neighbors has blossomed into a passion for bringing authentic flavors to your celebrations.",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    orderInstructions: "Please order at least 48 hours in advance for custom cakes and large orders.",
    instagram: "priyaskitchen_kochi",
    facebook: "PriyasKitchenOfficial"
  });

  const handlePublish = () => {
    setShowPublishModal(true);
    toast({
      title: "Store Published Successfully!",
      description: "Your store is now live and ready to be shared.",
    });
  };

  const copyStoreUrl = () => {
    navigator.clipboard.writeText(`panchasara.com/${storeUrl}`);
    toast({
      title: "Link Copied!",
      description: "Store URL has been copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-display font-semibold text-foreground">Store Builder</h1>
              <Badge variant="secondary">Draft</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
              >
                <Eye className="w-4 h-4" />
                {showPreview ? "Edit" : "Preview"}
              </Button>
              <Button 
                variant="warm" 
                size="sm"
                onClick={handlePublish}
              >
                <Save className="w-4 h-4" />
                Publish Store
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Builder Interface */}
        {!showPreview && (
          <div className="w-80 border-r border-border bg-card h-screen overflow-y-auto">
            <div className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="appearance" className="text-xs">
                    <Palette className="w-4 h-4 mr-1" />
                    Appearance
                  </TabsTrigger>
                  <TabsTrigger value="content" className="text-xs">
                    <FileText className="w-4 h-4 mr-1" />
                    Content
                  </TabsTrigger>
                  <TabsTrigger value="layout" className="text-xs">
                    <Layout className="w-4 h-4 mr-1" />
                    Layout
                  </TabsTrigger>
                </TabsList>

                {/* Appearance Tab */}
                <TabsContent value="appearance" className="space-y-6 mt-6">
                  {/* Color Themes */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Color Theme</Label>
                    <div className="space-y-2">
                      {colorThemes.map((theme, index) => (
                        <Card 
                          key={index}
                          className={`p-3 cursor-pointer transition-all ${
                            storeData.theme.name === theme.name ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setStoreData({...storeData, theme})}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                              <div 
                                className="w-4 h-4 rounded"
                                style={{ backgroundColor: theme.primary }}
                              />
                              <div 
                                className="w-4 h-4 rounded"
                                style={{ backgroundColor: theme.secondary }}
                              />
                              <div 
                                className="w-4 h-4 rounded"
                                style={{ backgroundColor: theme.accent }}
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{theme.name}</p>
                              <p className="text-xs text-muted-foreground">{theme.description}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Font Pairings */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Font Pairing</Label>
                    <Select 
                      value={storeData.fontPairing.name}
                      onValueChange={(value) => {
                        const fontPairing = fontPairings.find(f => f.name === value);
                        if (fontPairing) setStoreData({...storeData, fontPairing});
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {fontPairings.map((font) => (
                          <SelectItem key={font.name} value={font.name}>
                            <div>
                              <p className="font-medium">{font.name}</p>
                              <p className="text-xs text-muted-foreground">{font.description}</p>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                {/* Content Tab */}
                <TabsContent value="content" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="storeName">Store Name</Label>
                      <Input 
                        id="storeName"
                        value={storeData.storeName}
                        onChange={(e) => setStoreData({...storeData, storeName: e.target.value})}
                        placeholder="Your bakery name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="tagline">Tagline</Label>
                      <Input 
                        id="tagline"
                        value={storeData.tagline}
                        onChange={(e) => setStoreData({...storeData, tagline: e.target.value})}
                        placeholder="A short description of your bakery"
                      />
                    </div>

                    <div>
                      <Label htmlFor="about">About Section</Label>
                      <Textarea 
                        id="about"
                        value={storeData.about}
                        onChange={(e) => setStoreData({...storeData, about: e.target.value})}
                        placeholder="Tell your story..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        value={storeData.phone}
                        onChange={(e) => setStoreData({...storeData, phone: e.target.value})}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="whatsapp">WhatsApp Number</Label>
                      <Input 
                        id="whatsapp"
                        value={storeData.whatsapp}
                        onChange={(e) => setStoreData({...storeData, whatsapp: e.target.value})}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <Label htmlFor="orderInstructions">Order Instructions</Label>
                      <Textarea 
                        id="orderInstructions"
                        value={storeData.orderInstructions}
                        onChange={(e) => setStoreData({...storeData, orderInstructions: e.target.value})}
                        placeholder="How should customers place orders?"
                        rows={3}
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Layout Tab */}
                <TabsContent value="layout" className="space-y-6 mt-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Product Layout</Label>
                    <div className="space-y-2">
                      {layoutOptions.map((option) => {
                        const IconComponent = option.icon;
                        return (
                          <Card 
                            key={option.id}
                            className={`p-3 cursor-pointer transition-all ${
                              storeData.layout === option.id ? 'ring-2 ring-primary' : ''
                            }`}
                            onClick={() => setStoreData({...storeData, layout: option.id})}
                          >
                            <div className="flex items-center gap-3">
                              <IconComponent className="w-5 h-5 text-muted-foreground" />
                              <div>
                                <p className="text-sm font-medium">{option.name}</p>
                                <p className="text-xs text-muted-foreground">{option.description}</p>
                              </div>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}

        {/* Main Preview Area */}
        <div className={`flex-1 ${showPreview ? 'w-full' : ''}`}>
          <div className="h-screen overflow-y-auto">
            {/* Store Preview */}
            <div className="bg-background font-body">
              <HeroSection />
              <AboutSection />
              <ProductShowcase />
              <PoliciesSection />
              <TestimonialsSection />
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* Publish Success Modal */}
      <Dialog open={showPublishModal} onOpenChange={setShowPublishModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-display text-foreground mb-4">
              🎉 Congratulations!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-6">
            <p className="text-muted-foreground">
              Your store is now live and ready to be shared with the world!
            </p>
            
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Your unique link is:</p>
              <p className="font-medium text-foreground break-all">
                panchasara.com/{storeUrl}
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={copyStoreUrl}
              >
                Copy Link
              </Button>
              <Button 
                variant="warm" 
                className="flex-1"
              >
                <Share2 className="w-4 h-4" />
                Share on WhatsApp
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              You can continue editing your store anytime from your dashboard.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};