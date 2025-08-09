import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Users, Heart, Target, BookOpen, Brain, Shield, ArrowRight, CheckCircle, Star, Lightbulb, MessageCircle, Home } from "lucide-react";
import artOfParentingImage from "@/assets/trainings/art-of-parenting.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const ArtOfIdealParenting = () => {
  return (
    <Layout>
      <SEO 
        title="Art of Ideal Parenting | DR.ADI Academy"
        description="Master the art and science of modern parenting in Miyapur, Hyderabad. Learn evidence-based strategies to build confidence, improve communication, develop self-image, and provide unconditional love with Dr. ANR's proven methodologies."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Art of Ideal Parenting</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Art of Ideal Parenting</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Art of Ideal Parenting</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Master the Art and Science of Modern Parenting - {SITE_CONFIG.location.full}
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
            <Badge variant="outline" className="text-sm py-1 px-3">Parenting Skills</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Child Development</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Family Harmony</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Scientific Methods</Badge>
          </div>
        </div>

        {/* Main Image and Introduction */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={artOfParentingImage} 
              alt="Art of Ideal Parenting - Learn scientific parenting methods to build confidence, develop self-image, and provide unconditional love to your children" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              The Modern Parenting Challenge
            </h2>
            <p className="text-muted-foreground mb-4">
              Parenting is an art and science. Because of the nuclear family structure and also because both parents are working in most cases, kids become stressful and gaps exist in understanding levels between parents and kids.
            </p>
            <p className="text-muted-foreground mb-6">
              To come out of this situation, as a parent, you are facing challenges to build confidence, develop self-image, allow freedom to choose, provide unconditional love, and inspire to reach set goals.
            </p>
            <Button asChild className="w-full">
              <Link to="/contact">
                Join Our Parenting Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Core Parenting Challenges */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Core Parenting Challenges We Address
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              All the challenges will be discussed in detail and solutions will be provided based on scientific methodologies for better results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Building Confidence</h3>
              <p className="text-muted-foreground">
                Learn how to nurture your child's self-confidence and help them believe in their abilities.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Developing Self-Image</h3>
              <p className="text-muted-foreground">
                Help your child develop a positive self-image and healthy relationship with themselves.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Freedom to Choose</h3>
              <p className="text-muted-foreground">
                Learn to provide appropriate freedom while maintaining healthy boundaries and guidance.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unconditional Love</h3>
              <p className="text-muted-foreground">
                Understand how to express unconditional love while maintaining discipline and structure.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Goal Achievement</h3>
              <p className="text-muted-foreground">
                Inspire and guide your children to set and achieve meaningful life goals.
              </p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Communication Bridge</h3>
              <p className="text-muted-foreground">
                Bridge the understanding gap between parents and children in modern families.
              </p>
            </Card>
          </div>
        </section>

        {/* Scientific Approach */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Scientific Parenting Methodologies
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our program is based on proven scientific methodologies that deliver better results and create lasting positive changes in your family dynamics.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Evidence-Based Techniques</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn parenting strategies backed by child psychology and developmental research.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Practical Implementation</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-world applications that work in modern nuclear family structures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Age-Appropriate Strategies</h4>
                    <p className="text-sm text-muted-foreground">
                      Techniques tailored for different developmental stages and age groups.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Working Parent Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      Specialized approaches for dual-career families and time-management challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Stress Reduction Methods</h4>
                    <p className="text-sm text-muted-foreground">
                      Techniques to reduce stress for both parents and children in today's fast-paced world.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Long-term Impact Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Building foundations that positively impact your child's entire life journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Attend */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Who Should Attend This Program?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              This program is designed for parents who want to create a harmonious and supportive family environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">New Parents</h3>
              <p className="text-sm text-muted-foreground">
                First-time parents seeking guidance and confidence
              </p>
            </Card>
            <Card className="text-center p-6">
              <Brain className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Working Parents</h3>
              <p className="text-sm text-muted-foreground">
                Dual-career couples balancing work and family
              </p>
            </Card>
            <Card className="text-center p-6">
              <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Single Parents</h3>
              <p className="text-sm text-muted-foreground">
                Single parents managing multiple responsibilities
              </p>
            </Card>
            <Card className="text-center p-6">
              <Lightbulb className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Experienced Parents</h3>
              <p className="text-sm text-muted-foreground">
                Parents wanting to improve their approach
              </p>
            </Card>
          </div>
        </section>

        {/* Keywords Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Transform Your Parenting Journey
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline">Art of Ideal Parenting</Badge>
              <Badge variant="outline">Miyapur</Badge>
              <Badge variant="outline">Dr.ANR Academy</Badge>
              <Badge variant="outline">Dr.Adi</Badge>
              <Badge variant="outline">Training Institute</Badge>
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
            Ready to Become the Parent Your Child Needs?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Join our Art of Ideal Parenting program and discover the right platform for successful family life. Learn scientific methodologies that create lasting positive changes.
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

export default ArtOfIdealParenting;
