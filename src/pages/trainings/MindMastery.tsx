import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Brain, Target, Zap, Lightbulb, Sparkles, Award } from "lucide-react";
import mindMasteryImage from "@/assets/trainings/mind-mastery-original.jpg";
import mindPowerMainImage from "@/assets/trainings/mind-power-main.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const MindMastery = () => {
  return (
    <Layout>
      <SEO 
        title="Mind Mastery Coaching | DR.ADI Academy"
        description="Master your mind and unlock your unlimited potential. Mind Mastery coaching in Miyapur, Hyderabad for connecting with universal power, raising vibration, and achieving your life goals."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Mind Mastery</span>
        </nav>
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Mind Mastery Coaching
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Miyapur, Hyderabad
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
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img 
              src={mindMasteryImage} 
              alt="Mind Mastery training program showing mind power and higher thinking concepts" 
              className="w-full h-auto object-contain rounded-lg shadow-lg" 
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Master Your Mind, Master Your Life</CardTitle>
                <CardDescription>
                  Advanced techniques for complete mental mastery and abundance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  You have unlimited power as universal nature is abundance. But in case you are 
                  unable to experience the abundance in your life, then it is just because of your 
                  limiting beliefs and negative inner voice, also because, you are not able to 
                  connect with the universal power house.
                </p>
                <p className="text-foreground/80 mb-4">
                  Everything in nature is vibration and energy, if you vibrate at higher frequency 
                  then you can able to see your self with higher self esteem, resourcefulness, 
                  taking inspiring actions through your unlimited subconscious mind power.
                </p>
                <p className="text-foreground/80 mb-6">
                  Your subconscious mind has the ability to connect you with the universal powerhouse, 
                  if you operate with purpose in life with clear intent and clarity. Practice the 
                  goal achievement processes to face the obstacles and challenges you come across, 
                  by doing all this, you will become a compulsive goal achiever. You are Unstoppable.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact?training=Mind%20Mastery">
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

        {/* Mind Mastery Explanation */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/20 border-0 shadow-md">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What is Mind Mastery?</h2>
                  <p className="mb-3">
                    Mind Mastery is the art and science of gaining complete control over your thoughts, emotions, and actions to direct them toward achieving your goals and life purpose.
                  </p>
                  <p>
                    Through specific techniques and practices, you'll learn to eliminate limiting beliefs, connect with universal power sources, and elevate your mental vibration to attract success, abundance, and fulfillment.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={mindPowerMainImage} 
                    alt="Visualization of mind mastery and universal connection" 
                    className="rounded-lg shadow-lg max-w-full h-auto" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mastery Areas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Areas of Mastery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Mental Clarity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Develop crystal clear thinking and decision-making capabilities.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Emotional Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master your emotions and respond rather than react to situations.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Focus & Concentration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Develop laser-sharp focus and sustained concentration abilities.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Belief Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Transform limiting beliefs into empowering thought patterns.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Intuitive Wisdom
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access your inner wisdom and make decisions from higher consciousness.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Goal Manifestation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master the art of turning thoughts into tangible reality.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Advanced Techniques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Advanced Mind Mastery Techniques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Positive Mental Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn advanced programming techniques to install positive beliefs and thoughts that automatically guide you toward success and abundance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Understanding Mind Power</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Gain deep insights into how your mind works and how to leverage its full potential for achieving extraordinary results in all areas of life.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Visualization Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master advanced visualization techniques that create powerful mental blueprints for success and accelerate goal achievement.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Energy Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn to manage and direct your mental and emotional energy for maximum productivity and life satisfaction.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Transformation Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Your Transformation Journey</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <CardTitle>Identify Limiting Beliefs</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover and understand the beliefs that have been holding you back from your full potential.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <CardTitle>Mental Reprogramming</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Replace negative patterns with empowering beliefs and thought structures.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <CardTitle>Vibrational Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Raise your frequency and align with the universal sources of power and abundance.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <CardTitle>Goal Achievement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Become a compulsive achiever by overcoming obstacles and challenges with ease.</p>
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
                  "The Mind Mastery program transformed my entire approach to life's challenges. I've learned to take control of my thoughts and emotions, rather than being controlled by them. My productivity has doubled, and I feel a sense of purpose and clarity I never thought possible."
                </blockquote>
                <p className="font-semibold">— Ravi K., Entrepreneur</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Course Keywords</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Mind Mastery</Badge>
            <Badge variant="secondary">Understanding Mind Power</Badge>
            <Badge variant="secondary">Positive Thoughts and Actions</Badge>
            <Badge variant="secondary">Full Potential</Badge>
            <Badge variant="secondary">Universal Power House</Badge>
            <Badge variant="secondary">Goal Achievement</Badge>
            <Badge variant="secondary">Life Purpose</Badge>
            <Badge variant="secondary">Higher Vibration</Badge>
            <Badge variant="secondary">Miyapur</Badge>
            <Badge variant="secondary">Hyderabad</Badge>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Master Your Mind?</h3>
          <p className="text-lg mb-6">
            Join our transformative Mind Mastery program and unlock your unlimited potential!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?training=Mind%20Mastery">
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

export default MindMastery;