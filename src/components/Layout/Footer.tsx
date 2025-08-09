import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone, getYouTubeUrl } from "@/lib/config";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-primary-glow">
                <span className="text-lg font-bold text-primary-foreground">DA</span>
              </div>
              <span className="text-xl font-bold gradient-text">DR.ADI ACADEMY</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your life by taking massive actions and become unstoppable. Join our training community to unfold the purpose of your life and build the new you with powerful tools and techniques.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href={getPhoneLink()} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Call us"
                >
                  {getDisplayPhone()}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:info@dradiacademy.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@dradiacademy.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Miyapur, Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/my-story" className="text-muted-foreground hover:text-primary transition-colors">My Story</Link></li>
              <li><Link to="/trainings/law-of-attraction" className="text-muted-foreground hover:text-primary transition-colors">Law of Attraction</Link></li>
              <li><Link to="/trainings/nlp" className="text-muted-foreground hover:text-primary transition-colors">NLP Training</Link></li>
              <li><Link to="/other-trainings/super-student-workshop" className="text-muted-foreground hover:text-primary transition-colors">Super Student Workshop</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest updates and transformational tips.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full"
              />
              <Button variant="default" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/dradiglobalacademy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/dradiglobal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/dradiglobalacademy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={getYouTubeUrl()} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/adinarayana-reddy-kadapa-70a97015" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 DR.ADI Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              <Link to="/my-story" className="text-muted-foreground hover:text-primary transition-colors">About Dr. ADI</Link>
              <Link to="/trainings" className="text-muted-foreground hover:text-primary transition-colors">Training Programs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;