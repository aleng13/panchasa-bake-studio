import { useState } from "react";
import { 
  Palette, Layout, Type, FileText, Smartphone, Share2, Eye, Save, 
  Upload, Image, Star, MessageCircle, Clock, Megaphone, HelpCircle,
  Undo2, RefreshCw, Camera, Heart, Award, Users, Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { PoliciesSection } from "@/components/PoliciesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

// Import Kerala icons
import coconutPalmIcon from "@/assets/kerala-icons/coconut-palm.jpg";
import spiceMortarIcon from "@/assets/kerala-icons/spice-mortar.jpg";
import vallamBoatIcon from "@/assets/kerala-icons/vallam-boat.jpg";
import elephantIcon from "@/assets/kerala-icons/elephant.jpg";
import lotusIcon from "@/assets/kerala-icons/lotus.jpg";

const colorThemes = [
  {
    name: "Kerala Spice",
    description: "Warm turmeric, cinnamon & cardamom",
    primary: "hsl(45, 90%, 55%)",
    secondary: "hsl(25, 65%, 45%)",
    accent: "hsl(120, 25%, 35%)"
  },
  {
    name: "Coconut Dreams",
    description: "Creamy whites with tropical accents",
    primary: "hsl(50, 15%, 95%)",
    secondary: "hsl(200, 50%, 60%)",
    accent: "hsl(160, 40%, 50%)"
  },
  {
    name: "Sunset Orange",
    description: "Vibrant oranges & warm reds",
    primary: "hsl(25, 85%, 60%)",
    secondary: "hsl(15, 75%, 55%)",
    accent: "hsl(45, 80%, 65%)"
  },
  {
    name: "Malabar Coast",
    description: "Ocean blues & sandy beiges",
    primary: "hsl(200, 70%, 50%)",
    secondary: "hsl(45, 50%, 75%)",
    accent: "hsl(180, 30%, 60%)"
  },
  {
    name: "Backwater Green",
    description: "Lush greens & earth tones",
    primary: "hsl(120, 40%, 45%)",
    secondary: "hsl(30, 40%, 60%)",
    accent: "hsl(85, 30%, 50%)"
  }
];

const fontPairings = [
  { name: "Poppins", description: "Modern & Clean", display: "Poppins", body: "Poppins" },
  { name: "Nunito", description: "Friendly & Rounded", display: "Nunito", body: "Nunito" },
  { name: "Inter", description: "Professional & Clear", display: "Inter", body: "Inter" },
  { name: "Roboto", description: "Classic & Reliable", display: "Roboto", body: "Roboto" },
  { name: "Quicksand", description: "Gentle & Inviting", display: "Quicksand", body: "Quicksand" }
];

const keralaIcons = [
  { name: "Coconut Palm", src: coconutPalmIcon },
  { name: "Spice Mortar", src: spiceMortarIcon },
  { name: "Vallam Boat", src: vallamBoatIcon },
  { name: "Elephant", src: elephantIcon },
  { name: "Lotus", src: lotusIcon }
];

const backgroundPatterns = [
  { name: "Plain", description: "Clean solid background", value: "plain" },
  { name: "Woven", description: "Subtle textile texture", value: "woven" },
  { name: "Festive", description: "Decorative pattern", value: "festive" }
];

const featureBadges = [
  { name: "Fresh Today", color: "hsl(120, 60%, 50%)" },
  { name: "Campus Fave", color: "hsl(260, 60%, 50%)" },
  { name: "Vegan", color: "hsl(85, 60%, 50%)" },
  { name: "Bestseller", color: "hsl(45, 80%, 50%)" },
  { name: "New!", color: "hsl(15, 80%, 50%)" }
];

const presetTemplates = [
  {
    name: "Festive",
    description: "Perfect for celebrations and special occasions",
    data: {
      theme: colorThemes[0],
      fontPairing: fontPairings[0],
      backgroundPattern: "festive",
      selectedIcon: keralaIcons[3], // Elephant
      welcomeMessage: "Welcome to our festive bakery! ✨"
    }
  },
  {
    name: "Minimal",
    description: "Clean and modern for everyday elegance",
    data: {
      theme: colorThemes[1],
      fontPairing: fontPairings[2],
      backgroundPattern: "plain",
      selectedIcon: keralaIcons[4], // Lotus
      welcomeMessage: "Simple. Fresh. Delicious."
    }
  }
];

export const StoreBuilder = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("branding");
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [storeName, setStoreName] = useState("Priya's Kitchen");
  const [storeUrl, setStoreUrl] = useState("priyas-kitchen");

  const [storeData, setStoreData] = useState({
    // Branding
    storeName: "Priya's Kitchen",
    tagline: "Crafting Sweet Memories in Kochi with Love & Traditional Flavors",
    logo: null,
    bannerImage: null,
    
    // Design
    theme: colorThemes[0],
    fontPairing: fontPairings[0],
    fontSize: "regular", // regular, large
    backgroundPattern: "plain",
    selectedIcon: keralaIcons[0],
    
    // Content
    about: "Welcome to Priya's Kitchen, where every creation tells a story of tradition, love, and the rich culinary heritage of Kerala.",
    welcomeMessage: "Thank you for visiting our kitchen! 🍰",
    highlightProduct: "",
    photoGallery: [],
    miniBlog: "",
    
    // Products
    layout: "grid",
    selectedBadges: [featureBadges[0], featureBadges[3]], // Fresh Today, Bestseller
    productNotes: {},
    
    // Contact & Social
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    instagram: "priyaskitchen_kochi",
    facebook: "PriyasKitchenOfficial",
    showShopHours: true,
    shopHours: "Daily: 8 AM - 8 PM",
    
    // Features
    orderInstructions: "Please order at least 48 hours in advance for custom cakes and large orders.",
    faqs: [
      { question: "Can I customize my order?", answer: "Yes! We love creating custom treats for special occasions." },
      { question: "Do you offer COD?", answer: "We accept online payments and cash on delivery." },
      { question: "What are your delivery areas?", answer: "We deliver within 15km of Kakkanad, Kochi." }
    ],
    testimonials: [
      { name: "Lakshmi", rating: 5, text: "Best cakes in Kochi! My family loves everything from Priya's Kitchen." },
      { name: "Arjun", rating: 5, text: "Fresh, authentic, and delivered on time. Highly recommended!" }
    ],
    socialProof: "50+ Happy Customers",
    portfolioMilestones: [
      { date: "Jan 2024", milestone: "Started Priya's Kitchen" },
      { date: "Mar 2024", milestone: "50+ Products Created" },
      { date: "Aug 2024", milestone: "Joined Panchasara" }
    ],
    announcement: "",
    showAnnouncement: false
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

  const applyTemplate = (template) => {
    setStoreData({
      ...storeData,
      ...template.data
    });
    toast({
      title: "Template Applied!",
      description: `${template.name} template has been applied to your store.`,
    });
  };

  const resetToDefaults = () => {
    setStoreData({
      ...storeData,
      theme: colorThemes[0],
      fontPairing: fontPairings[0],
      backgroundPattern: "plain",
      selectedIcon: keralaIcons[0]
    });
    toast({
      title: "Reset Complete!",
      description: "Store design has been reset to defaults.",
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
                onClick={resetToDefaults}
                title="Reset to defaults"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </Button>
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
                <TabsList className="grid w-full grid-cols-4 text-xs">
                  <TabsTrigger value="branding" className="text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    Brand
                  </TabsTrigger>
                  <TabsTrigger value="design" className="text-xs">
                    <Palette className="w-3 h-3 mr-1" />
                    Design
                  </TabsTrigger>
                  <TabsTrigger value="content" className="text-xs">
                    <FileText className="w-3 h-3 mr-1" />
                    Content
                  </TabsTrigger>
                  <TabsTrigger value="features" className="text-xs">
                    <Megaphone className="w-3 h-3 mr-1" />
                    Features
                  </TabsTrigger>
                </TabsList>

                {/* Branding Tab */}
                <TabsContent value="branding" className="space-y-6 mt-6">
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
                      <Label htmlFor="tagline">Tagline/Slogan</Label>
                      <Input 
                        id="tagline"
                        value={storeData.tagline}
                        onChange={(e) => setStoreData({...storeData, tagline: e.target.value})}
                        placeholder="A short description of your bakery"
                      />
                    </div>

                    <div>
                      <Label>Logo/Profile Picture</Label>
                      <Card className="p-4 border-dashed border-2 text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">Upload your logo</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </Card>
                    </div>

                    <div>
                      <Label>Banner Image</Label>
                      <Card className="p-4 border-dashed border-2 text-center">
                        <Image className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">Upload banner image (1200x400px)</p>
                        <Button variant="outline" size="sm">
                          Choose File
                        </Button>
                      </Card>
                    </div>

                    <Separator />

                    <div>
                      <Label className="text-sm font-medium">Preset Templates</Label>
                      <div className="space-y-2 mt-2">
                        {presetTemplates.map((template, index) => (
                          <Card 
                            key={index}
                            className="p-3 cursor-pointer transition-all hover:ring-2 hover:ring-primary"
                            onClick={() => applyTemplate(template)}
                          >
                            <div>
                              <p className="text-sm font-medium">{template.name}</p>
                              <p className="text-xs text-muted-foreground">{template.description}</p>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Design Tab */}
                <TabsContent value="design" className="space-y-6 mt-6">
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

                  {/* Background Patterns */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Background Pattern</Label>
                    <div className="space-y-2">
                      {backgroundPatterns.map((pattern, index) => (
                        <Card 
                          key={index}
                          className={`p-3 cursor-pointer transition-all ${
                            storeData.backgroundPattern === pattern.value ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setStoreData({...storeData, backgroundPattern: pattern.value})}
                        >
                          <div>
                            <p className="text-sm font-medium">{pattern.name}</p>
                            <p className="text-xs text-muted-foreground">{pattern.description}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Kerala Icons */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Kerala Icon</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {keralaIcons.map((icon, index) => (
                        <Card 
                          key={index}
                          className={`p-2 cursor-pointer transition-all text-center ${
                            storeData.selectedIcon.name === icon.name ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setStoreData({...storeData, selectedIcon: icon})}
                        >
                          <img src={icon.src} alt={icon.name} className="w-8 h-8 mx-auto mb-1" />
                          <p className="text-xs">{icon.name}</p>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Font Family</Label>
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

                  {/* Font Size */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Font Size</Label>
                    <div className="space-y-2">
                      {[
                        { value: "regular", label: "Regular", description: "Standard readable size" },
                        { value: "large", label: "Large", description: "Bigger for better visibility" }
                      ].map((size) => (
                        <Card 
                          key={size.value}
                          className={`p-3 cursor-pointer transition-all ${
                            storeData.fontSize === size.value ? 'ring-2 ring-primary' : ''
                          }`}
                          onClick={() => setStoreData({...storeData, fontSize: size.value})}
                        >
                          <div>
                            <p className="text-sm font-medium">{size.label}</p>
                            <p className="text-xs text-muted-foreground">{size.description}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Content Tab */}
                <TabsContent value="content" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="welcomeMessage">Welcome Message</Label>
                      <Input 
                        id="welcomeMessage"
                        value={storeData.welcomeMessage}
                        onChange={(e) => setStoreData({...storeData, welcomeMessage: e.target.value})}
                        placeholder="Welcome message for visitors"
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
                      <Label htmlFor="highlightProduct">Highlight Product</Label>
                      <Input 
                        id="highlightProduct"
                        value={storeData.highlightProduct}
                        onChange={(e) => setStoreData({...storeData, highlightProduct: e.target.value})}
                        placeholder="Featured product name"
                      />
                    </div>

                    <div>
                      <Label>Photo Gallery (Max 6)</Label>
                      <Card className="p-4 border-dashed border-2 text-center">
                        <Camera className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">Upload photos of your work</p>
                        <Button variant="outline" size="sm">
                          Add Photos
                        </Button>
                      </Card>
                    </div>

                    <div>
                      <Label htmlFor="miniBlog">Mini Blog/Recipe Post</Label>
                      <Textarea 
                        id="miniBlog"
                        value={storeData.miniBlog}
                        onChange={(e) => setStoreData({...storeData, miniBlog: e.target.value})}
                        placeholder="Share a recipe, tip, or story..."
                        rows={4}
                      />
                    </div>

                    <Separator />

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

                    <div className="flex items-center justify-between">
                      <Label htmlFor="shopHours">Show Shop Hours</Label>
                      <Switch 
                        id="shopHours"
                        checked={storeData.showShopHours}
                        onCheckedChange={(checked) => setStoreData({...storeData, showShopHours: checked})}
                      />
                    </div>

                    {storeData.showShopHours && (
                      <div>
                        <Label htmlFor="shopHoursText">Shop Hours</Label>
                        <Input 
                          id="shopHoursText"
                          value={storeData.shopHours}
                          onChange={(e) => setStoreData({...storeData, shopHours: e.target.value})}
                          placeholder="Daily: 8 AM - 8 PM"
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="instagram">Instagram Handle</Label>
                      <Input 
                        id="instagram"
                        value={storeData.instagram}
                        onChange={(e) => setStoreData({...storeData, instagram: e.target.value})}
                        placeholder="your_instagram_handle"
                      />
                    </div>

                    <div>
                      <Label htmlFor="facebook">Facebook Page</Label>
                      <Input 
                        id="facebook"
                        value={storeData.facebook}
                        onChange={(e) => setStoreData({...storeData, facebook: e.target.value})}
                        placeholder="YourFacebookPage"
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Features Tab */}
                <TabsContent value="features" className="space-y-6 mt-6">
                  <div className="space-y-4">
                    {/* Announcement Banner */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label htmlFor="announcement">Shop Announcement</Label>
                        <Switch 
                          checked={storeData.showAnnouncement}
                          onCheckedChange={(checked) => setStoreData({...storeData, showAnnouncement: checked})}
                        />
                      </div>
                      <Input 
                        id="announcement"
                        value={storeData.announcement}
                        onChange={(e) => setStoreData({...storeData, announcement: e.target.value})}
                        placeholder="New festive packs out now!"
                        disabled={!storeData.showAnnouncement}
                      />
                    </div>

                    {/* Product Layout */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Product Layout</Label>
                      <div className="space-y-2">
                        {[
                          { id: "grid", name: "Grid View", description: "Visual-first card layout", icon: Layout },
                          { id: "list", name: "List View", description: "Compact layout with details", icon: FileText }
                        ].map((option) => {
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

                    {/* Feature Badges */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Product Badges</Label>
                      <div className="space-y-2">
                        {featureBadges.map((badge, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: badge.color }}
                              />
                              <span className="text-sm">{badge.name}</span>
                            </div>
                            <Switch 
                              checked={storeData.selectedBadges.some(b => b.name === badge.name)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setStoreData({
                                    ...storeData, 
                                    selectedBadges: [...storeData.selectedBadges, badge]
                                  });
                                } else {
                                  setStoreData({
                                    ...storeData,
                                    selectedBadges: storeData.selectedBadges.filter(b => b.name !== badge.name)
                                  });
                                }
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

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

                    <div>
                      <Label htmlFor="socialProof">Social Proof</Label>
                      <Input 
                        id="socialProof"
                        value={storeData.socialProof}
                        onChange={(e) => setStoreData({...storeData, socialProof: e.target.value})}
                        placeholder="50+ Happy Customers"
                      />
                    </div>

                    {/* FAQ Section */}
                    <div>
                      <Label className="text-sm font-medium">FAQ Section (Max 3)</Label>
                      {storeData.faqs.map((faq, index) => (
                        <Card key={index} className="p-3 mt-2">
                          <div className="space-y-2">
                            <Input 
                              value={faq.question}
                              onChange={(e) => {
                                const newFaqs = [...storeData.faqs];
                                newFaqs[index].question = e.target.value;
                                setStoreData({...storeData, faqs: newFaqs});
                              }}
                              placeholder="Question"
                            />
                            <Textarea 
                              value={faq.answer}
                              onChange={(e) => {
                                const newFaqs = [...storeData.faqs];
                                newFaqs[index].answer = e.target.value;
                                setStoreData({...storeData, faqs: newFaqs});
                              }}
                              placeholder="Answer"
                              rows={2}
                            />
                          </div>
                        </Card>
                      ))}
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
              {storeData.showAnnouncement && storeData.announcement && (
                <div className="bg-primary text-primary-foreground text-center py-2 px-4">
                  <p className="text-sm font-medium">{storeData.announcement}</p>
                </div>
              )}
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