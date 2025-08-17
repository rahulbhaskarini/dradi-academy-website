import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import fiveAMClubImage from "@/assets/trainings/5am-club-main.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const FiveAMClub = () => {
  return (
    <Layout>
      <SEO 
        title="World Class Morning Rituals - 5 AM Club | Dr.Adi Academy"
        description={`Win your day before it begins. Learn the world-class 5 AM morning rituals in ${SITE_CONFIG.location.full} to build discipline, focus, and daily momentum.`}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">World Class Morning Rituals - 5 AM Club</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">World Class Morning Rituals - 5 AM Club</h1>
          <p className="text-xl text-muted-foreground mb-6">{SITE_CONFIG.location.full}</p>
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
          <img src={fiveAMClubImage} alt="World Class Morning Rituals - 5 AM Club" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Win Your Day Before It Begins</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                It is only through daily discipline that one can achieve great things. Make daily rituals part of your life and a way of living. You can experience to see miracles in your life and life becomes much more seamless, meaningful and fun.
              </p>
              <p className="mb-4">
                Master key to success is in your morning rituals and we also call this as 5 a.m club. If you win first one hour of your day then you also win rest of your day that means next 23 hours by design, so you also can win your week, your month and your year, means your life.
              </p>
              <p className="mb-4">
                Step by step procedure, we provide as part of this training are given by the international best success coach Jack Canfield, will certainly help to manage first one hour of your day for guaranteed success, upon consistent practice.
              </p>
              <Link to="/contact?training=5%20AM%20Club">
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
              "5 AM Club",
              "Morning Rituals",
              "Jack Canfield Methods",
              "Daily Discipline",
              "Success Habits",
              "World Class Morning",
              "Life Transformation",
              "Peak Performance"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Join the 5 AM Club?</h3>
          <p className="text-lg mb-6">Transform your life through world-class morning rituals and win your day before it begins!</p>
          <div className="space-x-4">
            <Link to="/contact?training=5%20AM%20Club">
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

export default FiveAMClub;
