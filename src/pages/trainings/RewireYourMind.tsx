import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import mindPowerImage from "@/assets/trainings/mind-power-main.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const RewireYourMind = () => {
  return (
    <Layout>
      <SEO 
        title="Rewire Your Mind | Dr.Adi Academy"
        description="Rewire Your Mind, Recreate Your Life. Discover the science of breaking old patterns and creating a new reality based on Dr. Joe Dispenza's teachings in Miyapur, Hyderabad."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Rewire Your Mind</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Rewire Your Mind, Recreate Your Life</h1>
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
          <img src={mindPowerImage} alt="Rewire Your Mind" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Break Free from Your Past</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Most people live by old habits and emotions, unconsciously repeating their past every day. This training is based on the powerful teachings of Dr. Joe Dispenza. You'll learn how to break free from your limiting thoughts, rewire your brain through meditation and visualization, and start living the life you truly desire.
              </p>
              <p className="mb-4">
                Transform your neural pathways, elevate your emotions, and create a new reality that aligns with your highest potential. It's time to stop being a victim of your unconscious mind and become the conscious creator of your life.
              </p>
              <Link to="/contact?training=Rewire%20Your%20Mind">
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
              "Rewire Your Mind",
              "Dr. Joe Dispenza",
              "Neural Pathways",
              "Meditation",
              "Visualization",
              "Breaking Habits",
              "Unconscious Patterns",
              "Mind-Body Connection"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Rewire Your Mind?</h3>
          <p className="text-lg mb-6">Stop living by your past emotions and start creating your future!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Rewire%20Your%20Mind">
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

export default RewireYourMind;
