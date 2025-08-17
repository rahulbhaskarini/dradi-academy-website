import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import scmImage from "@/assets/trainings/scm-main.png";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const SubconsciousMind = () => {
  return (
    <Layout>
      <SEO 
        title="The Power of Subconscious Mind - SCM | DR.ADI Academy"
        description="Access the unlimited power of your subconscious mind in Miyapur, Hyderabad. Learn techniques to program your mind and achieve 100% results."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">The Power of Subconscious Mind - SCM</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">The Power of Subconscious Mind - SCM</h1>
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
          <img src={scmImage} alt="Subconscious Mind Training" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Unlock Your Subconscious Power</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Conscious mind is logical whereas subconscious mind is creative. Conscious mind is goal setter where subconscious mind is goal getter. Conscious mind has limited power whereas subconscious mind has unlimited power.
              </p>
              <p className="mb-4">
                Whatever your inner voice speaks that become bigger and bigger in life, in case you focus on problems, SCM will bring bigger problems in front of you because it doesn't know what is good or what is bad, it only gives whatever you ask.
              </p>
              <p className="mb-4">
                We are not unable to achieve 100% results because we do things at conscious mind level, but to get 100% results we have to make habit of doing things at subconscious level, like how you drive vehicle or how you swim.
              </p>
              <Link to="/contact?training=Power%20of%20Subconscious%20Mind%20-%20SCM">
                <Button variant="cta" size="lg" asChild>
                  <span>
                    <Phone className="h-4 w-4 mr-2" />
                    CONTACT US FOR REGISTRATIONS
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
              "Subconscious Mind",
              "SCM Coaching",
              "Mind Power",
              "Goal Achievement",
              "Co-creation",
              "Inner Voice",
              "Unlimited Power",
              "Mental Programming"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Harness Your Subconscious Power</h3>
          <p className="text-lg mb-6">Join our subconscious mind training and start achieving 100% results in your life!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Power%20of%20Subconscious%20Mind%20-%20SCM">
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

export default SubconsciousMind;