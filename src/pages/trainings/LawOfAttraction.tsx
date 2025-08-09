import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import loaImage from "@/assets/trainings/loa-2.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const LawOfAttraction = () => {
  return (
    <Layout>
      <SEO 
        title="Law of Attraction - LOA | DR.ADI Academy"
        description="Master the Law of Attraction in Miyapur, Hyderabad. Learn to raise your vibration, align thoughts and actions, and manifest goals in career, relationships, health, and spirituality."
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Law of Attraction - LOA</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Mastering 'Law of Attraction' - LOA</h1>
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
          <img src={loaImage} alt="Law of Attraction Training" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Manifest Your Dreams with LOA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Your thoughts have the power to manifest your life. In universe everything is vibration, so increasing your vibration of thoughts, words, feelings, beliefs and actions- will allow you to experience, your connection with universal power house then you can manifest whatever you want in your life in areas like career/business, relationship, health/appearance, spiritual journey and contribution.
              </p>
              <p className="mb-4">
                You can create whatever you thought-off in your life. If the above, rings true for you and looking for right platform/training institute, you are there right now - in this movement, please join with us and learn about "Mastering law of attraction" and bring greatness in your life by transforming your self.
              </p>
              <Link to="/contact?training=Law%20of%20Attraction%20-%20LOA">
                <Button variant="cta" size="lg" asChild>
                  <span>
                    <Mail className="h-4 w-4 mr-2" />
                    Mail us to register
                  </span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Key Areas of Transformation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Key Areas of Transformation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Career & Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Attract success and abundance in your professional life through focused intention and aligned action.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Manifest meaningful connections and strengthen existing relationships through positive energy alignment.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Create vibrant health and well-being by aligning your thoughts with your body's natural healing power.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Keywords & Tags */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Course Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Law of Attraction",
              "Manifestation",
              "Universal Power",
              "Vibration",
              "Energy Alignment",
              "Goal Achievement",
              "Positive Thinking",
              "Life Transformation"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
          <p className="text-lg mb-6">Join our Law of Attraction coaching program and start manifesting your dreams today!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Law%20of%20Attraction%20-%20LOA">
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

export default LawOfAttraction;