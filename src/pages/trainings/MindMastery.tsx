import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import mindMasteryImage from "@/assets/trainings/mind-mastery-original.jpg";
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Mind Mastery Coaching</h1>
          <p className="text-xl text-muted-foreground mb-6">Miyapur, Hyderabad</p>
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
          <img src={mindMasteryImage} alt="Mind Mastery Coaching" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Master Your Mind, Master Your Life</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                You have unlimited power as universal nature is abundance. But in case you are unable to experience the abundance in your life, then it is just because of your limiting beliefs and negative inner voice, also because, you are not able to connect with the universal power house.
              </p>
              <p className="mb-4">
                Everything in nature is vibration and energy, if you vibrate at higher frequency then you can able to see your self with higher self esteem, resourcefulness, taking inspiring actions through your unlimited subconscious mind power.
              </p>
              <p className="mb-4">
                Your subconscious mind has the ability to connect you with the universal powerhouse, if you operate with purpose in life with clear intent and clarity. Practice the goal achievement processes to face the obstacles and challenges you come across, by doing all this, you will become a compulsive goal achiever. You are Unstoppable.
              </p>
              <Link to="/contact?training=Mind%20Mastery">
                <Button variant="cta" size="lg" asChild>
                  <span>
                    <Phone className="h-4 w-4 mr-2" />
                    Contact us for Registrations
                  </span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Course Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Mind Mastery",
              "Understanding Mind Power",
              "Positive Thoughts and Actions",
              "Full Potential",
              "Universal Power House",
              "Goal Achievement",
              "Life Purpose",
              "Higher Vibration"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Master Your Mind?</h3>
          <p className="text-lg mb-6">Join our transformative Mind Mastery program and unlock your unlimited potential!</p>
          <div className="space-x-4">
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