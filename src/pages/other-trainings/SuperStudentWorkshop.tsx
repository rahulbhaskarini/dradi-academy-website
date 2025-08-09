import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, BookOpen, Brain, Users, Target, Star, ArrowRight, CheckCircle, Lightbulb, MessageCircle, TrendingUp, Shield, Smile, GraduationCap, Award, Clock, Zap } from "lucide-react";
import superStudentImage from "@/assets/trainings/super-student-workshop.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const SuperStudentWorkshop = () => {
  return (
    <Layout>
      <SEO 
        title="Super Student Unlimited Workshop | DR.ADI Academy"
        description="Transform academic performance with Super Student Unlimited Workshop in Miyapur, Hyderabad. Develop learning skills, thinking skills, and relationship skills for higher academic success. Create competent global citizens with Dr. ANR."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Super Student Unlimited Workshop</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Super Student Unlimited Workshop</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Super Student Unlimited Workshop</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Higher Academic Performance & Healthy Life - {SITE_CONFIG.location.full}
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
            <Badge variant="outline" className="text-sm py-1 px-3">Learning Skills</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Academic Performance</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Study Techniques</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Global Citizens</Badge>
          </div>
        </div>

        {/* Main Hero Image & Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={superStudentImage}
              alt="Super Student Unlimited Workshop - Academic performance enhancement program for students in Miyapur Hyderabad" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Unlock Your Academic Potential</CardTitle>
                <CardDescription className="text-lg">
                  Transform Learning, Thinking & Relationship Skills for Higher Performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  Super Student Unlimited Workshop will help students develop better learning skills, 
                  thinking skills, and relationship skills, resulting in healthy and happier students 
                  with higher academic performance. This comprehensive program is designed to unlock 
                  your full academic potential and personal growth.
                </p>
                <p className="text-foreground/80 mb-6">
                  This program helps create competent and capable global citizens who contribute to 
                  building a better nation. If you're looking for the right platform to transform your 
                  academic journey and personal development, you've found it. Join our movement for 
                  higher academic performance and a healthy, successful life.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact?training=Super%20Student%20Unlimited%20Workshop">
                    <Button variant="cta" size="lg">
                      <Mail className="h-4 w-4 mr-2" />
                      Register Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Skills Development */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Three Pillars of Super Student Success</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Learning Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master advanced learning techniques, memory enhancement, and effective study methods for maximum retention.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 text-left">
                  <li>• Speed reading techniques</li>
                  <li>• Memory palace method</li>
                  <li>• Active recall strategies</li>
                  <li>• Note-taking systems</li>
                  <li>• Information processing</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Thinking Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Develop critical thinking, problem-solving, and analytical abilities for academic excellence.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 text-left">
                  <li>• Critical analysis</li>
                  <li>• Problem-solving frameworks</li>
                  <li>• Creative thinking</li>
                  <li>• Decision-making skills</li>
                  <li>• Logical reasoning</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Relationship Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Build strong interpersonal skills and healthy relationships with peers, teachers, and family.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 text-left">
                  <li>• Communication excellence</li>
                  <li>• Team collaboration</li>
                  <li>• Conflict resolution</li>
                  <li>• Leadership skills</li>
                  <li>• Emotional intelligence</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Comprehensive Learning Curriculum</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Study Techniques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Master proven study methods and techniques for maximum learning efficiency.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Pomodoro Technique</li>
                  <li>• Spaced repetition</li>
                  <li>• Mind mapping</li>
                  <li>• Active learning strategies</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Time Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn to manage time effectively and balance academics with personal life.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Priority setting</li>
                  <li>• Schedule planning</li>
                  <li>• Goal setting frameworks</li>
                  <li>• Productivity systems</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Exam Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Develop effective exam preparation and test-taking strategies for better results.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Exam preparation plans</li>
                  <li>• Stress management</li>
                  <li>• Answer writing techniques</li>
                  <li>• Time allocation in exams</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Confidence Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Build unshakeable confidence and overcome academic fears and limiting beliefs.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Self-confidence techniques</li>
                  <li>• Fear of failure management</li>
                  <li>• Positive mindset development</li>
                  <li>• Self-belief strengthening</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Communication Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Develop excellent communication skills for presentations and interpersonal relationships.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Public speaking</li>
                  <li>• Presentation skills</li>
                  <li>• Active listening</li>
                  <li>• Written communication</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Goal Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn systematic goal setting and achievement strategies for academic and personal success.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• SMART goal setting</li>
                  <li>• Action planning</li>
                  <li>• Progress tracking</li>
                  <li>• Achievement celebration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Workshop Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Transformational Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Higher academic performance and grades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Improved concentration and focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Better time management and organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Enhanced memory retention and recall</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Effective exam strategies and techniques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smile className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Personal Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Increased self-confidence and self-esteem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Better stress management and resilience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Improved emotional intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Enhanced communication and social skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Leadership qualities and team skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Who Should Attend */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Who Should Attend</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">High School Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Students preparing for board exams and competitive entrance tests who want to excel academically.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">College Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Undergraduate and graduate students who want to improve their academic performance and career prospects.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Competitive Exam Aspirants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Students preparing for JEE, NEET, CAT, UPSC, and other competitive examinations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Underperforming Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Students who are struggling academically and want to unlock their hidden potential.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Parents & Educators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Parents and teachers who want to learn effective strategies to help students succeed.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">High Achievers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Top-performing students who want to maintain excellence and reach even higher levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Citizenship */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Creating Competent Global Citizens</CardTitle>
              <CardDescription className="text-lg">
                Contributing to Building a Better Nation
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80 max-w-3xl mx-auto mb-6">
                Our workshop goes beyond academic excellence to create competent and capable global citizens 
                who will contribute to building a better nation. We focus on developing character, values, 
                leadership qualities, and social responsibility alongside academic skills.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Character Building</h4>
                  <p className="text-muted-foreground">Develop integrity, honesty, and strong moral values</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Leadership Skills</h4>
                  <p className="text-muted-foreground">Cultivate leadership abilities and team management skills</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Social Responsibility</h4>
                  <p className="text-muted-foreground">Foster a sense of duty towards society and nation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Student Success Stories</h2>
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
                <CardTitle className="text-lg">Arjun, JEE Aspirant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "My grades improved from 60% to 95% after attending this workshop. The memory techniques and 
                  study methods completely transformed my learning approach. Now I'm confident about cracking JEE!"
                </p>
                <p className="text-xs text-primary font-medium">Academic Performance Boost</p>
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
                <CardTitle className="text-lg">Priyanka, Medical Student</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "I used to struggle with exam anxiety and time management. This workshop taught me effective 
                  stress management and study techniques. I topped my class in the final year!"
                </p>
                <p className="text-xs text-primary font-medium">Stress Management & Excellence</p>
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
                <CardTitle className="text-lg">Rohit, Engineering Student</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "The relationship skills and communication techniques helped me become a leader in my college. 
                  I also secured placement in a top tech company with improved confidence!"
                </p>
                <p className="text-xs text-primary font-medium">Leadership & Career Success</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Workshop Keywords & Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Super Student Workshop</Badge>
            <Badge variant="secondary">Learning Skills</Badge>
            <Badge variant="secondary">Academic Performance</Badge>
            <Badge variant="secondary">Study Techniques</Badge>
            <Badge variant="secondary">Memory Enhancement</Badge>
            <Badge variant="secondary">Thinking Skills</Badge>
            <Badge variant="secondary">Relationship Skills</Badge>
            <Badge variant="secondary">Student Development</Badge>
            <Badge variant="secondary">Global Citizens</Badge>
            <Badge variant="secondary">Exam Strategies</Badge>
            <Badge variant="secondary">Time Management</Badge>
            <Badge variant="secondary">Confidence Building</Badge>
            <Badge variant="secondary">Communication Skills</Badge>
            <Badge variant="secondary">Leadership</Badge>
            <Badge variant="secondary">Academic Excellence</Badge>
            <Badge variant="secondary">Miyapur</Badge>
            <Badge variant="secondary">Hyderabad</Badge>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
          <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to Become a Super Student?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of students who have transformed their academic performance and life. Develop the 
            skills needed to excel in academics and become a competent global citizen ready to contribute 
            to building a better nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?training=Super%20Student%20Unlimited%20Workshop">
              <Button variant="cta" size="lg" className="w-full sm:w-auto">
                <Mail className="h-4 w-4 mr-2" />
                Register for Workshop
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href={getPhoneLink()}>
                <Phone className="h-4 w-4 mr-2" />
                Call {getDisplayPhone()}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuperStudentWorkshop;