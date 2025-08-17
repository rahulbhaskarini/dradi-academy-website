import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import nlpImage from "@/assets/trainings/nlp-4-orig.webp";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const NLP = () => {
  return (
    <Layout>
      <SEO 
        title="Neuro Linguistic Programming - NLP | DR.ADI Academy"
        description="NLP training in Miyapur, Hyderabad to reprogram limiting beliefs, master communication, and achieve peak performance in health, wealth, happiness, business, and relationships."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Neuro Linguistic Programming - NLP</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Neuro Linguistic Programming - NLP</h1>
          <p className="text-xl text-muted-foreground mb-6">Coaching in Miyapur, Hyderabad</p>
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
          <img src={nlpImage} alt="Neuro Linguistic Programming - NLP" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Master Your Mind with NLP</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                NLP (Neuro Linguistic Programming) is a powerful scientific method to achieve peak performance in every area of life — health, wealth, happiness, business, and relationships.
              </p>
              <p className="mb-4">
                Our mind often deletes, distorts, and generalizes information before we communicate. In doing so, we create limiting meanings and unknowingly invite problems into our lives.
              </p>
              <p className="mb-4">
                As the saying goes, "The map is not the territory." Language does not always reflect reality. NLP tools and techniques help you uncover the default mental patterns you've been running for years and empower you to rewire them with new, resourceful patterns. This transformation unlocks abundance in health, wealth, success, happiness, love, energy, focus, and confidence.
              </p>
              <p className="mb-4">
                If the above rings true for you and you're looking for the right platform/training institute, you are there right now - in this movement, please join with us and learn about "NLP - Tools and Techniques" and bring greatness in your life, by transforming yourself.
              </p>
              <Link to="/contact?training=Neuro%20Linguistic%20Programming%20-%20NLP">
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
              "Neuro Linguistic Programming",
              "NLP Coaching",
              "Personal Wellbeing",
              "Neuro Semantics",
              "NLP Training",
              "Sales Mastery",
              "Behavioral Training",
              "Communication Skills"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Transform Your Life with NLP</h3>
          <p className="text-lg mb-6">Join our comprehensive NLP training program and unlock your unlimited potential!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Neuro%20Linguistic%20Programming%20-%20NLP">
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

export default NLP;