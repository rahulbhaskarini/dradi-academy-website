import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import millionaireMindImage from "@/assets/trainings/millionaire-mind-unlimited.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const MillionaireMind = () => {
  return (
    <Layout>
      <SEO 
        title="Millionaire Mind Unlimited | Dr. ADi Academy"
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

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Millionaire Mind Unlimited</h1>
          <p className="text-xl text-muted-foreground mb-6">Coaching in {SITE_CONFIG.location.full}</p>
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
          <img src={millionaireMindImage} alt="Millionaire Mind Unlimited" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Transform Your Relationship with Money</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Millionaire Mind Unlimited is a comprehensive program focused on the wealth area of your life. It helps you understand and remove any subconscious blocks that may be stopping you from attracting more prosperity into your life.
              </p>
              <p className="mb-4">
                This transformational program helps you create a genuine millionaire mindset by addressing deep-rooted beliefs about money, success, and abundance. Through proven techniques, you'll reprogram your subconscious mind to align with wealth creation principles.
              </p>
              <p className="mb-4">
                If you're looking for the right platform to transform your financial destiny, you've found it. Join us and learn the secrets of "Millionaire Mind Unlimited" to become successful by creating an authentic millionaire mindset.
              </p>
              <Link to="/contact?training=Millionaire%20Mind%20Unlimited">
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
              "Millionaire Mind",
              "Wealth Consciousness",
              "Prosperity Mindset",
              "Money Management",
              "Financial Freedom",
              "Abundance Mindset",
              "Success Principles",
              "Wealth Creation"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Create Your Millionaire Mind?</h3>
          <p className="text-lg mb-6">Join our transformational program and unlock your wealth potential today!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Millionaire%20Mind%20Unlimited">
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

export default MillionaireMind;