import Layout from "@/components/Layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";
import habitMasteryImage from "@/assets/trainings/habit-mastery.jpg";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

const HabitMastery = () => {
  return (
    <Layout>
      <SEO 
        title="Habit Mastery Training | DR.ADI Academy"
        description={`Build habits that build success. Habit Mastery training in ${SITE_CONFIG.location.full} with science-backed methods for forming good habits, tiny habits, atomic habits, and stopping procrastination.`}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/trainings" className="text-muted-foreground hover:text-primary">Trainings We Offer</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Habit Mastery</span>
        </nav>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Habit Mastery Training</h1>
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
          <img src={habitMasteryImage} alt="Habit Mastery Training" className="w-full h-64 object-cover rounded-lg" loading="lazy" decoding="async" />
          <Card>
            <CardHeader>
              <CardTitle>Build Habits That Build Success</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                All successful leaders have good habits as part of their daily routine, so in short you want to become successful you need to have good habits. We should know what is a habit, how habit formation will happen, how mind is associated with habit formation and what are the different steps we need to take for making the habits and how to break the bad habits.
              </p>
              <p className="mb-4">
                In this habit mastery course you get proven scientific tools and techniques which will certainly help you to understand all these topics in detail and this will help you to make any habit of your choice, needed for your life.
              </p>
              <p className="mb-4">
                Research shows that about 40% of our daily actions are habits, not conscious decisions. By mastering your habits, you can automate success and redirect your focus to higher-level challenges. If this rings true for you, you are in the right place to transform your habits and your life.
              </p>
              <Link to="/contact?training=Habit%20Mastery">
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
              "Habit Mastery",
              "Forming Good Habits",
              "Tiny Habits",
              "Stop Procrastinating",
              "Atomic Habits",
              "Successful Life",
              "Life Coaching",
              "Human Potential"
            ].map((keyword, index) => (
              <Badge key={index} variant="secondary">{keyword}</Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Master Your Habits?</h3>
          <p className="text-lg mb-6">Transform your life by building the habits that successful leaders use every day!</p>
          <div className="space-x-4">
            <Link to="/contact?training=Habit%20Mastery">
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

export default HabitMastery;