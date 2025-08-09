import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, DollarSign, TrendingUp, Target, Brain, Sparkles, Crown, Star, ArrowRight, CheckCircle } from "lucide-react";
import millionaireMindImage from "@/assets/trainings/millionaire-mind-unlimited.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const MillionaireMind = () => {
  return (
    <Layout>
      <SEO 
        title="Millionaire Mind Unlimited | DR.ADI Academy"
        description="Create a millionaire mindset and transform your wealth consciousness. Remove subconscious blocks stopping you from attracting prosperity. Millionaire mindset coaching in Miyapur, Hyderabad with Dr. ANR."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Millionaire Mind Unlimited</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Crown className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Transform Your Wealth Consciousness</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Millionaire Mind Unlimited</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Create a Millionaire Mindset - Coaching in {SITE_CONFIG.location.full}
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
            <Badge variant="outline" className="text-sm py-1 px-3">Wealth Consciousness</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Prosperity Mindset</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Money Management</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Financial Freedom</Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="order-2 md:order-1">
            <Card className="h-full shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  Transform Your Relationship with Money
                </CardTitle>
                <CardDescription className="text-lg">
                  Remove subconscious blocks and create unlimited wealth consciousness
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Millionaire Mind Unlimited</strong> is a comprehensive program focused on the wealth area of 
                  your life. It helps you understand and remove any subconscious blocks that may be stopping 
                  you from attracting more prosperity into your life.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  This transformational program helps you create a genuine millionaire mindset by addressing 
                  deep-rooted beliefs about money, success, and abundance. Through proven techniques, you'll 
                  reprogram your subconscious mind to align with wealth creation principles.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  If you're looking for the right platform to transform your financial destiny, you've found it. 
                  Join us and learn the secrets of "Millionaire Mind Unlimited" to become successful by creating 
                  an authentic millionaire mindset.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/contact?training=Millionaire%20Mind%20Unlimited">
                    <Button variant="cta" size="lg" className="group">
                      <Mail className="h-4 w-4 mr-2" />
                      Register Now
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
              src={millionaireMindImage}
              alt="Millionaire Mind Unlimited coaching program - Transform your wealth consciousness and create prosperity mindset in Miyapur, Hyderabad"
              className="w-full h-auto rounded-lg shadow-elegant"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Core Program Areas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Transform Your Wealth Consciousness</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive program addresses every aspect of wealth creation mindset, removing blocks and 
              installing millionaire thinking patterns that attract abundance naturally.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Money Beliefs Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Identify and transform deep-seated limiting beliefs about money that keep you stuck 
                  in financial mediocrity. Replace scarcity thinking with abundance consciousness.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent to-accent-glow rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Prosperity Mindset Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Develop an authentic prosperity mentality that naturally attracts wealth, opportunities, 
                  and success. Learn to think like millionaires think.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-energy to-primary rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Subconscious Reprogramming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Remove deep-seated subconscious blocks that unconsciously sabotage your financial 
                  success and replace them with millionaire success programming.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Wealth Creation Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Learn proven wealth creation strategies and money management techniques used by 
                  millionaires to build and maintain lasting financial success.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent to-energy rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Crown className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Millionaire Habits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Adopt the daily habits, routines, and practices that wealthy individuals use to 
                  create and maintain their extraordinary financial success.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-energy to-accent rounded-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-8 w-8 text-energy-foreground" />
                </div>
                <CardTitle className="text-xl">Abundance Manifestation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Master the art of manifesting abundance through aligned thoughts, emotions, and 
                  actions that attract unlimited prosperity into your life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Program Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">What You'll Achieve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform your relationship with money and unlock your unlimited wealth potential through our proven system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Clear Money Blocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Identify and eliminate subconscious limitations preventing financial success</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-full mx-auto mb-4">
                  <Brain className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">Reprogram Your Mind</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Install millionaire thinking patterns and wealth consciousness</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-energy to-primary rounded-full mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-energy-foreground" />
                </div>
                <CardTitle className="text-lg">Attract Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Naturally draw wealth-building opportunities and financial success</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">Build Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Develop unshakeable confidence in your ability to create wealth</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent to-energy rounded-full mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">Master Money Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Learn proven strategies for growing and multiplying wealth</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-energy to-accent rounded-full mx-auto mb-4">
                  <Crown className="h-6 w-6 text-energy-foreground" />
                </div>
                <CardTitle className="text-lg">Live Abundantly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Create a lifestyle of abundance and financial freedom</p>
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
              This program is perfect for anyone ready to break through financial limitations and create lasting wealth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Ideal Participants
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Entrepreneurs wanting to scale their business and wealth</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Professionals seeking financial breakthrough and abundance</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Individuals stuck in patterns of financial struggle</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Anyone ready to transform their money mindset</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">People wanting to break generational poverty patterns</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Perfect If You Want To
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Create multiple streams of income</p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Build lasting financial security</p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Overcome fear and scarcity around money</p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Develop investor mindset and wealth strategies</p>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/80">Live a life of abundance and prosperity</p>
                </div>
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
              Real transformations from our Millionaire Mind Unlimited program participants.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">R</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Rajesh M.</CardTitle>
                    <p className="text-sm text-muted-foreground">Business Owner</p>
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
                  "This program completely transformed my relationship with money. Within 6 months, 
                  my business revenue doubled and I finally broke through my income ceiling."
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">P</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Priya S.</CardTitle>
                    <p className="text-sm text-muted-foreground">Corporate Executive</p>
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
                  "I used to have so much fear around money and investing. Dr. ANR helped me clear 
                  those blocks and now I confidently make investment decisions that grow my wealth."
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-energy to-primary rounded-full flex items-center justify-center">
                    <span className="text-energy-foreground font-bold">A</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Arjun K.</CardTitle>
                    <p className="text-sm text-muted-foreground">Entrepreneur</p>
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
                  "The millionaire mindset principles I learned are now part of my daily life. 
                  I've created multiple income streams and my net worth has increased significantly."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Millionaire Principles */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Core Millionaire Principles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Master the fundamental principles that separate millionaire thinking from ordinary financial mindset.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-elegant hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Programming the Millionaire Mindset
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Learn specific techniques to program your subconscious mind with the beliefs, thoughts, 
                  and attitudes that millionaires naturally possess. Transform limiting beliefs into 
                  empowering wealth consciousness.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Crown className="h-5 w-5 text-accent" />
                  Developing Millionaire Habits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Adopt the daily habits and practices that wealthy individuals use to create and 
                  maintain their financial success. Build routines that automatically generate wealth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Target className="h-5 w-5 text-energy" />
                  Areas to Change for Alignment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Identify specific areas of your life that need transformation to align with your 
                  millionaire mindset goals. Create coherence between thoughts, actions, and results.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Millionaire Mastery Techniques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Master advanced strategies for wealth creation, money management, and financial 
                  intelligence. Learn the secrets that separate the wealthy from everyone else.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Wealth Creation Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Your Wealth Transformation Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven 4-step system to transform your money mindset and create lasting financial abundance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-card group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-primary-foreground font-bold text-xl">1</span>
                </div>
                <CardTitle className="text-lg">Identify Blocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Discover subconscious beliefs limiting your financial growth and prosperity potential.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-card group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-accent-foreground font-bold text-xl">2</span>
                </div>
                <CardTitle className="text-lg">Reprogram Mind</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Install new millionaire beliefs and thought patterns at the subconscious level.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-card group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-energy to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-energy-foreground font-bold text-xl">3</span>
                </div>
                <CardTitle className="text-lg">Align Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Transform your daily habits to match those of successful millionaires.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-card group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-primary-foreground font-bold text-xl">4</span>
                </div>
                <CardTitle className="text-lg">Attract Wealth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Naturally attract opportunities and resources for financial abundance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Money Management Topics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Financial Intelligence Areas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Master the key areas of financial intelligence that wealthy individuals use to build and maintain their fortunes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Money Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Learn proven systems for managing, growing, and multiplying your wealth effectively 
                  through strategic planning and disciplined execution.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">Investment Mindset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Develop the mental framework for making smart investment decisions and building 
                  assets that generate passive income and long-term wealth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-elegant hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-energy to-primary rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-energy-foreground" />
                </div>
                <CardTitle className="text-xl">Multiple Income Streams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Create and manage multiple sources of income like wealthy individuals do to 
                  build financial security and accelerate wealth accumulation.
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
              Key concepts and locations covered in this transformational program
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Millionaire Mindset
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Money Management
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Fastest Way to Become Millionaire
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Programming Millionaire Mindset
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Developing Millionaire Mindset
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Millionaire Mastery
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Wealth Creation
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Financial Freedom
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Abundance Mindset
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Prosperity Coaching
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
                <Crown className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Limited Seats Available</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">Ready to Develop Your Millionaire Mindset?</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Remove subconscious blocks and create the wealth consciousness that attracts prosperity. 
                Join thousands who have transformed their financial destiny through our proven system.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">Proven System</h4>
                  <p className="text-sm text-muted-foreground">Transform your money mindset with our tested methodology</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent to-accent-glow rounded-full mx-auto mb-3">
                    <Star className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">Expert Guidance</h4>
                  <p className="text-sm text-muted-foreground">Learn from Dr. ANR's decades of transformation experience</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-energy to-primary rounded-full mx-auto mb-3">
                    <Crown className="h-6 w-6 text-energy-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">Lasting Results</h4>
                  <p className="text-sm text-muted-foreground">Create permanent shifts in your wealth consciousness</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?training=Millionaire%20Mind%20Unlimited">
                  <Button variant="cta" size="lg" className="group text-lg px-8 py-4">
                    <Mail className="h-5 w-5 mr-2" />
                    Register Now
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
                ⭐ Trusted by 1000+ participants
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default MillionaireMind;