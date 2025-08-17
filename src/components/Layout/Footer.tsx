import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Youtube, MessageCircle, Heart, Instagram, Linkedin, GraduationCap } from "lucide-react";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone, getYouTubeUrl, getTelegramUrl } from "@/lib/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Dr. ADi", href: "/my-story" },
    { name: "Training Programs", href: "/trainings" },
    { name: "Other Services", href: "/other-trainings" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const popularPrograms = [
    { name: "NLP Master Practitioner", href: "/trainings/nlp" },
    { name: "Law of Attraction", href: "/trainings/law-of-attraction" },
    { name: "Emotional Intelligence", href: "/other-trainings/emotional-intelligence" },
    { name: "Millionaire Mind", href: "/trainings/millionaire-mind" },
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/60 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative h-24 w-24">
                <img 
                  src="/src/assets/DrAdiAcademy.png" 
                  alt="Dr. ADi Academy Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text flex items-center gap-2">
                  <GraduationCap className="h-6 w-6" />
                  Dr. ADi Academy
                </h3>
                <p className="text-sm text-muted-foreground">Transform Your Life</p>
              </div>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              Empowering minds through NLP, Law of Attraction, and Emotional Intelligence. 
              Join thousands who have transformed their lives with our proven methodologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Programs */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Popular Programs</h4>
            <ul className="space-y-3">
              {popularPrograms.map((program) => (
                <li key={program.name}>
                  <Link 
                    to={program.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
              <a 
                href={getPhoneLink()} 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{getDisplayPhone()}</span>
              </a>
              <a 
                href={`mailto:${SITE_CONFIG.email}`} 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a 
                href={getTelegramUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Join us on Telegram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href={getYouTubeUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/dr.adi.academy" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/adinarayana-reddy-kadapa-70a97015" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect with us on LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Dr. ADi Academy. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>for personal transformation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;