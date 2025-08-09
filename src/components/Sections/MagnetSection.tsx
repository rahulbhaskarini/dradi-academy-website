import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight } from "lucide-react";

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
                  <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                  <span className="text-primary font-semibold">You Are Magical</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  <span className="gradient-text">You are the walking and talking magnet.</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  You can create whatever you manifest by following simple and easy to follow tools and techniques. 
                  You have all the resources needed to reach your goal but you feel you are lacking them because 
                  your inner voice is resisting you.
                </p>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We know the secrets to unfold and make you practice to unfold for you as well. Join with us 
                  and experience the magic.
                </p>
                
                <Button variant="hero" size="xl" className="group">
                  Experience The Magic
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Image/Video Placeholder */}
              <div className="relative h-64 lg:h-full min-h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {/* Animated Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                
                {/* Floating Elements */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center animate-float">
                    <Sparkles className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">Unlock Your Potential</h3>
                  <p className="text-muted-foreground">Discover the magician within you</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-energy rounded-full animate-pulse delay-700"></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-success rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MagnetSection;