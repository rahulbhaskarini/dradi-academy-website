import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Brain, Target, Zap, Lightbulb } from "lucide-react";
import mindPowerImage from "@/assets/trainings/mind-power-unlimited-original.jpg";
import mindPowerMainImage from "@/assets/trainings/mind-power-main.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const MindPower = () => {
  return (
    <Layout>
      <SEO 
        title="Mind Power Unlimited - MPU | DR.ADI Academy"
        description="Unlock the unlimited potential of your mind. Mind Power Unlimited training in Miyapur, Hyderabad to raise vibration, connect with universal power, and achieve goals."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Mind Power Unlimited - MPU</span>
        </nav>
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Mind Power Unlimited - MPU
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
              src={mindPowerImage} 
              alt="Mind Power Unlimited training illustration showing a person accessing universal mental power" 
              className="w-full h-auto object-contain rounded-lg shadow-lg" 
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Unleash Your Unlimited Potential</CardTitle>
                <CardDescription>
                  Connect with universal abundance and vibrate at higher frequencies
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
                <p className="text-foreground/80 mb-4">
                  Your subconscious mind has the ability to connect you with the universal powerhouse, 
                  if you operate with purpose in life with clear intent and clarity. Practice the 
                  goal achievement processes to face the obstacles and challenges you come across, 
                  by doing all this, you will become a compulsive goal achiever.
                </p>
                <p className="text-foreground/80 mb-6">
                  If the above rings true for you and you're looking for the right platform/training
                  institute, you are there right now - in this movement, please join with us and practice 
                  about the "Tools and techniques of mind power" and bring greatness in your life by 
                  transforming yourself. You are Unstoppable.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact?training=Mind%20Power%20Unlimited%20-%20MPU">
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

        {/* Mind Power Explanation */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/20 border-0 shadow-md">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">What is Mind Power?</h2>
                  <p className="mb-3">
                    Mind Power Unlimited teaches you to harness the infinite potential of your subconscious mind. Your mind is connected to the universal source of power and abundance, but most people never learn to access this connection properly.
                  </p>
                  <p>
                    Through specific techniques and practices, you'll learn to raise your vibrational frequency, overcome limiting beliefs, and tap into your unlimited potential to create the life you truly desire.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={mindPowerMainImage} 
                    alt="Visualization of mind power and universal connection" 
                    className="rounded-lg shadow-lg max-w-full h-auto" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Concepts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Core Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Universal Connection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn to connect with the universal powerhouse and tap into infinite abundance.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Higher Vibrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Raise your vibrational frequency to attract success and abundance naturally.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Self Esteem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Develop unshakeable confidence and see yourself as capable and resourceful.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Purpose & Clarity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Operate with clear intent and purpose to maximize your mind power potential.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Goal Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master proven processes to overcome obstacles and become a compulsive achiever.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Inspiring Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Take consistent inspired action through your unlimited subconscious mind power.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mind Power Techniques */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Powerful Mind Power Techniques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Vibrational Alignment</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn specific practices to raise and maintain your energetic frequency, allowing you to resonate with higher levels of abundance and success.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Subconscious Reprogramming</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Master techniques to identify and replace limiting beliefs with empowering ones that support your goals and aspirations.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Universal Connection Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover practical ways to strengthen your connection to the universal power source and access infinite wisdom and resources.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Goal Achievement Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn a systematic approach to setting, pursuing, and achieving goals that aligns with universal principles of success.</p>
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
                <CardTitle>Identify Blocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover limiting beliefs and negative patterns holding you back.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <CardTitle>Raise Vibration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn techniques to vibrate at higher frequencies consistently.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <CardTitle>Connect Universal</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Establish connection with universal powerhouse for infinite resources.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <CardTitle>Achieve Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Become unstoppable in achieving your dreams and aspirations.</p>
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
                  "The Mind Power Unlimited program transformed my approach to life's challenges. I've developed a deeper connection with my inner abilities and learned to access resources I never knew I had. My confidence has soared, and I'm achieving goals I once thought impossible."
                </blockquote>
                <p className="font-semibold">— Priya S., Business Owner</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Course Keywords</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Mind Power Unlimited</Badge>
            <Badge variant="secondary">Unlimited Subconscious Power</Badge>
            <Badge variant="secondary">Universal Connection</Badge>
            <Badge variant="secondary">Higher Vibration</Badge>
            <Badge variant="secondary">Goal Achievement</Badge>
            <Badge variant="secondary">Compulsive Achiever</Badge>
            <Badge variant="secondary">Positive Thoughts</Badge>
            <Badge variant="secondary">Life Purpose</Badge>
            <Badge variant="secondary">Miyapur</Badge>
            <Badge variant="secondary">Hyderabad</Badge>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-muted/50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Become Unstoppable?</h3>
          <p className="text-muted-foreground mb-6">
            Transform your limiting beliefs and unlock your unlimited mind power
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?training=Mind%20Power%20Unlimited%20-%20MPU">
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

export default MindPower;