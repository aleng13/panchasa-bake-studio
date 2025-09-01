import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin, Star, DollarSign } from "lucide-react";

const filterOptions = {
  categories: ["All", "Cakes", "Cookies", "Savories", "Jewelry", "Art", "Crafts"],
  priceRanges: ["All Prices", "Under ₹100", "₹100-₹300", "₹300-₹500", "Above ₹500"],
  ratings: ["All Ratings", "4+ Stars", "4.5+ Stars", "4.8+ Stars"],
  locations: ["All Campus", "North Block", "South Block", "Hostel Area", "Main Gate"]
};

export const SearchFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    category: "All",
    price: "All Prices", 
    rating: "All Ratings",
    location: "All Campus"
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      category: "All",
      price: "All Prices",
      rating: "All Ratings", 
      location: "All Campus"
    });
    setSearchQuery("");
  };

  return (
    <section className="py-8 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for products, vendors, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg border-border focus:border-primary"
            />
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </Button>
        </div>

        {/* Quick Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm text-muted-foreground mr-2">Quick filters:</span>
          {["Fresh Today", "Best Sellers", "New Arrivals", "Campus Favorites", "Under ₹200"].map((tag) => (
            <button 
              key={tag}
              className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="bg-secondary/50 rounded-2xl p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="flex items-center text-sm font-medium text-foreground mb-3">
                  <Filter className="w-4 h-4 mr-2" />
                  Category
                </label>
                <div className="space-y-2">
                  {filterOptions.categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleFilterChange('category', category)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeFilters.category === category
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-card'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <label className="flex items-center text-sm font-medium text-foreground mb-3">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Price Range
                </label>
                <div className="space-y-2">
                  {filterOptions.priceRanges.map((price) => (
                    <button
                      key={price}
                      onClick={() => handleFilterChange('price', price)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeFilters.price === price
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-card'
                      }`}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="flex items-center text-sm font-medium text-foreground mb-3">
                  <Star className="w-4 h-4 mr-2" />
                  Rating
                </label>
                <div className="space-y-2">
                  {filterOptions.ratings.map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleFilterChange('rating', rating)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeFilters.rating === rating
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-card'
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label className="flex items-center text-sm font-medium text-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location
                </label>
                <div className="space-y-2">
                  {filterOptions.locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => handleFilterChange('location', location)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeFilters.location === location
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-card'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground">
                Showing results for: {Object.values(activeFilters).filter(v => !v.startsWith('All')).join(', ') || 'All items'}
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={clearAllFilters}>
                  Clear All
                </Button>
                <Button onClick={() => setShowFilters(false)}>
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};