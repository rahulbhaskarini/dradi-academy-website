import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Building2, Users, Target, TrendingUp, Brain, Heart, Star, ArrowRight, CheckCircle, Lightbulb, Award, Briefcase } from "lucide-react";
import corporateImage1 from "@/assets/trainings/corporate-1.png";
import corporateImage2 from "@/assets/trainings/corporate-2.png";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const CorporateTraining = () => {
  return (
    <Layout>
      <SEO 
        title="Corporate Training Programs | DR.ADI Academy"
        description="Customized corporate training programs in Miyapur, Hyderabad. We offer professional development training sessions as per corporate needs for leadership, team building, performance enhancement, and employee transformation with Dr. ANR's methodologies."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Corporate Training Programs</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Corporate Training Programs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Corporate Training Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Professional Development as Per Corporate Needs - {SITE_CONFIG.location.full}
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
            <Badge variant="outline" className="text-sm py-1 px-3">Leadership</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Team Building</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Professional Development</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Performance Enhancement</Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={corporateImage1} 
              alt="Corporate Training Programs - Professional development sessions for leadership enhancement, team building, and performance optimization in corporate environments" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Transformational Corporate Solutions
            </h2>
            <p className="text-muted-foreground mb-4">
              We take up training sessions at corporates as per the needs request. Our corporate training programs are designed to enhance employee performance, build effective teams, and create positive organizational culture.
            </p>
            <p className="text-muted-foreground mb-6">
              Please reach us with your enquiries for customized corporate training solutions that align with your business objectives and organizational goals.
            </p>
            <Button asChild className="w-full">
              <Link to="/contact">
                Request Corporate Training Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Training Categories */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Corporate Training Solutions
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training programs designed to address diverse corporate needs and drive organizational excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Leadership Development</h3>
              <p className="text-muted-foreground">
                Develop effective leaders who can inspire teams, drive change, and achieve organizational goals.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Team Building & Collaboration</h3>
              <p className="text-muted-foreground">
                Build high-performing teams with improved communication, trust, and collaborative effectiveness.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Enhancement</h3>
              <p className="text-muted-foreground">
                Boost individual and team performance through proven methodologies and skill development.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Communication Skills</h3>
              <p className="text-muted-foreground">
                Enhance interpersonal communication, presentation skills, and professional relationships.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Stress Management & Wellness</h3>
              <p className="text-muted-foreground">
                Promote employee well-being through stress management and work-life balance strategies.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Goal Setting & Achievement</h3>
              <p className="text-muted-foreground">
                Align individual goals with organizational objectives for maximum productivity and success.
              </p>
            </Card>
          </div>
        </section>

        {/* Second Image and Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why Choose Our Corporate Training?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Customized Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Training programs tailored to your specific corporate needs and business objectives.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Expert Trainers</h4>
                  <p className="text-sm text-muted-foreground">
                    Dr. ANR's proven methodologies delivered by experienced corporate trainers.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Measurable Results</h4>
                  <p className="text-sm text-muted-foreground">
                    ROI-focused training with clear metrics and performance improvements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Flexible Delivery</h4>
                  <p className="text-sm text-muted-foreground">
                    On-site, virtual, or hybrid training options to suit your organizational needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src={corporateImage2} 
              alt="Corporate Team Development - Professional workshops focusing on leadership skills, team collaboration, and organizational excellence for enhanced business performance" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Industries We Serve */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our corporate training programs are designed for organizations across various industries and sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Building2 className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">IT & Technology</h3>
              <p className="text-sm text-muted-foreground">
                Software companies and tech organizations
              </p>
            </Card>
            <Card className="text-center p-6">
              <Briefcase className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm text-muted-foreground">
                Production and manufacturing industries
              </p>
            </Card>
            <Card className="text-center p-6">
              <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground">
                Hospitals and healthcare organizations
              </p>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Financial Services</h3>
              <p className="text-sm text-muted-foreground">
                Banks and financial institutions
              </p>
            </Card>
          </div>
        </section>

        {/* Training Formats */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Flexible Training Formats
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Choose the training format that best suits your organizational needs and constraints.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <Lightbulb className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Workshops & Seminars</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive sessions for skill development and team engagement
                </p>
              </Card>
              <Card className="text-center p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Long-term Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive development programs with ongoing support
                </p>
              </Card>
              <Card className="text-center p-6">
                <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Executive Coaching</h3>
                <p className="text-sm text-muted-foreground">
                  One-on-one coaching for senior leadership development
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Keywords Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Transform Your Organization
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Corporate Training</Badge>
              <Badge variant="outline">Miyapur</Badge>
              <Badge variant="outline">Dr.ANR Academy</Badge>
              <Badge variant="outline">Dr.Adi</Badge>
              <Badge variant="outline">Training Institute</Badge>
              <Badge variant="outline">Training & Development Center</Badge>
              <Badge variant="outline">Life Coaching</Badge>
              <Badge variant="outline">Life Skills Coach</Badge>
              <Badge variant="outline">Human Potential Expert</Badge>
              <Badge variant="outline">Transformational Coach</Badge>
              <Badge variant="outline">Kukatpally</Badge>
              <Badge variant="outline">Hyderabad</Badge>
              <Badge variant="outline">Telangana</Badge>
              <Badge variant="outline">India</Badge>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Team's Performance?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Contact us with your enquiries for customized corporate training sessions. We design programs as per your specific needs and business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Mail Us to Register
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={getPhoneLink()}>
                <Phone className="mr-2 h-4 w-4" />
                Call {getDisplayPhone()}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CorporateTraining;