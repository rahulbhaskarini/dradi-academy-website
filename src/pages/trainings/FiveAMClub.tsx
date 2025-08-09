import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Clock, Target, Zap, ArrowRight, Calendar, RefreshCw, Lightbulb, Brain, Heart, Sunrise, Trophy, Star } from "lucide-react";
import fiveAMClubImage from "@/assets/trainings/5am-club-main.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const FiveAMClub = () => {
  return (
    <Layout>
      <SEO 
        title="World Class Morning Rituals - 5 AM Club | DR.ADI Academy"
        description={`Win your day before it begins. Learn the world-class 5 AM morning rituals in ${SITE_CONFIG.location.full} to build discipline, focus, and daily momentum.`}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">World Class Morning Rituals - 5 AM Club</span>
        </nav>
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            World Class Morning Rituals - 5 AM Club
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {SITE_CONFIG.location.full}
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
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              Win your day before it begins. Transform your life through the power of world-class morning rituals and join the elite 5 AM Club
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-sm py-1 px-3">Jack Canfield Methods</Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">Daily Discipline</Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">Morning Rituals</Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">Success Habits</Badge>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={fiveAMClubImage} 
              alt="5 AM Club World Class Morning Rituals - Transform your life through disciplined morning routines" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Win Your Day Before It Begins</CardTitle>
                <CardDescription>
                  Master the morning rituals of world-class achievers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  It is only through daily discipline that one can achieve great things. Make daily 
                  rituals part of your life and a way of living. You can experience to see miracles 
                  in your life and life becomes much more seamless, meaningful and fun.
                </p>
                <p className="text-foreground/80 mb-4">
                  Master key to success is in your morning rituals and we also call this as 5 a.m club. 
                  If you win first one hour of your day then you also win rest of your day that means 
                  next 23 hours by design, so you also can win your week, your month and your year, 
                  means your life.
                </p>
                <p className="text-foreground/80 mb-6">
                  Step by step procedure, we provide as part of this training are given by the 
                  international best success coach Jack Canfield, will certainly help to manage 
                  first one hour of your day for guaranteed success, upon consistent practice.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact?training=5%20AM%20Club">
                    <Button variant="cta" size="lg" asChild>
                      <span>
                        <Mail className="h-4 w-4 mr-2" />
                        Mail us to Register
                      </span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What is 5 AM Club Explanation */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/20 border-0 shadow-md">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What is the 5 AM Club?</h2>
                  <p className="mb-3">
                    The 5 AM Club is a revolutionary morning routine protocol that transforms ordinary people into extraordinary achievers by mastering the first hour of each day.
                  </p>
                  <p className="mb-3">
                    Based on the teachings of world-renowned success coach Jack Canfield and backed by neuroscience research, this program teaches you how to leverage the quiet pre-dawn hours to build unstoppable momentum for your entire life.
                  </p>
                  <p>
                    When you win the first hour, you win the next 23 hours by design. Win your days, and you win your weeks, months, years, and ultimately your entire life.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-48 bg-gradient-to-b from-orange-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <Sunrise className="h-24 w-24 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Power of 5 AM */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">The Magic of 5 AM</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-md transition-shadow bg-gradient-to-b from-primary/5 to-primary/10">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Win 1 Hour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Master the first hour and you control the remaining 23 hours of your day.</p>
                <p className="text-sm text-muted-foreground">
                  Leverage the quiet morning hours when your willpower is strongest and distractions are minimal.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow bg-gradient-to-b from-primary/10 to-primary/20">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Win Your Week</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Consistent morning wins compound to create extraordinary weeks of achievement.</p>
                <p className="text-sm text-muted-foreground">
                  Build momentum that carries you through challenges and keeps you focused on your goals.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow bg-gradient-to-b from-primary/5 to-primary/10">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Win Your Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Transform your months and years by mastering your morning routine.</p>
                <p className="text-sm text-muted-foreground">
                  Create a life of purpose, productivity, and profound fulfillment through disciplined mornings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Morning Ritual Components */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">World-Class Morning Ritual Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Mindfulness</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Meditation and mindfulness practices to center your mind and set positive intentions for the day ahead.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Physical Fitness</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Exercise routines that energize your body and boost mental clarity for optimal performance.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Reading and skill development to continuously grow and expand your capabilities and knowledge.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Strategic planning and goal setting to ensure your day is purposeful and highly productive.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Transform Your Life</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Seamless Living</h3>
                <p>Experience a life that flows effortlessly with purpose and direction, making every day productive and meaningful.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Meaningful Existence</h3>
                <p>Create deeper meaning and fulfillment in everything you do, connecting your daily actions to your life's purpose.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Joyful Success</h3>
                <p>Achieve your goals while maintaining fun and enjoyment in the process, creating sustainable success habits.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Jack Canfield Method */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">The Jack Canfield Method</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-secondary/5 to-secondary/15">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  Proven Success Formula
                </h3>
                <p className="mb-4">
                  Learn the exact step-by-step procedure used by international success coach Jack Canfield, 
                  co-creator of the Chicken Soup for the Soul series and featured in "The Secret."
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Scientifically-backed morning protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Guaranteed success through consistent practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Time-tested strategies from world-class achievers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-primary/5 to-primary/15">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Daily Discipline Framework
                </h3>
                <p className="mb-4">
                  Master the art of daily discipline that separates high achievers from everyone else. 
                  Transform your morning hour into a powerful foundation for extraordinary results.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Build unshakeable morning habits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Develop mental resilience and focus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Create momentum that lasts all day</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Training Details */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Training Details</h2>
          <Card className="border-0 bg-secondary/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Schedule & Format
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Duration: 1-day intensive workshop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Early morning start to experience the 5 AM ritual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>21-day implementation challenge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Follow-up support and accountability</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-4 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    What You'll Master
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>The science behind early rising</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Jack Canfield's morning success formula</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Overcoming resistance and building consistency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Designing your personalized morning ritual</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Program Includes
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Complete 5 AM Club workbook</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Morning ritual planning templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Guided meditation audio resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Progress tracking tools</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Who Should Join
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Ambitious professionals and entrepreneurs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Anyone seeking peak performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>People wanting more structure in their lives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Individuals ready for transformational change</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Success Stories from Our 5 AM Club</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-r from-secondary/10 to-secondary/20 border-0">
              <CardContent className="p-8">
                <div className="text-center">
                  <blockquote className="italic text-lg mb-4">
                    "Joining the 5 AM Club transformed my entire life. I'm more productive, focused, and have achieved goals I never thought possible. The morning rituals have become my secret weapon for success."
                  </blockquote>
                  <p className="font-semibold">— Rajesh P., CEO</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-primary/10 to-primary/20 border-0">
              <CardContent className="p-8">
                <div className="text-center">
                  <blockquote className="italic text-lg mb-4">
                    "I was skeptical about waking up at 5 AM, but the systematic approach taught in this training made it effortless. Now I can't imagine starting my day any other way. It's been life-changing."
                  </blockquote>
                  <p className="font-semibold">— Meera S., Marketing Director</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Course Keywords</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">World Class Morning Rituals</Badge>
            <Badge variant="secondary">5 AM Club</Badge>
            <Badge variant="secondary">Morning Routine</Badge>
            <Badge variant="secondary">Daily Discipline</Badge>
            <Badge variant="secondary">Jack Canfield Methods</Badge>
            <Badge variant="secondary">Success Habits</Badge>
            <Badge variant="secondary">Early Rising</Badge>
            <Badge variant="secondary">Morning Routine Coaching</Badge>
            <Badge variant="secondary">Art of Beginning the Day</Badge>
            <Badge variant="secondary">Life Transformation</Badge>
            <Badge variant="secondary">Peak Performance</Badge>
            <Badge variant="secondary">Miyapur</Badge>
            <Badge variant="secondary">Hyderabad</Badge>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Join the 5 AM Club?</h3>
          <p className="text-lg mb-6">
            Start your transformation with world-class morning rituals that guarantee success
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <h4 className="font-bold mb-2">What You'll Experience</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Jack Canfield's proven morning success formula</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Personalized morning ritual design</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>21-day implementation challenge</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Life-changing daily discipline framework</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-bold mb-2">Perfect For</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Business leaders and entrepreneurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Professionals seeking peak performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Anyone wanting more structure and success</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>People ready for transformational change</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?training=5%20AM%20Club">
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

export default FiveAMClub;