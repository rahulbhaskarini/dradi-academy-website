import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import personalCoachingImage from "@/assets/trainings/personal-coaching.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const PersonalCoaching = () => {
  return (
    <Layout>
      <SEO 
        title="Personal Coaching | One-on-One Life Coaching | DR.ADI Academy"
        description="Personalized one-on-one coaching in Miyapur, Hyderabad. Remove roadblocks, find clear paths to success, and achieve your life purpose with Dr. ANR. Get guidance, inspiration, and consistent re-calibration until you succeed."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/other-trainings" className="text-muted-foreground hover:text-primary">Other Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Personal Coaching</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Personal Coaching</h1>
          <p className="text-xl text-muted-foreground mb-6">Remove Roadblocks & Achieve Your Life Purpose - {SITE_CONFIG.location.full}</p>
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
          <img src={personalCoachingImage} alt="Personal Coaching Training" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Overcome Roadblocks & Achieve Your Life Purpose</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                You are doing good in your life as per your knowledge and resources you have today, but you have unlimited power and unlimited abilities to manifest anything in your life much bigger than what you have today.
              </p>
              <p className="mb-4">
                Many of us know this but we face roadblocks and we don't know the clear path to remove the roadblocks and move forward in life. Personal coaching will help you to sit with your coach/mentor and get the guidance, inspiration so that you find the new path and consistent re-calibration till you achieve your life purpose.
              </p>
              <Link to="/contact?training=Personal%20Coaching">
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
              "One-on-One Coaching",
              "Life Purpose",
              "Remove Roadblocks",
              "Personal Growth",
              "Guidance",
              "Re-calibration",
              "Achievement",
              "Life Transformation"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Remove Your Roadblocks?</h3>
          <p className="text-lg mb-6">Join our personal coaching program and achieve your life purpose today!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Personal%20Coaching">
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

export default PersonalCoaching;
