import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, School, Users, Target, BookOpen, Brain, Heart, Star, ArrowRight, CheckCircle, Lightbulb, GraduationCap, Award } from "lucide-react";
import schoolsImage1 from "@/assets/trainings/schools-1.jpg";
import schoolsImage2 from "@/assets/trainings/schools-2.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const SchoolCommunityPrograms = () => {
  return (
    <Layout>
      <SEO 
        title="Programs for Schools & Communities | DR.ADI Academy"
        description="Customized transformational programs for schools and communities in Miyapur, Hyderabad. We offer training sessions as per local needs for student development, teacher training, and community empowerment with Dr. ANR's proven methodologies."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Programs for Schools & Communities</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <School className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Programs for Schools & Communities</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Programs for Schools & Communities</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Customized Training Sessions as Per Local Needs - {SITE_CONFIG.location.full}
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
            <Badge variant="outline" className="text-sm py-1 px-3">Education</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Community Development</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Youth Empowerment</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Teacher Training</Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={schoolsImage1} 
              alt="Programs for Schools - Student development and educational enhancement through transformational workshops and life skills training" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Transformational Programs for Educational Excellence
            </h2>
            <p className="text-muted-foreground mb-4">
              We take up training sessions as needed at schools and communities as per the local needs. Our programs are designed to enhance educational outcomes, develop life skills, and create positive transformation in learning environments.
            </p>
            <p className="text-muted-foreground mb-6">
              Please reach us with your enquiries for customized programs that meet your specific institutional and community requirements.
            </p>
            <Button asChild className="w-full">
              <Link to="/contact">
                Get Custom Program Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Program Categories */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Program Categories
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to address diverse needs of educational institutions and community organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Student Development Programs</h3>
              <p className="text-muted-foreground">
                Comprehensive programs for academic excellence, personality development, and life skills enhancement.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Teacher Training & Development</h3>
              <p className="text-muted-foreground">
                Professional development programs for educators to enhance teaching methodologies and student engagement.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Empowerment</h3>
              <p className="text-muted-foreground">
                Programs designed to strengthen community bonds, leadership development, and social responsibility.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Youth Leadership Programs</h3>
              <p className="text-muted-foreground">
                Specialized programs to develop future leaders with strong character and vision.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wellness & Mental Health</h3>
              <p className="text-muted-foreground">
                Programs focused on emotional intelligence, stress management, and overall well-being.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Goal Setting & Achievement</h3>
              <p className="text-muted-foreground">
                Workshops on setting meaningful goals, developing action plans, and achieving success.
              </p>
            </Card>
          </div>
        </section>

        {/* Second Image and Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Why Choose Our Programs?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Customized Approach</h4>
                  <p className="text-sm text-muted-foreground">
                    Programs tailored to specific needs and local requirements of your institution.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Proven Methodologies</h4>
                  <p className="text-sm text-muted-foreground">
                    Dr. ANR's transformational techniques with measurable outcomes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Expert Faculty</h4>
                  <p className="text-sm text-muted-foreground">
                    Experienced trainers with deep understanding of educational and community dynamics.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Comprehensive Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Ongoing support and follow-up to ensure program effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src={schoolsImage2} 
              alt="Community Programs - Teacher training, student development, and community empowerment through collaborative workshops and skill enhancement sessions" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Target Institutions */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Institutions We Serve
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our programs are designed for various educational institutions and community organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <School className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Schools & Colleges</h3>
              <p className="text-sm text-muted-foreground">
                K-12 schools, colleges, and universities
              </p>
            </Card>
            <Card className="text-center p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Community Centers</h3>
              <p className="text-sm text-muted-foreground">
                Local community organizations and centers
              </p>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">NGOs & Trusts</h3>
              <p className="text-sm text-muted-foreground">
                Non-profit organizations and charitable trusts
              </p>
            </Card>
            <Card className="text-center p-6">
              <Lightbulb className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Youth Organizations</h3>
              <p className="text-sm text-muted-foreground">
                Youth clubs and development organizations
              </p>
            </Card>
          </div>
        </section>

        {/* Keywords Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Transform Your Institution & Community
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Programs for Schools</Badge>
              <Badge variant="outline">Community Programs</Badge>
              <Badge variant="outline">Dr.ANR Academy</Badge>
              <Badge variant="outline">Dr.Adi</Badge>
              <Badge variant="outline">Training Institute</Badge>
              <Badge variant="outline">Training & Development Center</Badge>
              <Badge variant="outline">Life Coaching</Badge>
              <Badge variant="outline">Life Skills Coach</Badge>
              <Badge variant="outline">Human Potential Expert</Badge>
              <Badge variant="outline">Transformational Coach</Badge>
              <Badge variant="outline">Kukatpally</Badge>
              <Badge variant="outline">Miyapur</Badge>
              <Badge variant="outline">Hyderabad</Badge>
              <Badge variant="outline">Telangana</Badge>
              <Badge variant="outline">India</Badge>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Contact us with your enquiries for customized programs that meet your specific needs. We design training sessions as per local requirements and institutional goals.
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

export default SchoolCommunityPrograms;
