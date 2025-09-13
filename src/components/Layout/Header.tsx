import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, getDisplayPhone, getPhoneLink } from "@/lib/config";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const navigationItems = [
    { 
      name: "My Story", 
      href: "/my-story" 
    },
    { 
      name: "Trainings We Offer", 
      href: "/trainings",
      submenu: [
        { name: "Law of Attraction - LOA", href: "/trainings/law-of-attraction" },
        { name: "Neuro Linguistic Programming - NLP", href: "/trainings/nlp" },
        { name: "Power of Subconscious Mind - SCM", href: "/trainings/subconscious-mind" },
        { name: "Mind Power Unlimited - MPU", href: "/trainings/mind-power" },
        { name: "Mind Mastery", href: "/trainings/mind-mastery" },
        { name: "Rewire Your Mind", href: "/trainings/rewire-your-mind" },
        { name: "5 AM Club", href: "/trainings/5am-club" },
        { name: "Habit Mastery", href: "/trainings/habit-mastery" },
        { name: "Millionaire Mind Unlimited", href: "/trainings/millionaire-mind" }
      ]
    },
    { 
      name: "Other Trainings", 
      href: "/other-trainings",
      submenu: [
        { name: "Emotional Intelligence", href: "/other-trainings/emotional-intelligence" },
        { name: "Love Yourself & Heal Yourself", href: "/other-trainings/love-yourself-heal-yourself" },
        { name: "Personal Coaching", href: "/other-trainings/personal-coaching" },
        { name: "Super Student Unlimited Workshop", href: "/other-trainings/super-student-workshop" },
        { name: "Art of Ideal Parenting", href: "/other-trainings/art-of-ideal-parenting" },
        { name: "Programs for Schools & Communities", href: "/other-trainings/school-community-programs" },
        { name: "Corporate Training", href: "/other-trainings/corporate-training" }
      ]
    },
    { name: "Contact Us", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              {/* Logo Image */}
              <div className="relative h-20 w-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/a63c3cc5-2960-4846-b11c-8ea0aaea12ce.png" 
                  alt="Dr. ADi Academy Logo" 
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>
              
              {/* Academy Name */}
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold gradient-text leading-tight">
                  Dr. ADi Academy
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 ml-12">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.href === "#" ? (
                  <span className="text-foreground/80 hover:text-foreground transition-colors duration-200 cursor-pointer text-base font-medium">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-foreground/80 hover:text-foreground transition-colors duration-200 text-base font-medium flex items-center hover:scale-105 transition-transform"
                  >
                    {item.name}
                    {item.submenu && (
                      <span className="ml-1 relative top-[1px] transition duration-200 group-hover:rotate-180">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 8.5L2 4.5H10L6 8.5Z" fill="currentColor"/>
                        </svg>
                      </span>
                    )}
                  </Link>
                )}
                {item.submenu && (
                  <div className="absolute left-0 top-full mt-1 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-card shadow-xl rounded-lg border py-2 mt-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-5 py-2.5 text-base text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors font-normal"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://learn.dradiacademy.com" target="_blank" rel="noopener noreferrer">Login</a>
              </Button>
              <Button variant="cta" size="lg" asChild>
                <Link to="/trainings">Enroll Now</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted transition-colors relative z-50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40 bg-black/10 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              onTouchStart={(e) => e.stopPropagation()}
              aria-hidden="true"
            />
            {/* Mobile Menu */}
            <div 
              id="mobile-menu"
              className="fixed inset-x-0 top-16 z-50 lg:hidden animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="bg-background/98 backdrop-blur-sm supports-[backdrop-filter]:bg-background/95 border-b shadow-lg">
                <nav className="container mx-auto px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.href === "#" ? (
                        <span className="block px-3 py-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-muted transition-colors cursor-pointer">
                          {item.name}
                        </span>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-3 py-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium"
                        >
                          {item.name}
                        </Link>
                      )}
                      {item.submenu && (
                        <div className="ml-4 space-y-1 mt-2">
                          {item.submenu.map((subItem) => (                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2.5 text-base text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border/40">
                    <div className="px-3 py-2">
                      <div className="flex flex-col gap-3">
                        <Button variant="outline" size="lg" className="w-full" asChild>
                          <a href="https://learn.dradiacademy.com" target="_blank" rel="noopener noreferrer">Login</a>
                        </Button>
                        <Button variant="cta" size="lg" className="w-full" asChild>
                          <Link to="/trainings" onClick={() => setIsMenuOpen(false)}>Enroll Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;