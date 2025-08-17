import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import emotionalIntelligenceImage from "@/assets/trainings/emotional-intelligence.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const EmotionalIntelligence = () => {
  return (
    <Layout>
      <SEO 
        title="Emotional Intelligence Coaching | DR.ADI Academy"
        description="Develop high emotional intelligence to become a better leader, speaker, and person in all areas of life. Emotional intelligence coaching in Miyapur, Hyderabad with Dr. ANR for self-awareness, self-control, and leadership excellence."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/other-trainings" className="text-muted-foreground hover:text-primary">Other Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Emotional Intelligence</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Emotional Intelligence Coaching</h1>
          <p className="text-xl text-muted-foreground mb-6">Become a Better Leader, Speaker & Person - Coaching in {SITE_CONFIG.location.full}</p>
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
          <img src={emotionalIntelligenceImage} alt="Emotional Intelligence Coaching Training" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Master Your Emotions for Leadership Success</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Dr. Adi is a trusted Emotional Intelligence coach in India, dedicated to empowering individuals across all age groups and guiding corporates towards higher productivity and harmony. With a focus on self-awareness, stress management, and emotional balance, Dr. Adi helps people unlock their hidden potential.
              </p>
              <p className="mb-4">
                Through engaging workshops, practical tools, and proven strategies, Dr. Adi equips students, professionals, leaders, and teams with the skills to communicate effectively, manage conflicts, and lead with empathy. Whether it's building resilience, boosting confidence, or enhancing workplace culture, Dr. Adi's coaching creates lasting transformation.
              </p>
              <Link to="/contact?training=Emotional%20Intelligence">
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
              "Leadership Excellence",
              "Self-Awareness",
              "Emotional Control",
              "Communication Skills",
              "Stress Management",
              "Empathy",
              "Conflict Management",
              "Personal Growth"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Master Your Emotions?</h3>
          <p className="text-lg mb-6">Join our Emotional Intelligence coaching program and become a better leader today!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Emotional%20Intelligence">
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

export default EmotionalIntelligence;
