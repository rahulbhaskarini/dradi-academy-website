import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Target, Zap, ArrowRight, Calendar, RefreshCw, Lightbulb, Brain, Heart, Clock, BookOpen, Minimize2, Gauge, XCircle, ExternalLink } from "lucide-react";
import habitMasteryImage from "@/assets/trainings/habit-mastery.jpg";
import habitsOrigImage from "@/assets/trainings/habits-1-orig.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const HabitMastery = () => {
  return (
    <Layout>
      <SEO 
        title="Habit Mastery Training | DR.ADI Academy"
        description={`Build habits that build success. Habit Mastery training in ${SITE_CONFIG.location.full} with science-backed methods for forming good habits, tiny habits, atomic habits, and stopping procrastination.`}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Habit Mastery</span>
        </nav>
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Habit Mastery Training
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
              Transform your life through the power of habit formation and create automatic routines that drive success
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-sm py-1 px-3">Science-backed methods</Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">Habit formation</Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">Procrastination elimination</Badge>
              <Badge variant="outline" className="text-sm py-1 px-3">Tiny habits</Badge>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <img 
              src={habitMasteryImage} 
              alt="Habit Mastery Training - Building successful habits for life" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
            <img 
              src={habitsOrigImage} 
              alt="Habit formation process - Cue, routine, reward cycle" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Build Habits That Build Success</CardTitle>
                <CardDescription>
                  Master the science of habit formation and transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  All successful leaders have good habits as part of their daily routine, so in short 
                  you want to become successful you need to have good habits. We should know what is 
                  a habit, how habit formation will happen, how mind is associated with habit formation 
                  and what are the different steps we need to take for making the habits and how to 
                  break the bad habits.
                </p>
                <p className="text-foreground/80 mb-4">
                  In this habit mastery course you get proven scientific tools and techniques which 
                  will certainly help you to understand all these topics in detail and this will help 
                  you to make any habit of your choice, needed for your life.
                </p>
                <p className="text-foreground/80 mb-6">
                  Research shows that about 40% of our daily actions are habits, not conscious decisions. 
                  By mastering your habits, you can automate success and redirect your focus to higher-level challenges.
                  If this rings true for you, you are in the right place to transform your habits and your life.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact?training=Habit%20Mastery">
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

        {/* Habit Mastery Explanation */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/20 border-0 shadow-md">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What is Habit Mastery?</h2>
                  <p className="mb-3">
                    Habit Mastery is the science and art of understanding how habits form, why they persist, and how to strategically create positive habits while breaking negative ones.
                  </p>
                  <p className="mb-3">
                    By mastering your habits, you gain control over the automatic behaviors that determine 40% of your daily actions, allowing you to align your unconscious routines with your conscious goals and aspirations.
                  </p>
                  <p>
                    Our training provides you with scientifically-proven techniques from leading researchers and authors in the field of habit formation, such as James Clear, BJ Fogg, and Charles Duhigg.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={habitsOrigImage} 
                    alt="The habit loop showing cue, routine, and reward cycle" 
                    className="rounded-lg shadow-lg max-w-full h-auto" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Habit Science */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">The Science of Habits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>What is a Habit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Understand the neurological and psychological foundations of habit formation.</p>
                <p className="text-sm text-muted-foreground">
                  Explore how habits are formed in the basal ganglia region of the brain and why they become automatic over time.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <RefreshCw className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>How Habits Form</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Learn the step-by-step process of how new habits are created in your brain.</p>
                <p className="text-sm text-muted-foreground">
                  Discover the neuroplasticity principles that allow you to rewire your brain through consistent practice.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Mind & Habits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Discover the powerful connection between your mind and habit formation.</p>
                <p className="text-sm text-muted-foreground">
                  Learn how your beliefs, identity, and values influence which habits stick and which ones fail.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-md transition-shadow">
              <CardHeader>
                <ArrowRight className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Breaking Bad Habits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Master proven techniques to eliminate unwanted habits permanently.</p>
                <p className="text-sm text-muted-foreground">
                  Learn strategies for interrupting habit loops and replacing negative behaviors with positive ones.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Habit Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Types of Success Habits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Health Habits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Regular exercise routines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Healthy eating patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Quality sleep habits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Stress management practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Productivity Habits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Time management systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Goal setting and review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Deep work practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Effective planning routines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Growth Habits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Daily reading and learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Skill development practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Reflection and journaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Networking and relationship building</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Habit Loop */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Master the Habit Loop</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center bg-gradient-to-b from-primary/5 to-primary/10">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <CardTitle>Cue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Identify and design environmental triggers that automatically initiate your desired habits.</p>
                <p className="text-sm text-muted-foreground">
                  Learn to recognize the triggers that prompt your current habits and how to create powerful new cues for positive behavior.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-b from-primary/10 to-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <CardTitle>Routine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Develop the specific behaviors and actions that form the core of your new habit.</p>
                <p className="text-sm text-muted-foreground">
                  Master techniques for breaking down complex behaviors into simple, manageable routines that are easy to implement.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-b from-primary/5 to-primary/10">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <CardTitle>Reward</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">Create meaningful rewards that reinforce the habit and make it stick long-term.</p>
                <p className="text-sm text-muted-foreground">
                  Discover how to design reward systems that leverage your brain's dopamine response to strengthen habit pathways.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scientific Methods */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Proven Scientific Methods</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Minimize2 className="h-5 w-5 text-primary" />
                  Tiny Habits Mastery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn how to start small and build momentum with micro-habits that compound into massive changes over time.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Atomic Habit Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master the 1% better every day principle and create systems that make good habits inevitable.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-primary" />
                  Stop Procrastinating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Eliminate procrastination patterns and replace them with consistent action-taking habits.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-primary" />
                  Habit Stacking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn to link new habits to existing ones for effortless integration into your daily routine.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">What Our Students Say</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-r from-secondary/10 to-secondary/20 border-0">
              <CardContent className="p-8">
                <div className="text-center">
                  <blockquote className="italic text-lg mb-4">
                    "The Habit Mastery training completely transformed my daily routine. I've been able to establish consistent habits that have boosted my productivity and well-being. The scientific approach made it easy to understand why my previous attempts at habit formation had failed."
                  </blockquote>
                  <p className="font-semibold">— Sanjay M., Business Leader</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-primary/10 to-primary/20 border-0">
              <CardContent className="p-8">
                <div className="text-center">
                  <blockquote className="italic text-lg mb-4">
                    "I struggled with procrastination for years until I took the Habit Mastery course. The strategies taught were practical and easy to implement. Within weeks, I had established a morning routine that has completely changed how I approach my day and my work."
                  </blockquote>
                  <p className="font-semibold">— Priya K., Software Engineer</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits of Habit Mastery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Increased Productivity</h3>
                <p>Develop systems that automate your success and eliminate decision fatigue, allowing you to focus your mental energy on what truly matters.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Sustainable Results</h3>
                <p>Create lasting change through small, consistent actions rather than relying on motivation or willpower that inevitably fluctuates.</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Improved Focus</h3>
                <p>Eliminate distractions and build concentration habits that help you achieve deep work and flow states more consistently.</p>
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
                    Schedule
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Duration: 2-day intensive workshop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Weekend sessions available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Follow-up coaching for 30 days</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-4 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    What You'll Learn
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Neuroscience of habit formation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Habit loop identification and modification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Environmental design for habit success</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Identity-based habit formation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Included Materials
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Comprehensive workbook</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Habit tracking tools and templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Digital resources and reference guides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Certificate of completion</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-6 mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Training Approach
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Interactive workshops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Practical exercises and implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Personalized habit plan development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Accountability group formation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Course Keywords</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Habit Mastery</Badge>
            <Badge variant="secondary">Forming Good Habits</Badge>
            <Badge variant="secondary">Tiny Habits</Badge>
            <Badge variant="secondary">Stop Procrastinating</Badge>
            <Badge variant="secondary">Atomic Habits</Badge>
            <Badge variant="secondary">Successful Life</Badge>
            <Badge variant="secondary">Life Coaching</Badge>
            <Badge variant="secondary">Human Potential</Badge>
            <Badge variant="secondary">Habit Loop</Badge>
            <Badge variant="secondary">Habit Formation</Badge>
            <Badge variant="secondary">Habit Science</Badge>
            <Badge variant="secondary">Productivity</Badge>
            <Badge variant="secondary">Behavioral Change</Badge>
            <Badge variant="secondary">Miyapur</Badge>
            <Badge variant="secondary">Hyderabad</Badge>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Master Your Habits?</h3>
          <p className="text-lg mb-6">
            Transform your life by building the habits that successful leaders use every day
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <h4 className="font-bold mb-2">What You'll Get</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Scientifically proven habit formation techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Step-by-step habit building framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Personalized habit strategies for your specific goals</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-bold mb-2">Who Should Attend</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Professionals seeking improved productivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Anyone struggling with maintaining good habits</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Individuals who want to break free from negative habits</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?training=Habit%20Mastery">
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

export default HabitMastery;