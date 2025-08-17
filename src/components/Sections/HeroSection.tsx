import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Play, Youtube } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { getYouTubeUrl } from "@/lib/config";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Transform your life - DR.ADI Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">Transform Your Life</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="gradient-text">TRANSFORM YOUR LIFE</span>
              <br />
              <span className="text-foreground">BY TAKING MASSIVE ACTIONS AND</span>
              <br />
              <span className="text-primary">BECOME UNSTOPPABLE</span>
            </h1>

            {/* Tagline */}
            <div className="mb-6">
              <p className="text-2xl md:text-3xl font-semibold text-accent mb-4 tracking-wide">
                Coaching Minds. Healing Hearts. Transforming Lives.
              </p>
            </div>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Welcome to a new world of possibilities with Dr. ADI Academy. Leave the past behind and step into the journey of creating the best version of yourself. You are the magician of your life — capable of achieving everything you envision. Discover the secrets to success, happiness, and lasting transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href={getYouTubeUrl()} target="_blank" rel="noopener noreferrer" className="group">
                  <Youtube className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch our YouTube channel
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-background"></div>
                  ))}
                </div>
                <span>1000+ Lives Transformed</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-energy text-energy" />
                ))}
                <span className="ml-2">4.9/5 Rating</span>
              </div>
              <div>
                <span className="font-semibold">Dr. ANR</span> - Ph.D, Certified Trainer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;