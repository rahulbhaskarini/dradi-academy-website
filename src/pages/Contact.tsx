import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
  ArrowRight,
  Home
} from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone, getYouTubeUrl, getTelegramUrl } from "@/lib/config";

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const preselectedTraining = params.get("training") || "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.comment) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent("Contact Form Submission - Dr.Adi Academy");
      const body = encodeURIComponent(`
Name: ${formData.name}
Phone Number: ${formData.phone}
Email: ${formData.email}
Comment: ${formData.comment}
      `);
      
      window.location.href = `mailto:dradiacademy@gmail.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Opening Email Client",
        description: "Your default email client will open with the filled form.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        comment: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us | Dr.Adi Academy"
        description="Contact Dr.Adi Academy in Miyapur, Hyderabad for transformational training programs. Get in touch for Law of Attraction, NLP, Mind Power, Personal Coaching, and other life-changing courses. Call +91 89785 44550 or email dradiacademy@gmail.com"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-foreground">Contact Us</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Contact Us</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Ready to transform your life? Get in touch with us to start your journey towards personal and professional excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-sm py-1 px-3">Personal Consultation</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Training Programs</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Corporate Training</Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">Life Coaching</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Fill Your Details</CardTitle>
                <p className="text-muted-foreground">* Indicates Required Field</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label htmlFor="comment" className="text-sm font-medium text-foreground">
                      Comment *
                    </Label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={5}
                      placeholder="Tell us about your interest, goals, or questions regarding our training programs..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone/WhatsApp</p>
                    <a 
                      href={getPhoneLink()} 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      {getDisplayPhone()}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href="mailto:dradiacademy@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      dradiacademy@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      Dr.Adi Academy<br />
                      Mathru Sri Nagar, Miyapur<br />
                      Hyderabad, Telangana - 500049<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a href={getYouTubeUrl()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a href={getTelegramUrl()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <FaTelegram className="h-6 w-6" />
                  </a>
                  <a href="https://www.facebook.com/dradiglobalacademy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://twitter.com/dradiglobal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://www.instagram.com/dradiglobalacademy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/adinarayana-reddy-kadapa-70a97015" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-4">Need Immediate Assistance?</h3>
                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <a href={getPhoneLink()}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={`https://wa.me/${SITE_CONFIG.phone.replace(/\D/g, '')}?text=Hi! I'm interested in Dr.Adi Academy training programs.`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Contact Us */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Contact Dr.Adi Academy?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Take the first step towards your transformation. Here's what you can expect when you reach out to us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Free Consultation</h3>
              <p className="text-muted-foreground">
                Get personalized guidance on which training program best suits your goals and needs.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Speak directly with our experts to understand how our methodologies can transform your life.
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <ArrowRight className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Next Steps</h3>
              <p className="text-muted-foreground">
                Get a clear roadmap for your journey with recommended programs and timelines.
              </p>
            </Card>
          </div>
        </section>

        {/* Popular Training Programs */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Popular Training Programs
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Explore our most sought-after transformational programs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Link to="/trainings/law-of-attraction" className="hover:text-primary">
                Law of Attraction - LOA
              </Link>
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Link to="/trainings/nlp" className="hover:text-primary">
                Neuro Linguistic Programming - NLP
              </Link>
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Link to="/trainings/mind-power" className="hover:text-primary">
                Mind Power Unlimited - MPU
              </Link>
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Link to="/other-trainings/emotional-intelligence" className="hover:text-primary">
                Emotional Intelligence
              </Link>
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Link to="/other-trainings/super-student-workshop" className="hover:text-primary">
                Super Student Workshop
              </Link>
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Link to="/other-trainings/personal-coaching" className="hover:text-primary">
                Personal Coaching
              </Link>
            </Badge>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Don't wait for the perfect moment. Take action now and start your journey towards a more fulfilling, successful, and purposeful life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href={getPhoneLink()}>
                <Phone className="mr-2 h-4 w-4" />
                Call {getDisplayPhone()}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:dradiacademy@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;