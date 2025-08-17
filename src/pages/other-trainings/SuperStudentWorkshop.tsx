import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import superStudentImage from "@/assets/trainings/super-student-workshop.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const SuperStudentWorkshop = () => {
  return (
    <Layout>
      <SEO 
        title="Super Student Unlimited Workshop | DR.ADI Academy"
        description="Transform academic performance with Super Student Unlimited Workshop in Miyapur, Hyderabad. Develop learning skills, thinking skills, and relationship skills for higher academic success. Create competent global citizens with Dr. ANR."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/other-trainings" className="text-muted-foreground hover:text-primary">Other Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Super Student Unlimited Workshop</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Super Student Unlimited Workshop</h1>
          <p className="text-xl text-muted-foreground mb-6">Higher Academic Performance & Healthy Life - {SITE_CONFIG.location.full}</p>
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
          <img src={superStudentImage} alt="Super Student Unlimited Workshop Training" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Unlock Your Academic Potential</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Super Student Unlimited Workshop will help students develop better learning skills, thinking skills, and relationship skills, resulting in healthy and happier students with higher academic performance. This comprehensive program is designed to unlock your full academic potential and personal growth.
              </p>
              <p className="mb-4">
                This program helps create competent and capable global citizens who contribute to building a better nation. If you're looking for the right platform to transform your academic journey and personal development, you've found it. Join our movement for higher academic performance and a healthy, successful life.
              </p>
              <Link to="/contact?training=Super%20Student%20Unlimited%20Workshop">
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
              "Learning Skills",
              "Academic Performance",
              "Study Techniques",
              "Global Citizens",
              "Student Development",
              "Thinking Skills",
              "Relationship Skills",
              "Personal Growth"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Become a Super Student?</h3>
          <p className="text-lg mb-6">Join our Super Student Unlimited Workshop and unlock your academic potential today!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Super%20Student%20Unlimited%20Workshop">
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

export default SuperStudentWorkshop;
