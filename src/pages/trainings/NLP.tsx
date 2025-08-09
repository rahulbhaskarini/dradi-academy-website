import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Brain, Target, Users, TrendingUp, Heart, Zap } from "lucide-react";
import nlpImage from "@/assets/trainings/nlp-4-orig.webp";
import nlpExplanationImage from "@/assets/trainings/nlp-explanation.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const NLP = () => {
  return (
    <Layout>
      <SEO 
        title="Neuro Linguistic Programming - NLP | DR.ADI Academy"
        description="NLP training in Miyapur, Hyderabad to reprogram limiting beliefs, master communication, and achieve peak performance in health, wealth, happiness, business, and relationships."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Neuro Linguistic Programming - NLP</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Neuro Linguistic Programming - NLP</h1>
          <p className="text-xl text-muted-foreground mb-6">Coaching in Miyapur, Hyderabad</p>
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
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img 
            src={nlpImage} 
            alt="Neuro Linguistic Programming (NLP) training diagram showing interconnected neural pathways" 
            className="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg" 
            loading="lazy" 
            decoding="async" 
          />
          <Card>
            <CardHeader>
              <CardTitle>Master Your Mind with NLP</CardTitle>
              <CardDescription>The science of excellence in communication and personal development</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                NLP is the ultimate scientific method to get peak performance in Health, Wealth, Happiness, Business, Relationships. We often delete, distort and generalize information before we communicate and we also create generalized meanings, thereby we invite the problems, unknowingly most of the times.
              </p>
              <p className="mb-4">
                Language may not always describe the reality, just as "MAP IS NOT TERRITORY". NLP tools and techniques will help to understand the mind default settings, you have since years, then teaches you to rewire them with new neural patterns to create the abundance in health, wealth, success, happiness, love, energy, Focus and Confidence.
              </p>
              <p className="mb-6">
                If the above rings true for you and you're looking for the right platform/training institute, you are there right now - in this movement, please join with us and learn about "NLP - Tools and Techniques" and bring greatness in your life, by transforming yourself.
              </p>
              <Link to="/contact?training=Neuro%20Linguistic%20Programming%20-%20NLP">
                <Button variant="cta" size="lg" asChild>
                  <span>
                    <Mail className="h-4 w-4 mr-2" />
                    MAIL US TO REGISTER
                  </span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* NLP Explanation */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/20 border-0 shadow-md">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What is NLP?</h2>
                  <p className="mb-3">
                    Neuro Linguistic Programming studies the structure of how humans think and experience the world. By understanding these processes, you can effectively transform how you think, view past events, and approach your life's challenges.
                  </p>
                  <p>
                    NLP is like a user manual for your mind, helping you understand how your thinking patterns affect your behavior and how to change them for better outcomes in all areas of life.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={nlpExplanationImage} 
                    alt="Diagram showing how NLP connects neurology, language, and programming" 
                    className="rounded-lg shadow-lg max-w-full h-auto" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Areas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Key Areas of Transformation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Reprogram limiting beliefs about health and wellness to create optimal physical and mental well-being.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Wealth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Transform your money mindset and develop neural patterns that attract abundance and financial success.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Happiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn to rewire negative thought patterns and create lasting happiness through NLP techniques.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Business Success
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master communication and influence skills to excel in business and professional environments.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Relationships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Enhance your communication skills and build deeper, more meaningful connections with others.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Personal Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Develop self-awareness and emotional intelligence to achieve personal transformation.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* NLP Techniques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Powerful NLP Techniques You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Anchoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn to create powerful emotional states on demand and access resourceful feelings exactly when you need them.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reframing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master the art of changing the meaning of experiences to transform limitations into opportunities and challenges into growth.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Submodality Changes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how to change the qualities of your internal representations to shift emotions and beliefs at a deep level.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Meta Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn the language patterns that help you gather precise information and challenge limiting thoughts and beliefs effectively.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What Makes Our NLP Training Special</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Scientific Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our NLP training is based on proven scientific methodologies and evidence-based practices that deliver real, measurable results in personal and professional development.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Practical Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn practical NLP techniques that you can immediately apply in your daily life to improve communication, overcome limiting beliefs, and achieve your goals.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Experienced Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Train with experienced NLP practitioners who provide personalized guidance to help you master techniques and apply them to your specific challenges.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Transformational Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Experience profound changes in how you think, communicate, and approach challenges, creating lasting transformation in all areas of your life.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-secondary/10 to-secondary/20 border-0">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">What Our Students Say</h3>
                <blockquote className="italic text-lg mb-4">
                  "Learning NLP techniques has completely transformed how I communicate with others and handle challenges. The training at DR.ADI Academy gave me practical tools that I use every day in both my personal and professional life."
                </blockquote>
                <p className="font-semibold">— Rajesh K., Business Professional</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Course Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Neuro Linguistic Programming",
              "NLP Coaching",
              "Personal Wellbeing",
              "Neuro Semantics",
              "NLP Training",
              "Sales Mastery",
              "Behavioral Training",
              "Communication Skills",
              "Mind Rewiring",
              "Peak Performance"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Transform Your Life with NLP</h3>
          <p className="text-lg mb-6">Join our comprehensive NLP training program and unlock your unlimited potential!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?training=Neuro%20Linguistic%20Programming%20-%20NLP">
              <Button variant="cta" size="lg" asChild>
                <span>
                  <Mail className="h-4 w-4 mr-2" />
                  Register Now
                </span>
              </Button>
            </Link>
            <Button variant="outline" size="lg" asChild>
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

export default NLP;