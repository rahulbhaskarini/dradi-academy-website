import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// Import Joe Dispenza image (you'll need to add this image to the assets folder)
import joeDispenzaImage from "@/assets/trainings/joe-dispenza-rewire.jpg";

const MagnetSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-6xl mx-auto shadow-elegant border-0 bg-card/80 backdrop-blur overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-2 mb-6">
                  <Brain className="h-6 w-6 text-primary animate-pulse" />
                  <span className="text-primary font-semibold">Rewire Your Mind</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  <span className="gradient-text">Break free from old patterns and create your new reality.</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Your mind is incredibly powerful, but most of us are running the same mental programs day after day, creating the same experiences over and over. To change your life, you must first rewire your mind.
                </p>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Based on Dr. Joe Dispenza's revolutionary teachings, learn to become conscious of your unconscious patterns and create new neural pathways that support the life you truly want to live.
                </p>
                
                <Link to="/trainings/rewire-your-mind">
                  <Button variant="hero" size="xl" className="group">
                    Discover Neural Rewiring
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Joe Dispenza Image */}
              <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
                <img 
                  src={joeDispenzaImage} 
                  alt="Dr. Joe Dispenza - Rewire Your Mind expert and neuroscientist teaching neural rewiring and consciousness transformation"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                {/* Optional overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent flex items-end justify-center pb-8">
                  <div className="text-center text-white">
                    <p className="text-sm font-medium opacity-90">Dr. Joe Dispenza</p>
                    <p className="text-xs opacity-75">Neuroscientist & Author</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MagnetSection;