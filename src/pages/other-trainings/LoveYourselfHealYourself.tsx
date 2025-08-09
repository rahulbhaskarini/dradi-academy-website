import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Heart, Sparkles, BookOpen, Users, Target, Star, ArrowRight, CheckCircle, Lightbulb, MessageCircle, TrendingUp, Shield, Smile } from "lucide-react";
import loveYourselfImage from "@/assets/trainings/love-yourself-heal.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const LoveYourselfHealYourself = () => {
  return (
    <Layout>
      <SEO 
        title="Love Yourself & Heal Your Life Coaching | DR.ADI Academy"
        description="Transform your life with Louise Hay's proven methods for self-love and healing. Break negative patterns, develop emotional wellness, and live joyfully. Love yourself and heal your life coaching in Miyapur, Hyderabad with Dr. ANR."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/other-trainings" className="text-muted-foreground hover:text-primary">Other Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Love Yourself & Heal Your Life</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Love Yourself & Heal Your Life</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Love Yourself & Heal Your Life</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            For Joyful, Happy & Healthier Life - Based on Louise Hay's Method in {SITE_CONFIG.location.full}
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
            <Badge variant="outline" className="text-sm py-1 px-3">Self-Love</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Emotional Healing</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Louise Hay Method</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Joyful Living</Badge>
          </div>
        </div>

        {/* Main Hero Image & Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={loveYourselfImage}
              alt="Love yourself and heal your life - Self-love and healing workshop based on Louise Hay's method" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Transform Your Life with Self-Love & Healing</CardTitle>
                <CardDescription className="text-lg">
                  Based on Louise Hay's International Bestseller "You Can Heal Your Life"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  Love yourself and heal your Life is a transformational workshop based on international 
                  bestselling author Louise Hay's book "You Can Heal Your Life". This powerful program 
                  helps you break through unwanted neural patterns and empowers you to live a happy, 
                  healthy, and joyful life.
                </p>
                <p className="text-foreground/80 mb-6">
                  If you're looking for the right platform to transform your life through self-love 
                  and healing, you've found it. Join our movement and discover how to love yourself 
                  and heal your life for true joy and fulfillment.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact?training=Love%20Yourself%20%26%20Heal%20Your%20Life">
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

        {/* Core Principles Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Core Principles of Self-Love & Healing</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Self-Love</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learn to love and accept yourself unconditionally, creating the foundation for all healing and growth.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Emotional Release</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Release old emotional wounds, traumas, and limiting beliefs that prevent you from living fully.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Thought Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Transform negative thought patterns into positive, life-affirming beliefs and mental habits.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Joyful Living</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cultivate lasting joy, peace, and happiness as your natural state of being.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What You'll Learn & Experience</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Self-Love Practices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Master powerful techniques to develop unconditional love and acceptance for yourself.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Daily self-love affirmations</li>
                  <li>• Mirror work exercises</li>
                  <li>• Self-compassion practices</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Breaking Negative Patterns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Identify and transform unwanted neural patterns that hold you back from happiness.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Pattern recognition techniques</li>
                  <li>• Belief system reprogramming</li>
                  <li>• Habit transformation methods</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Emotional Healing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Discover powerful methods to heal emotional wounds and create lasting inner peace.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Forgiveness practices</li>
                  <li>• Trauma release techniques</li>
                  <li>• Inner child healing</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Affirmation Power
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Learn Louise Hay's famous affirmation techniques to reprogram your mind for success.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Creating powerful affirmations</li>
                  <li>• Daily affirmation practice</li>
                  <li>• Manifestation through words</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Body-Mind Connection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Understand how thoughts affect your physical health and learn healing visualization.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Healing visualizations</li>
                  <li>• Body awareness practices</li>
                  <li>• Energy healing techniques</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Smile className="h-5 w-5 text-primary" />
                  Creating Joy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Develop practical tools to maintain joy, happiness, and emotional well-being daily.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Joy cultivation practices</li>
                  <li>• Gratitude exercises</li>
                  <li>• Happiness habits</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Louise Hay's Philosophy */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardHeader className="text-center">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Based on Louise Hay's Transformational Philosophy</CardTitle>
              <CardDescription className="text-lg">
                "You Can Heal Your Life" - International Bestseller Method
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80 max-w-3xl mx-auto mb-6">
                This workshop is based on the proven principles from Louise Hay's international bestseller. 
                You'll learn how your thoughts create your experiences and discover the profound truth that 
                loving yourself is the key to healing every area of your life.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Core Teaching #1</h4>
                  <p className="text-muted-foreground">"The thoughts we think and the words we speak create our experiences"</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Core Teaching #2</h4>
                  <p className="text-muted-foreground">"Loving ourselves works miracles in our lives"</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Core Teaching #3</h4>
                  <p className="text-muted-foreground">"We can heal our lives by changing our thoughts and beliefs"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Who This Is For */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Who This Workshop Is For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Self-Development Seekers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Individuals committed to personal growth and healing their relationship with themselves.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Those Struggling with Self-Worth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  People who struggle with self-criticism, low self-esteem, or negative self-talk.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Healing from Past Trauma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Individuals ready to heal from emotional wounds, childhood trauma, or relationship pain.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Wellness Enthusiasts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Those interested in holistic wellness and the mind-body connection for complete health.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Life Transition Navigators</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  People going through major life changes who want to create a positive foundation.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Smile className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Joy & Happiness Seekers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Anyone who wants to live with more joy, peace, and authentic happiness every day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Transformation Journey */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Your Healing Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <CardTitle className="text-lg">Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Recognize limiting beliefs and negative patterns that no longer serve you.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <CardTitle className="text-lg">Release</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Let go of old wounds, forgive yourself and others, and clear emotional blockages.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <CardTitle className="text-lg">Reprogram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Install new positive beliefs and create loving thoughts about yourself and life.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <CardTitle className="text-lg">Thrive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Live joyfully with self-love as your foundation and experience true healing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Transformation Stories</h2>
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
                <CardTitle className="text-lg">Priya, Software Engineer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "I was constantly criticizing myself and felt unworthy of love. This workshop taught me to love myself 
                  unconditionally. Now I wake up with joy and confidence every day."
                </p>
                <p className="text-xs text-primary font-medium">Self-Love & Confidence Transformation</p>
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
                <CardTitle className="text-lg">Rajesh, Business Owner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "Childhood trauma was affecting my relationships and business. Through Louise Hay's methods, I healed my past 
                  and created a loving relationship with myself and others."
                </p>
                <p className="text-xs text-primary font-medium">Emotional Healing & Relationship Success</p>
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
                <CardTitle className="text-lg">Meera, Teacher</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic mb-3">
                  "I learned to transform my negative thoughts into positive affirmations. My health improved, my relationships 
                  flourished, and I discovered true happiness within myself."
                </p>
                <p className="text-xs text-primary font-medium">Holistic Life Transformation</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Workshop Keywords & Focus Areas</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Love Yourself</Badge>
            <Badge variant="secondary">Heal Your Life</Badge>
            <Badge variant="secondary">Louise Hay Method</Badge>
            <Badge variant="secondary">Self-Love Practices</Badge>
            <Badge variant="secondary">Emotional Healing</Badge>
            <Badge variant="secondary">Affirmations</Badge>
            <Badge variant="secondary">Forgiveness</Badge>
            <Badge variant="secondary">Inner Peace</Badge>
            <Badge variant="secondary">Happy Life</Badge>
            <Badge variant="secondary">Healthier Life</Badge>
            <Badge variant="secondary">Joyful Living</Badge>
            <Badge variant="secondary">Mindfulness</Badge>
            <Badge variant="secondary">Personal Growth</Badge>
            <Badge variant="secondary">Self-Acceptance</Badge>
            <Badge variant="secondary">Trauma Healing</Badge>
            <Badge variant="secondary">Positive Thinking</Badge>
            <Badge variant="secondary">Miyapur</Badge>
            <Badge variant="secondary">Hyderabad</Badge>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
          <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to Love Yourself & Heal Your Life?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start your journey to self-love, emotional healing, and joyful living today. Join our transformational 
            workshop based on Louise Hay's proven methods and discover the power of loving yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?training=Love%20Yourself%20%26%20Heal%20Your%20Life">
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

export default LoveYourselfHealYourself;