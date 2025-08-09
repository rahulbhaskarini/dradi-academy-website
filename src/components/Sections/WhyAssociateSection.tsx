import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Target, Users, Sparkles, Zap } from "lucide-react";

const WhyAssociateSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Proven Methodologies",
      description: "Used by millions internationally from coaches like Napoleon Hill, Jack Canfield, Dr. Richard Bandler"
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Learn simple and powerful tools to succeed in career, business, relationships, health and spiritual journey"
    },
    {
      icon: Users,
      title: "Training Community",
      description: "Join our supportive community and find reasons holding you back while discovering your path forward"
    },
    {
      icon: Heart,
      title: "Holistic Growth",
      description: "Transform all areas of life through comprehensive personal development programs"
    },
    {
      icon: Sparkles,
      title: "Unlock Your Magic",
      description: "You are a walking and talking magnet. Discover how to manifest whatever you desire"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Experience the magic as you consistently follow our proven processes and techniques"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">WHY DO YOU NEED TO ASSOCIATE</span>
            <br />
            <span className="text-foreground">WITH A MENTOR TO RESTART YOUR LIFE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Why only few people are able to achieve success and rest are struggling? Once you become part of our 
            training community, you'll find reasons holding you back and discover the path to experience a new way of living. 
            Find solutions to succeed in areas like career/business, relationship, health/appearance, spiritual journey and contribution.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 italic">
              "Bees pollinate our plants, which means they carry pollen between plants of different sexes to fertilize, 
              by which plants reproduce. When the bees are fulfilling such a great purpose in life, think about the 
              magnanimity of human life purpose."
            </blockquote>
            <p className="text-lg text-muted-foreground mb-8">
              Without waiting further, join with us and be part of our training community to unfold the purpose of your life and 
              build the new you with simple and easy to follow powerful tools and techniques.
            </p>
            <Button variant="cta" size="xl" className="group">
              Join Our Community
              <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAssociateSection;