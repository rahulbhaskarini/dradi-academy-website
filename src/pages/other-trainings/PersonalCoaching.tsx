import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Target, Users, MessageCircle, CheckCircle, Star, ArrowRight, Lightbulb, TrendingUp, Heart, Shield, Crown, Zap, Brain, Compass } from "lucide-react";
import personalCoachingImage from "@/assets/trainings/personal-coaching.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const PersonalCoaching = () => {
  return (
    <Layout>
      <SEO 
        title="Personal Coaching | One-on-One Life Coaching | DR.ADI Academy"
        description="Personalized one-on-one coaching in Miyapur, Hyderabad. Remove roadblocks, find clear paths to success, and achieve your life purpose with Dr. ANR. Get guidance, inspiration, and consistent re-calibration until you succeed."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/other-trainings" className="text-muted-foreground hover:text-primary">Other Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Personal Coaching</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Target className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">One-on-One Personal Coaching</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Personal Coaching</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Remove Roadblocks & Achieve Your Life Purpose - {SITE_CONFIG.location.full}
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <a 
              href={getPhoneLink()}
              className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span>{getDisplayPhone()}</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-sm py-1 px-3">One-on-One Coaching</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Life Purpose</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Remove Roadblocks</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Personalized Guidance</Badge>
          </div>
        </div>

        {/* Main Hero Image & Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={personalCoachingImage}
              alt="Personal coaching session - One-on-one guidance to overcome roadblocks and achieve life purpose" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Overcome Roadblocks & Achieve Your Life Purpose</CardTitle>
                <CardDescription className="text-lg">
                  Personalized One-on-One Coaching for Maximum Results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  You are doing good in your life as per your knowledge and resources you have today, 
                  but you have unlimited power and unlimited abilities to manifest anything in your life 
                  much bigger than what you have today. Many of us know this but we face roadblocks and 
                  we don't know the clear path to remove the roadblocks and move forward in life.
                </p>
                <p className="text-foreground/80 mb-6">
                  Personal coaching will help you to sit with your coach/mentor and get the guidance, 
                  inspiration so that you find the new path and consistent re-calibration till you 
                  achieve your life purpose. Please reach to us and find the solutions to roadblocks 
                  you are facing, to succeed in your life.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact?training=Personal%20Coaching">
                    <Button variant="cta" size="lg">
                      <Mail className="h-4 w-4 mr-2" />
                      Book Your Session
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Personal Coaching?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Personalized Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tailored coaching sessions designed specifically for your unique challenges and goals.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Remove Roadblocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Identify and eliminate the obstacles preventing you from achieving your full potential.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Achieve Life Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Discover and pursue your true life purpose with clarity and unwavering commitment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What You'll Gain */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What You'll Gain from Personal Coaching</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" />
                  Clear Direction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Get crystal clear on your life direction and the exact steps needed to reach your goals.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Goal clarity and prioritization</li>
                  <li>• Strategic life planning</li>
                  <li>• Action plan development</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Mindset Transformation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Transform limiting beliefs and develop a success-oriented mindset for lasting change.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Limiting belief identification</li>
                  <li>• Confidence building</li>
                  <li>• Mental resilience training</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Consistent Re-calibration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Regular check-ins and adjustments to keep you on track towards your objectives.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Progress monitoring</li>
                  <li>• Strategy adjustments</li>
                  <li>• Accountability support</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Problem-Solving Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Develop advanced problem-solving capabilities to handle future challenges independently.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Critical thinking development</li>
                  <li>• Decision-making frameworks</li>
                  <li>• Creative solution finding</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Emotional Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Enhance your emotional awareness and interpersonal skills for better relationships.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Self-awareness development</li>
                  <li>• Emotion regulation</li>
                  <li>• Communication skills</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Accelerated Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Experience rapid personal and professional growth through focused coaching interventions.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Skill development acceleration</li>
                  <li>• Performance optimization</li>
                  <li>• Results amplification</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Coaching Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Personal Coaching Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <CardTitle className="text-lg">Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive evaluation of your current situation, challenges, and aspirations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <CardTitle className="text-lg">Strategy Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Create a personalized roadmap with clear milestones and actionable steps.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <CardTitle className="text-lg">Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Execute the plan with ongoing support, guidance, and motivation from your coach.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <CardTitle className="text-lg">Re-calibration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Regular review and adjustment sessions to ensure continuous progress towards your goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Who Benefits from Personal Coaching?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Career advancement, leadership development, and professional skill enhancement.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Entrepreneurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Business growth strategies, decision-making clarity, and entrepreneurial mindset development.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Life Transition Navigators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Support during major life changes, career transitions, or personal transformations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Goal Achievers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Individuals with specific goals who need structured support and accountability.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Challenge Overcomers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Those facing specific obstacles or roadblocks in their personal or professional life.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Crown className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">High Achievers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Successful individuals seeking to reach even higher levels of performance and fulfillment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-lg">Ankit, IT Manager</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "I was stuck in my career for years. Through personal coaching, I identified my roadblocks, 
                  developed leadership skills, and got promoted to Senior Manager within 8 months."
                </p>
                <p className="text-xs text-primary font-medium">Career Advancement Success</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-lg">Preethi, Entrepreneur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "My business was failing and I felt lost. Personal coaching helped me restructure my approach, 
                  overcome mental blocks, and scale my business to 5x revenue in one year."
                </p>
                <p className="text-xs text-primary font-medium">Business Transformation</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-lg">Ravi, Student</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "I lacked direction after graduation. Coaching sessions helped me discover my passion, 
                  build confidence, and land my dream job at a top company."
                </p>
                <p className="text-xs text-primary font-medium">Life Direction & Purpose</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Coaching Areas */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Areas We Focus On</CardTitle>
              <CardDescription className="text-lg">
                Comprehensive Life Coaching Across Multiple Dimensions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Career & Business
                  </h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Career advancement</li>
                    <li>• Business growth</li>
                    <li>• Leadership development</li>
                    <li>• Professional skills</li>
                  </ul>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-primary" />
                    Personal Life
                  </h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Relationship improvement</li>
                    <li>• Life balance</li>
                    <li>• Personal fulfillment</li>
                    <li>• Self-confidence</li>
                  </ul>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    Mindset & Beliefs
                  </h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Limiting belief removal</li>
                    <li>• Success mindset</li>
                    <li>• Fear overcoming</li>
                    <li>• Mental resilience</li>
                  </ul>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Crown className="h-4 w-4 text-primary" />
                    Life Purpose
                  </h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Purpose discovery</li>
                    <li>• Vision clarity</li>
                    <li>• Goal achievement</li>
                    <li>• Legacy building</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Personal Coaching Keywords & Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Personal Coaching</Badge>
            <Badge variant="secondary">One-on-One Coaching</Badge>
            <Badge variant="secondary">Life Coaching</Badge>
            <Badge variant="secondary">Remove Roadblocks</Badge>
            <Badge variant="secondary">Life Purpose</Badge>
            <Badge variant="secondary">Goal Achievement</Badge>
            <Badge variant="secondary">Personalized Guidance</Badge>
            <Badge variant="secondary">Consistent Re-calibration</Badge>
            <Badge variant="secondary">Career Coaching</Badge>
            <Badge variant="secondary">Success Coaching</Badge>
            <Badge variant="secondary">Mindset Transformation</Badge>
            <Badge variant="secondary">Personal Development</Badge>
            <Badge variant="secondary">Leadership Coaching</Badge>
            <Badge variant="secondary">Business Coaching</Badge>
            <Badge variant="secondary">Life Transformation</Badge>
            <Badge variant="secondary">Performance Coaching</Badge>
            <Badge variant="secondary">Miyapur</Badge>
            <Badge variant="secondary">Hyderabad</Badge>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
          <Target className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to Remove Your Roadblocks?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start your personalized coaching journey today. Get the guidance, inspiration, and consistent 
            re-calibration you need to achieve your life purpose and break through any obstacles in your path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?training=Personal%20Coaching">
              <Button variant="cta" size="lg" className="w-full sm:w-auto">
                <Mail className="h-4 w-4 mr-2" />
                Book Your Coaching Session
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href={getPhoneLink()}>
                <Phone className="h-4 w-4 mr-2" />
                Call {getDisplayPhone()}
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            🎯 Free consultation available • 📍 Located in {SITE_CONFIG.location.full} • 
            ⭐ Proven personal coaching methodology
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalCoaching;