import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Heart, Brain, Users, Target, Sparkles, Crown, Star, ArrowRight, CheckCircle, Lightbulb, MessageCircle, TrendingUp } from "lucide-react";
import emotionalIntelligenceImage from "@/assets/trainings/emotional-intelligence.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const EmotionalIntelligence = () => {
  return (
    <Layout>
      <SEO 
        title="Emotional Intelligence Coaching | DR.ADI Academy"
        description="Develop high emotional intelligence to become a better leader, speaker, and person in all areas of life. Emotional intelligence coaching in Miyapur, Hyderabad with Dr. ANR for self-awareness, self-control, and leadership excellence."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Emotional Intelligence</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Master Your Emotional Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Emotional Intelligence Coaching</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Become a Better Leader, Speaker & Person - Coaching in {SITE_CONFIG.location.full}
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
            <Badge variant="outline" className="text-sm py-1 px-3">Leadership Excellence</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Self-Awareness</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Emotional Control</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Communication Skills</Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="order-2 md:order-1">
            <Card className="h-full shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary" />
                  Master Your Emotions for Leadership Success
                </CardTitle>
                <CardDescription className="text-lg">
                  Develop high emotional intelligence to lead, communicate, and excel in all areas of life
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  <strong>To become a good leader or speaker, one must have high emotional intelligence.</strong> 
                  The advantage of having high emotional intelligence is invaluable when addressing large gatherings 
                  in workshops or meetings.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Often, certain people try to present their own views which may not be relevant to the topic 
                  or not in line with the majority, and they push very hard unnecessarily. To manage these 
                  kinds of situations as a speaker, you must have high self-awareness followed by self-control 
                  of your emotions, to have control of the entire situation.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Our comprehensive Emotional Intelligence program equips you with the skills to understand, 
                  manage, and leverage emotions effectively for personal and professional success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/contact?training=Emotional%20Intelligence">
                    <Button variant="cta" size="lg" className="group">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact us for Registrations
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" asChild>
                    <a href={getPhoneLink()}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call {getDisplayPhone()}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src={emotionalIntelligenceImage}
              alt="Emotional Intelligence coaching program - Develop leadership skills, self-awareness, and emotional control in Miyapur, Hyderabad"
              className="w-full h-auto rounded-lg shadow-elegant"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Core EI Components */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Four Pillars of Emotional Intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Master the essential components that make up emotional intelligence and transform your leadership capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Self-Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Develop deep understanding of your emotions, strengths, weaknesses, and triggers 
                  to make better decisions and respond thoughtfully.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent to-accent-glow rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Self-Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Master self-control, emotional regulation, and adaptability to maintain 
                  composure and effectiveness under pressure.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-energy to-primary rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-energy-foreground" />
                </div>
                <CardTitle className="text-xl">Social Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Enhance your ability to understand others' emotions, read social cues, 
                  and navigate complex interpersonal dynamics effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Relationship Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Build stronger relationships, influence positively, manage conflicts, 
                  and inspire others through emotional intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits for Leaders & Speakers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Why EI is Essential for Leaders</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how emotional intelligence transforms your ability to lead, speak, and influence others effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Handle Challenging Audiences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Manage disruptive participants and off-topic discussions with composure and skill</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-full mx-auto mb-4">
                  <Crown className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">Command Respect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Gain natural authority and respect through emotional maturity and self-control</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-energy to-primary rounded-full mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-energy-foreground" />
                </div>
                <CardTitle className="text-lg">Improve Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Enhance team performance and productivity through better emotional leadership</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Make Better Decisions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Use emotional intelligence to make more thoughtful and effective decisions</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent to-energy rounded-full mx-auto mb-4">
                  <Heart className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">Build Stronger Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Create deeper connections and trust with team members and stakeholders</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-energy to-accent rounded-full mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-energy-foreground" />
                </div>
                <CardTitle className="text-lg">Inspire and Motivate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Become an inspiring leader who motivates others to achieve their best</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Who Should Attend</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This program is ideal for anyone looking to enhance their leadership capabilities and emotional intelligence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <Crown className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Leaders & Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Team leaders, managers, and executives who want to improve their leadership effectiveness</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-accent mx-auto mb-2" />
                <CardTitle className="text-lg">Public Speakers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Trainers, presenters, and speakers who address large audiences and need to manage challenging situations</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-energy mx-auto mb-2" />
                <CardTitle className="text-lg">Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sales professionals, consultants, and anyone who works closely with people</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">HR Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Human resources professionals who need to manage people and resolve conflicts</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-accent mx-auto mb-2" />
                <CardTitle className="text-lg">Entrepreneurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Business owners who need to inspire teams and build strong relationships</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <Heart className="h-8 w-8 text-energy mx-auto mb-2" />
                <CardTitle className="text-lg">Personal Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Anyone seeking to improve their emotional intelligence for personal and professional growth</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real transformations from our Emotional Intelligence program participants.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">S</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Suresh K.</CardTitle>
                    <p className="text-sm text-muted-foreground">Team Manager</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic">
                  "This program transformed my leadership style. I can now handle difficult team members 
                  with confidence and create a more positive work environment."
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">M</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Meera R.</CardTitle>
                    <p className="text-sm text-muted-foreground">Corporate Trainer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic">
                  "As a trainer, I now handle disruptive participants effortlessly. My sessions are 
                  more engaging and effective thanks to the emotional intelligence skills I learned."
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-energy to-primary rounded-full flex items-center justify-center">
                    <span className="text-energy-foreground font-bold">V</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Vikram P.</CardTitle>
                    <p className="text-sm text-muted-foreground">Sales Director</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic">
                  "My emotional intelligence skills have dramatically improved my client relationships 
                  and team performance. This training is invaluable for any leader."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Program Keywords & Tags</span>
            </h3>
            <p className="text-muted-foreground">
              Key concepts and skills covered in this comprehensive emotional intelligence program
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Emotional Intelligence
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Leadership Skills
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Self-Awareness
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Self-Management
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Social Awareness
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Relationship Management
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Communication Skills
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Public Speaking
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Conflict Resolution
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Team Leadership
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors">
              Miyapur
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors">
              Hyderabad
            </Badge>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mb-16">
          <Card className="border-0 shadow-elegant bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="text-center p-8 md:p-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 rounded-full mb-6">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Transform Your Leadership</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Ready to Develop Emotional Intelligence?</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Master the skills that separate great leaders from good ones. Develop emotional intelligence 
                to handle any situation with confidence and inspire others to achieve their best.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">Practical Skills</h4>
                  <p className="text-sm text-muted-foreground">Learn actionable techniques you can apply immediately</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-full mx-auto mb-3">
                    <Star className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">Expert Training</h4>
                  <p className="text-sm text-muted-foreground">Learn from Dr. ANR's proven emotional intelligence methods</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-energy to-primary rounded-full mx-auto mb-3">
                    <Crown className="h-6 w-6 text-energy-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">Leadership Excellence</h4>
                  <p className="text-sm text-muted-foreground">Become the emotionally intelligent leader people want to follow</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?training=Emotional%20Intelligence">
                  <Button variant="cta" size="lg" className="group text-lg px-8 py-4">
                    <Phone className="h-5 w-5 mr-2" />
                    Contact us for Registrations
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                  <a href={getPhoneLink()}>
                    <Phone className="h-5 w-5 mr-2" />
                    Call {getDisplayPhone()}
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                🎯 Personal consultation available • 📍 Located in {SITE_CONFIG.location.full} • 
                ⭐ Proven emotional intelligence development system
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default EmotionalIntelligence;