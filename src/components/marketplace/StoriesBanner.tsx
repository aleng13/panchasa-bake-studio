import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "From Dorm Room to 100+ Orders",
    excerpt: "How Priya turned her love for baking into a thriving campus business during her final year.",
    author: "Priya Nair",
    readTime: "3 min read",
    image: "/src/assets/baker-portrait.jpg",
    category: "Success Story"
  },
  {
    id: 2,
    title: "The Art of Campus Entrepreneurship", 
    excerpt: "Five students share their journey of building creative businesses while managing studies.",
    author: "Campus Stories",
    readTime: "5 min read",
    image: "/src/assets/testimonial-baker1.jpg",
    category: "Inspiration"
  },
  {
    id: 3,
    title: "Sustainable Baking: A Green Approach",
    excerpt: "Meet the eco-conscious bakers using local ingredients and sustainable packaging.",
    author: "Eco Campus",
    readTime: "4 min read", 
    image: "/src/assets/testimonial-baker2.jpg",
    category: "Sustainability"
  }
];

export const StoriesBanner = () => {
  return (
    <section id="stories" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Stories from Our Community
            </h2>
            <p className="text-muted-foreground">
              Inspiring journeys of creativity and entrepreneurship
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            All Stories
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <article 
              key={story.id}
              className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                    {story.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" className="w-full">
            View All Stories
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};