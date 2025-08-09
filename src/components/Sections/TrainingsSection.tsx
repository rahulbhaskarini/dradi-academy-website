import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Heart, 
  Target, 
  Sunrise, 
  Zap, 
  TrendingUp, 
  Users, 
  BookOpen,
  ArrowRight,
  Star
} from "lucide-react";

// Import training images
import mindPowerImage from "@/assets/trainings/mind-power-unlimited.jpg";
import nlpImage from "@/assets/trainings/nlp-003.jpeg";
import loaHeroImage from "@/assets/trainings/loa-5.jpg";
import loaImage1 from "@/assets/trainings/loa-2.jpg";
import loaImage2 from "@/assets/trainings/law-of-attraction-blog.jpg";
import nlpExplanationImage from "@/assets/trainings/nlp-explanation.jpg";
import nlpDiagramImage from "@/assets/trainings/nlp-4.png";

const TrainingsSection = () => {
  const primaryTrainings = [
    {
      icon: Target,
      title: "Law of Attraction - LOA",
      description: "Learn to manifest your desires and create the life you want through proven LOA techniques and practices.",
      href: "/trainings/law-of-attraction",
      featured: true,
      tag: "Most Popular"
    },
    {
      icon: Brain,
      title: "Neuro Linguistic Programming - NLP",
      description: "Ultimate scientific method to get peak performance in Health, Wealth, Happiness, Business, and Relationships.",
      href: "/trainings/nlp",
      featured: true,
      tag: "Highly Effective"
    },
    {
      icon: Zap,
      title: "Power of Subconscious Mind - SCM",
      description: "Access unlimited power of your subconscious mind to achieve 100% results in all areas of life.",
      href: "/trainings/subconscious-mind",
      featured: true,
      tag: "Life Changing"
    },
    {
      icon: Brain,
      title: "Mind Power Unlimited - MPU",
      description: "Unlock the unlimited potential of your mind and create extraordinary results in your life.",
      href: "/trainings/mind-power",
      featured: false
    },
    {
      icon: Heart,
      title: "Mind Mastery",
      description: "Master your mind and thoughts to create the reality you desire with advanced techniques.",
      href: "/trainings/mind-mastery",
      featured: false
    },
    {
      icon: Sunrise,
      title: "World Class Morning Rituals - 5 AM Club",
      description: "Transform your life with powerful morning routines and world-class morning rituals.",
      href: "/trainings/5am-club",
      featured: false
    },
    {
      icon: TrendingUp,
      title: "Habit Mastery",
      description: "Build powerful habits that will transform your life and help you achieve your goals consistently.",
      href: "/trainings/habit-mastery",
      featured: false
    },
    {
      icon: TrendingUp,
      title: "Millionaire Mind Unlimited",
      description: "Develop the mindset and habits of successful millionaires to create unlimited wealth and abundance.",
      href: "/trainings/millionaire-mind",
      featured: false
    }
  ];

  const otherTrainings = [
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "Develop high emotional intelligence to become a better leader, speaker, and person in all areas of life.",
      href: "/other-trainings/emotional-intelligence"
    },
    {
      icon: Heart,
      title: "Love Yourself & Heal Yourself",
      description: "Learn to love yourself and heal your life for a more joyful, happy, and healthier existence.",
      href: "/other-trainings/love-yourself-heal-yourself"
    },
    {
      icon: Users,
      title: "Personal Coaching",
      description: "One-on-one personalized coaching to help you overcome specific challenges and achieve your goals.",
      href: "/other-trainings/personal-coaching"
    },
    {
      icon: BookOpen,
      title: "Super Student Unlimited Workshop",
      description: "Special workshop for students to develop study skills, memory techniques, and academic excellence.",
      href: "/other-trainings/super-student-workshop"
    },
    {
      icon: Users,
      title: "Art of Ideal Parenting",
      description: "Learn effective parenting techniques to raise confident, successful, and well-balanced children.",
      href: "/other-trainings/art-of-ideal-parenting"
    },
    {
      icon: Users,
      title: "Programs for Schools & Communities",
      description: "Specialized programs designed for educational institutions and community development.",
      href: "/other-trainings/school-community-programs"
    },
    {
      icon: TrendingUp,
      title: "Corporate Training Programs",
      description: "Customized training programs for organizations to enhance employee performance and productivity.",
      href: "/other-trainings/corporate-training"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary Trainings */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">TRAININGS WE OFFER</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
            <strong>We offer the below listed courses which bring complete transformation and help to achieve the goals/Life purpose.</strong>
          </p>
        </div>

        {/* Training Images Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <img 
                src={mindPowerImage} 
                alt="Mind Power Unlimited Training - Unlock your mental potential"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
              <img 
                src={nlpImage} 
                alt="Neuro Linguistic Programming - NLP Training techniques"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="flex items-center">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Complete Transformation Awaits</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>LAW OF ATTRACTION</strong></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>NEURO LINGUISTIC PROGRAMMING - NLP</strong></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>POWER OF SUBCONSCIOUS MIND</strong></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>MIND POWER UNLIMITED</strong></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>WORLD CLASS MORNING RITUALS</strong></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>MIND MASTERY</strong></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>MILLIONAIRE MIND UNLIMITED</strong></li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span><strong>HABIT MASTERY</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Law of Attraction Feature Section */}
        <div className="mb-16 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <img 
              src={loaHeroImage} 
              alt="Law of Attraction - Manifest your desires"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
            <div className="space-y-4">
              <img 
                src={loaImage1} 
                alt="Law of Attraction visualization techniques"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src={loaImage2} 
                alt="Law of Attraction manifesting success"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold mb-4 gradient-text">LAW OF ATTRACTION</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Your thoughts have the power to manifest your life.</strong> In universe everything is vibration, So increasing your vibration will allow you to experience, your connection with universal power house then you can manifest whatever you want in you life in area like <strong>career/business, relationship, health/appearance, spiritual journey and contribution.</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Join with us and learn about "Mastering law of attraction" and bring greatness in your life too.</strong>
              </p>
              <Link to="/trainings/law-of-attraction" className="inline-block mt-6">
                <Button className="w-full lg:w-auto">
                  Learn More About LOA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* NLP Feature Section */}
        <div className="mb-16 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold mb-4 gradient-text">NLP</h3>
              <h4 className="text-xl font-semibold mb-4 text-foreground italic">HEAL YOUR MIND TO HEAL YOUR LIFE</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>NLP is the ultimate scientific method to get peak performance in Health, Wealth, Happiness, Business, Relation ships.</strong> We often delete, distort and generalize information before we communicate and we also create generalized meanings, there by we invite the problems unknowingly, most of the times.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Language may not always describe the reality, just as <strong>"MAP IS NOT TERRITORY".</strong> NLP tools and Techniques will help to understand the mind default settings you have since years, then teaches us to rewire them with new patterns to create the abundance in health, wealth, success, happiness, love, energy, focus and confidence.
              </p>
              <Link to="/trainings/nlp" className="inline-block mt-6">
                <Button className="w-full lg:w-auto">
                  Explore NLP Training
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              <img 
                src={nlpExplanationImage} 
                alt="What is NLP - Neuro Linguistic Programming explained"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src={nlpDiagramImage} 
                alt="NLP techniques and methodologies diagram"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Featured Trainings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {primaryTrainings.map((training, index) => (
            <Link key={index} to={training.href} className="block">
              <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card ${training.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <CardContent className="p-6">
                  {training.tag && (
                    <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
                      {training.tag}
                    </Badge>
                  )}
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    <training.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{training.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{training.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Other Trainings */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">OTHER SPECIALIZED TRAININGS</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional programs tailored for specific needs and audiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTrainings.map((training, index) => (
              <Link key={index} to={training.href} className="block">
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-accent to-accent-glow rounded-lg mb-4 group-hover:scale-110 transition-transform">
                      <training.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">{training.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{training.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of people who have already transformed their lives through our proven training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="group">
              Enroll Now
              <Star className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Contact Us for Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingsSection;
