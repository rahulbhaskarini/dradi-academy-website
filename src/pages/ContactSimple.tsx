import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
import { SITE_CONFIG, getPhoneLink, getDisplayPhone, getYouTubeUrl } from "@/lib/config";

const ContactSimple = () => {
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

    // Simple alert instead of toast for debugging
    if (!formData.name || !formData.email || !formData.phone || !formData.comment) {
      alert("Please fill in all required fields.");
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
      
      alert("Opening your email client...");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        comment: ""
      });
    } catch (error) {
      alert("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us - Dr.Adi Academy"
        description="Get in touch with Dr.Adi Academy for life coaching and personal development training. Contact us for program inquiries, consultations, and enrollment information."
      />
      
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Contact Us</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your life? Contact us for personalized guidance, program inquiries, or to schedule your free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Message *</Label>
                    <Textarea
                      id="comment"
                      placeholder="Tell us about your goals, questions, or which training program interests you..."
                      className="min-h-[120px]"
                      value={formData.comment}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">Contact Information</CardTitle>
                  <p className="text-muted-foreground">
                    Get in touch with us through any of these channels.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a 
                        href={getPhoneLink()}
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {getDisplayPhone()}
                      </a>
                      <p className="text-sm text-muted-foreground">Mon-Sat, 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">dradiacademy@gmail.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Miyapur, Hyderabad</p>
                      <p className="text-muted-foreground">Telangana, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full" variant="outline">
                    <a href={getPhoneLink()}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  
                  <Button asChild className="w-full" variant="outline">
                    <a 
                      href={`https://wa.me/${SITE_CONFIG.phone.replace(/\D/g, '')}?text=Hi! I'm interested in Dr.Adi Academy training programs.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactSimple;
