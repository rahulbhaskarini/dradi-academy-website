import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import artOfParentingImage from "@/assets/trainings/art-of-parenting.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const ArtOfIdealParenting = () => {
  return (
    <Layout>
      <SEO 
        title="Art of Ideal Parenting | Dr.Adi Academy"
        description="Master the art and science of modern parenting in Miyapur, Hyderabad. Learn evidence-based strategies to build confidence, improve communication, develop self-image, and provide unconditional love with Dr. ANR's proven methodologies."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/other-trainings" className="text-muted-foreground hover:text-primary">Other Trainings</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Art of Ideal Parenting</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Art of Ideal Parenting</h1>
          <p className="text-xl text-muted-foreground mb-6">Master the Art and Science of Modern Parenting - {SITE_CONFIG.location.full}</p>
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
          <img src={artOfParentingImage} alt="Art of Ideal Parenting Training" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Master the Modern Parenting Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Parenting is an art and science. Because of the nuclear family structure and also because both parents are working in most cases, kids become stressful and gaps exist in understanding levels between parents and kids.
              </p>
              <p className="mb-4">
                To come out of this situation, as a parent, you are facing challenges to build confidence, develop self-image, allow freedom to choose, provide unconditional love, and inspire to reach set goals. All the challenges will be discussed in detail and solutions will be provided based on scientific methodologies for better results.
              </p>
              <Link to="/contact?training=Art%20of%20Ideal%20Parenting">
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
              "Parenting Skills",
              "Child Development",
              "Family Harmony",
              "Scientific Methods",
              "Building Confidence",
              "Unconditional Love",
              "Communication Skills",
              "Modern Parenting"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Parenting?</h3>
          <p className="text-lg mb-6">Join our Art of Ideal Parenting program and build stronger family relationships today!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Art%20of%20Ideal%20Parenting">
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

export default ArtOfIdealParenting;
