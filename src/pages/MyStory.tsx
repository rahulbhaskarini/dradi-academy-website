import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Using the new uploaded image of Dr. ANR
import { 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Users, 
  Star, 
  Award,
  Target,
  Sparkles
} from "lucide-react";

const MyStory = () => {
  const qualifications = [
    "Ph.D in Pharmacy",
    "Psychologist", 
    "Certified trainer - Impact foundation",
    "Certified trainer - Blair Singer training academy",
    "Life Skills/Success - Coach",
    "Law of attraction - Coach",
    "NLP - Coach",
    "Mind Mastery - Coach",
    "Habit Mastery-Coach",
    "Conscious and Joyful Living - Coach",
    "Human Potential Expert"
  ];

  const achievements = [
    {
      icon: Briefcase,
      title: "17+ Years R&D Experience",
      description: "Working with reputed Indian Pharma Companies like Alkem, Torrent, Suven, Shilpa Therapeutics & Dr.Reddy's"
    },
    {
      icon: Award,
      title: "Covid-19 Emergency Projects",
      description: "Fortunate to be part of Covid-19 emergency medication projects through Emergency Use Authorizations"
    },
    {
      icon: Users,
      title: "Thousands Transformed",
      description: "This adventure of mine touched thousands and transformed the average guy rising above mediocrity to find greatness"
    },
    {
      icon: Target,
      title: "One Million Goal",
      description: "My Life purpose is to teach, inspire, empower one million to live happier, healthier & successful"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="/lovable-uploads/1d9c5bc1-476c-4aab-9e29-2fb39b34385d.png"
                    alt="Dr. ANR - Founder of DR.ADI Academy"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-accent to-accent-glow rounded-full opacity-20 animate-pulse delay-300"></div>
              </div>

              {/* Content */}
              <div>
                <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                  Founder & Lead Trainer
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Dr. Adinarayana Reddy Kadapa</span>
                </h1>
                
                <div className="space-y-4 text-lg text-muted-foreground mb-8">
                  <p>
                    Dr.ANR has Ph.D in Pharmaceutic and working in research and development area from past 17+ years 
                    with reputed India Pharma Companies like Alkem, Torrent, Suven, Shilpa Therapeutics & Dr.Reddy's. 
                    Fortunate to be part of Covid-19 emergency medication projects through Emergency Use Authorizations 
                    to address the public health emergency in pandemic time.
                  </p>
                  
                  <p>
                    My passion forced me to focus on empowering people from their limited belief then started learning 
                    from world best trainers and coaches and applying the magical learnings of Mind power tools and techniques, 
                    thus helping people to become unstoppable.
                  </p>
                </div>

                <blockquote className="text-xl md:text-2xl font-semibold text-primary border-l-4 border-primary pl-6 mb-8 italic">
                  "My Life purpose is to teach, inspire, empower one million- to live happier, healthier & successful."
                </blockquote>

                <Button variant="cta" size="xl" className="group">
                  Join My Mission
                  <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Professional Qualifications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A unique combination of scientific expertise and transformational coaching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {qualifications.map((qualification, index) => (
              <Card key={index} className="bg-background/80 backdrop-blur border-0 shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground">{qualification}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">Key Achievements & Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A journey from pharmaceutical research to transforming thousands of lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent to-accent-glow rounded-lg mb-6 group-hover:scale-110 transition-transform">
                    <achievement.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{achievement.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Journey Story */}
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-0 shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="gradient-text">The Transformation Journey</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  This adventure of mine touched thousands and transformed the average guy rising above mediocrity to find greatness. 
                  If you wish to become unstoppable by taking massive actions and believe on us, please be associate with us to 
                  transform your life too like many others.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="xl">
                    Start Your Transformation
                  </Button>
                  <Button variant="outline" size="xl">
                    Contact Dr. ANR
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default MyStory;