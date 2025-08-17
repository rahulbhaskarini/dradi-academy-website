import Layout from "@/components/Layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Brain, 
  GraduationCap, 
  Users, 
  Building2, 
  School, 
  Target,
  ArrowRight 
} from "lucide-react";
import SEO from "@/components/SEO";

// Import training images
import artOfParentingImage from "@/assets/trainings/art-of-parenting.jpg";
import corporateTrainingImage from "@/assets/trainings/corporate-1.png";
import emotionalIntelligenceImage from "@/assets/trainings/emotional-intelligence.jpg";
import personalCoachingImage from "@/assets/trainings/personal-coaching.jpg";
import superStudentWorkshopImage from "@/assets/trainings/super-student-workshop.jpg";
import loveYourselfHealImage from "@/assets/trainings/love-yourself-heal.jpg";

const OtherTrainings = () => {
  return (
    <Layout>
      <SEO 
        title="Other Training Programs | Dr.Adi Academy"
        description="Explore our comprehensive range of specialized training programs including Emotional Intelligence, Personal Coaching, Super Student Workshop, Parenting, and Corporate Training in Miyapur, Hyderabad."
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Other Trainings</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Brain className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Specialized Training Programs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Other Training Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Discover our comprehensive range of specialized training programs designed to transform lives, enhance skills, and unlock human potential across all areas of life.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="outline">Personal Development</Badge>
            <Badge variant="outline">Professional Growth</Badge>
            <Badge variant="outline">Family & Relationships</Badge>
            <Badge variant="outline">Academic Excellence</Badge>
            <Badge variant="outline">Corporate Training</Badge>
          </div>
        </div>

        {/* Training Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={emotionalIntelligenceImage} 
                alt="Emotional Intelligence Training"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">Self-Awareness</Badge>
                <Badge variant="secondary" className="text-xs">Empathy</Badge>
                <Badge variant="secondary" className="text-xs">Social Skills</Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                Emotional Intelligence Training
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Master your emotions and build stronger relationships with our comprehensive Emotional Intelligence program.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full group">
                <Link to="/other-trainings/emotional-intelligence">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={personalCoachingImage} 
                alt="Personal Coaching"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Target className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">Goal Setting</Badge>
                <Badge variant="secondary" className="text-xs">Life Transformation</Badge>
                <Badge variant="secondary" className="text-xs">Personal Growth</Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                Personal Coaching
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                One-on-one transformational coaching sessions designed to unlock your full potential and achieve your goals.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full group">
                <Link to="/other-trainings/personal-coaching">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={superStudentWorkshopImage} 
                alt="Super Student Unlimited Workshop"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">Academic Excellence</Badge>
                <Badge variant="secondary" className="text-xs">Study Skills</Badge>
                <Badge variant="secondary" className="text-xs">Global Citizens</Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                Super Student Unlimited Workshop
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Transform academic performance with proven learning techniques, study strategies, and personal development skills.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full group">
                <Link to="/other-trainings/super-student-workshop">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={loveYourselfHealImage} 
                alt="Love Yourself, Heal Yourself"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">Self-Love</Badge>
                <Badge variant="secondary" className="text-xs">Healing</Badge>
                <Badge variant="secondary" className="text-xs">Inner Peace</Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                Love Yourself, Heal Yourself
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                A transformative journey of self-love and healing that addresses emotional wounds and builds self-worth.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full group">
                <Link to="/other-trainings/love-yourself-heal-yourself">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={artOfParentingImage} 
                alt="Art of Ideal Parenting"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">Parenting Skills</Badge>
                <Badge variant="secondary" className="text-xs">Child Development</Badge>
                <Badge variant="secondary" className="text-xs">Family Harmony</Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                Art of Ideal Parenting
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Comprehensive parenting program that helps you raise confident, successful, and well-balanced children.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full group">
                <Link to="/other-trainings/art-of-ideal-parenting">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={corporateTrainingImage} 
                alt="Corporate Training"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="text-xs">Leadership</Badge>
                <Badge variant="secondary" className="text-xs">Team Building</Badge>
                <Badge variant="secondary" className="text-xs">Professional Development</Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                Corporate Training
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Professional development programs that enhance workplace performance, leadership, and team dynamics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full group">
                <Link to="/other-trainings/corporate-training">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Choose the program that resonates with your goals and begin your transformational journey today. Each program is designed with Dr. ANR's proven methodologies for lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/my-story">
                Learn About Dr. ANR
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OtherTrainings;
