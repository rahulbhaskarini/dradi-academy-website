import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
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

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Love Yourself & Heal Your Life</h1>
          <p className="text-xl text-muted-foreground mb-6">For Joyful, Happy & Healthier Life - Based on Louise Hay's Method in {SITE_CONFIG.location.full}</p>
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
          <img src={loveYourselfImage} alt="Love Yourself & Heal Your Life Training" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Transform Your Life with Self-Love & Healing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Love yourself and heal your Life is a transformational workshop based on international bestselling author Louise Hay's book "You Can Heal Your Life". This powerful program helps you break through unwanted neural patterns and empowers you to live a happy, healthy, and joyful life.
              </p>
              <p className="mb-4">
                If you're looking for the right platform to transform your life through self-love and healing, you've found it. Join our movement and discover how to love yourself and heal your life for true joy and fulfillment.
              </p>
              <Link to="/contact?training=Love%20Yourself%20%26%20Heal%20Your%20Life">
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
              "Self-Love",
              "Emotional Healing",
              "Louise Hay Method",
              "Joyful Living",
              "Life Transformation",
              "Neural Patterns",
              "Happiness",
              "Personal Growth"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Love Yourself & Heal Your Life?</h3>
          <p className="text-lg mb-6">Join our transformational workshop based on Louise Hay's method and live joyfully today!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Love%20Yourself%20%26%20Heal%20Your%20Life">
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

export default LoveYourselfHealYourself;
