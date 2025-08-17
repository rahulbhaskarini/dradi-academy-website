import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import corporateImage1 from "@/assets/trainings/corporate-1.png";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const CorporateTraining = () => {
  return (
    <Layout>
      <SEO 
        title="Corporate Training Programs | DR.ADI Academy"
        description="Customized corporate training programs in Miyapur, Hyderabad. We offer professional development training sessions as per corporate needs for leadership, team building, performance enhancement, and employee transformation with Dr. ANR's methodologies."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/other-trainings" className="text-muted-foreground hover:text-primary">Other Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Corporate Training Programs</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Corporate Training Programs</h1>
          <p className="text-xl text-muted-foreground mb-6">Professional Development as Per Corporate Needs - {SITE_CONFIG.location.full}</p>
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
          <img src={corporateImage1} alt="Corporate Training Programs" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Transformational Corporate Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We take up training sessions at corporates as per the needs request. Our corporate training programs are designed to enhance employee performance, build effective teams, and create positive organizational culture.
              </p>
              <p className="mb-4">
                Please reach us with your enquiries for customized corporate training solutions that align with your business objectives and organizational goals.
              </p>
              <Link to="/contact?training=Corporate%20Training%20Programs">
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
              "Leadership",
              "Team Building",
              "Professional Development",
              "Performance Enhancement",
              "Corporate Training",
              "Employee Development",
              "Organizational Culture",
              "Business Excellence"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
          <p className="text-lg mb-6">Join our corporate training programs and enhance your team's performance today!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Corporate%20Training%20Programs">
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

export default CorporateTraining;
