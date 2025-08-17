import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import schoolsImage1 from "@/assets/trainings/schools-1.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const SchoolCommunityPrograms = () => {
  return (
    <Layout>
      <SEO 
        title="Programs for Schools & Communities | DR.ADI Academy"
        description="Customized transformational programs for schools and communities in Miyapur, Hyderabad. We offer training sessions as per local needs for student development, teacher training, and community empowerment with Dr. ANR's proven methodologies."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/other-trainings" className="text-muted-foreground hover:text-primary">Other Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Programs for Schools & Communities</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Programs for Schools & Communities</h1>
          <p className="text-xl text-muted-foreground mb-6">Customized Training Sessions as Per Local Needs - {SITE_CONFIG.location.full}</p>
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
          <img src={schoolsImage1} alt="Programs for Schools & Communities Training" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Transformational Programs for Educational Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                We take up training sessions as needed at schools and communities as per the local needs. Our programs are designed to enhance educational outcomes, develop life skills, and create positive transformation in learning environments.
              </p>
              <p className="mb-4">
                Please reach us with your enquiries for customized programs that meet your specific institutional and community requirements.
              </p>
              <Link to="/contact?training=Programs%20for%20Schools%20&%20Communities">
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
              "Education",
              "Community Development",
              "Youth Empowerment",
              "Teacher Training",
              "Student Development",
              "Life Skills",
              "Educational Excellence",
              "Community Programs"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Community?</h3>
          <p className="text-lg mb-6">Join our school and community programs for educational excellence today!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Programs%20for%20Schools%20&%20Communities">
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

export default SchoolCommunityPrograms;
