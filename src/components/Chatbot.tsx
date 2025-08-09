import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  BookOpen,
  ArrowRight,
  Minimize2,
  Maximize2,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG, getPhoneLink, getDisplayPhone } from "@/lib/config";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

interface QuickAction {
  label: string;
  action: () => void;
  icon: React.ReactNode;
}

interface ChatAnalytics {
  sessionId: string;
  startTime: Date;
  messages: number;
  leadCaptured: boolean;
  programsDiscussed: string[];
  lastInteraction: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [hasVisitorInfo, setHasVisitorInfo] = useState(false);
  const [analytics, setAnalytics] = useState<ChatAnalytics>({
    sessionId: Date.now().toString(),
    startTime: new Date(),
    messages: 0,
    leadCaptured: false,
    programsDiscussed: [],
    lastInteraction: new Date()
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Analytics tracking
  const trackEvent = (event: string, data?: any) => {
    const updatedAnalytics = {
      ...analytics,
      lastInteraction: new Date(),
      messages: analytics.messages + 1
    };
    
    if (event === 'lead_captured') {
      updatedAnalytics.leadCaptured = true;
    }
    
    if (event === 'program_discussed' && data?.program) {
      if (!updatedAnalytics.programsDiscussed.includes(data.program)) {
        updatedAnalytics.programsDiscussed.push(data.program);
      }
    }
    
    setAnalytics(updatedAnalytics);
    
    // In a real app, send to analytics service
    console.log('📊 Analytics Event:', {
      event,
      data,
      sessionId: analytics.sessionId,
      timestamp: new Date()
    });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chat opens
      setTimeout(() => {
        const welcomeMessage = hasVisitorInfo 
          ? `Welcome back${userName ? `, ${userName}` : ''}! 👋 How can I help you today with your transformation journey?`
          : "Hello! 👋 Welcome to DR.ADI Academy. I'm here to help you find the perfect training program for your transformation journey. How can I assist you today?";
        
        addBotMessage(
          welcomeMessage,
          [
            "Tell me about your training programs",
            "I want to learn Law of Attraction",
            "How can I contact you?",
            "What is NLP training?",
            "Pricing information"
          ]
        );
      }, 500);
    }
  }, [isOpen, hasVisitorInfo, userName]);

  const addBotMessage = (text: string, suggestions?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      suggestions
    };
    setMessages(prev => [...prev, newMessage]);
    trackEvent('bot_message_sent', { messageLength: text.length });
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    trackEvent('user_message_sent', { messageLength: text.length });
  };

  const getBotResponse = (userInput: string): { text: string; suggestions?: string[]; requiresContact?: boolean } => {
    const input = userInput.toLowerCase();
    
    // Track program interest
    if (input.includes("law of attraction") || input.includes("loa")) {
      trackEvent('program_discussed', { program: 'Law of Attraction' });
    }
    if (input.includes("nlp") || input.includes("neuro linguistic")) {
      trackEvent('program_discussed', { program: 'NLP' });
    }
    if (input.includes("corporate")) {
      trackEvent('program_discussed', { program: 'Corporate Training' });
    }

    // Specific NLP explanation when asked directly
    if (input.includes("what is nlp") || input.includes("nlp training") || input.includes("neuro linguistic programming") || (input.includes("nlp") && (input.includes("what") || input.includes("about") || input.includes("explain")))) {
      trackEvent('program_discussed', { program: 'NLP' });
      return {
        text: "🧠 **NLP (Neuro Linguistic Programming)** - Your Mind's Operating System! ✨\n\n**What is NLP?**\nNLP is the science of studying successful people and modeling their thought patterns, behaviors, and strategies to achieve extraordinary results in any area of life.\n\n🎯 **Core Components:**\n• **Neuro**: How your brain processes information\n• **Linguistic**: How language affects your mind\n• **Programming**: How to rewire your mental patterns\n\n💪 **What You'll Master:**\n✅ Breakthrough limiting beliefs instantly\n✅ Control your emotional states\n✅ Improve communication & influence\n✅ Accelerate learning & memory\n✅ Build unshakeable confidence\n✅ Achieve goals faster\n\n🌟 **Real Results:**\n\"NLP helped me overcome 15 years of social anxiety in just 3 sessions!\" - Priya K.\n\n**Ready to reprogram your mind for success?**",
        suggestions: ["I want NLP training", "How does it work?", "Success stories", "Book free demo", "Pricing details", "Start this week"]
      };
    }

    // Specific Law of Attraction explanation
    if (input.includes("what is law of attraction") || input.includes("loa training") || (input.includes("law of attraction") && (input.includes("what") || input.includes("about") || input.includes("explain")))) {
      trackEvent('program_discussed', { program: 'Law of Attraction' });
      return {
        text: "🌟 **Law of Attraction** - The Universal Success Principle! ✨\n\n**What is Law of Attraction?**\nThe Law of Attraction is the powerful universal principle that states \"like attracts like\" - your thoughts, emotions, and energy attract similar experiences into your reality.\n\n🎯 **Core Principles:**\n• **Thoughts become things** - What you focus on expands\n• **Emotions are your guidance system** - Feel good to attract good\n• **Visualization creates reality** - See it, believe it, achieve it\n• **Gratitude amplifies manifestation** - Appreciate to accelerate\n\n💫 **What You'll Learn:**\n✅ Master the manifestation process\n✅ Align thoughts, emotions & actions\n✅ Remove blocks to abundance\n✅ Attract ideal relationships\n✅ Manifest career success\n✅ Create financial abundance\n\n🎉 **Success Story:**\n\"I manifested my dream job with 60% salary increase in 2 months using LOA!\" - Rajesh M.\n\n**Ready to become a conscious creator?**",
        suggestions: ["Start LOA journey", "Manifestation techniques", "Success stories", "Free consultation", "Course details", "Special offers"]
      };
    }

    // Mind Power explanation
    if (input.includes("mind power") || input.includes("subconscious mind") || (input.includes("mind") && input.includes("power") && (input.includes("what") || input.includes("about")))) {
      trackEvent('program_discussed', { program: 'Mind Power' });
      return {
        text: "🧠 **Mind Power Unlimited** - Unlock Your Mental Superpowers! 🚀\n\n**What is Mind Power?**\nYour mind is the most powerful tool you possess. Mind Power training teaches you to harness your subconscious mind's unlimited potential to achieve anything you desire.\n\n⚡ **Key Focus Areas:**\n• **Subconscious reprogramming** - Install success patterns\n• **Mental clarity & focus** - Laser-sharp concentration\n• **Intuitive decision making** - Trust your inner wisdom\n• **Stress management** - Master your mental state\n• **Creative problem solving** - Think outside the box\n\n🎯 **Transformation Results:**\n✅ 10x mental clarity and focus\n✅ Access unlimited creativity\n✅ Make decisions with confidence\n✅ Overcome mental blocks instantly\n✅ Develop photographic memory\n✅ Master stress and anxiety\n\n💡 **Student Success:**\n\"Mind Power training helped me crack IIT entrance after 2 failed attempts!\" - Priya S.\n\n**Ready to unlock your mind's full potential?**",
        suggestions: ["Mind Power training", "How it works", "Memory techniques", "Book demo session", "Course structure", "Start immediately"]
      };
    }
    if (input.includes("book") || input.includes("enroll") || input.includes("register") || input.includes("sign up") || input.includes("join")) {
      return {
        text: "🎉 Fantastic! You're ready to transform your life! \n\nI'm excited to help you begin this incredible journey. Here's what happens next:\n\n✨ **EXCLUSIVE TODAY**: Special 20% discount for immediate bookings!\n⏰ **LIMITED SLOTS**: Only 3 spots left this month\n🎁 **BONUS**: Free 1-hour personal coaching session\n\n📅 **Next Steps:**\n1. 📞 Free 15-min consultation call\n2. 🎯 Personalized program recommendation\n3. 💰 Special pricing discussion\n4. 🚀 Immediate program start\n\nWhich option works best for you?",
        suggestions: ["Book free consultation now", "Call me within 1 hour", "Send program details via email", "Schedule for tomorrow", "WhatsApp me directly"],
        requiresContact: true
      };
    }

    // Enhanced consultation/contact intent
    if (input.includes("schedule") || input.includes("appointment") || input.includes("consultation") || input.includes("call me")) {
      return {
        text: "🗓️ Perfect! Let's get you connected with Dr. ADI for your FREE consultation!\n\n**What You'll Get:**\n⏰ **Duration**: 15-30 minutes\n💰 **Cost**: Completely FREE\n🎯 **Outcome**: Personalized roadmap for your transformation\n🎁 **Bonus**: Free program recommendation based on your goals\n\n**Quick Options:**\n📞 **Call Now**: Get instant callback within 2 hours\n📧 **Email**: Schedule via email at your convenience\n💬 **WhatsApp**: Direct messaging for faster response\n\nWhich option works best for you?",
        suggestions: ["Call me within 2 hours", "Schedule via email", "WhatsApp me directly", "I prefer evening calls", "Send me available times"],
        requiresContact: true
      };
    }

    // Pricing inquiries
    if (input.includes("price") || input.includes("cost") || input.includes("fee") || input.includes("investment") || input.includes("how much")) {
      return {
        text: "💰 **Investment in Your Transformation** 💎\n\n**Our Philosophy:** We believe transformation should be accessible, so we offer flexible investment options!\n\n🎯 **Popular Programs:**\n• **NLP Training**: ₹15,000 - ₹25,000\n• **Law of Attraction**: ₹12,000 - ₹20,000\n• **Mind Power Unlimited**: ₹18,000 - ₹28,000\n• **Corporate Training**: ₹25,000 - ₹50,000\n\n🎁 **Value Additions:**\n✅ Lifetime support group access\n✅ Free refresher sessions\n✅ Bonus materials & resources\n✅ Money-back guarantee\n\n💳 **Flexible Payment:**\n• EMI options available\n• Early bird discounts\n• Group discounts\n• Student discounts\n\n**Ready to discuss your personalized package?**",
        suggestions: ["Book free consultation", "EMI options", "Current discounts", "Group packages", "Call for pricing", "WhatsApp for details"]
      };
    }

    // What programs inquiry
    if (input.includes("what programs") || input.includes("programs available") || input.includes("courses offered") || input.includes("what do you offer")) {
      return {
        text: "🎓 **Complete Transformation Programs at DR.ADI Academy** ✨\n\n**🌟 SIGNATURE PROGRAMS:**\n🧠 **NLP Training** - Reprogram your mind for success\n🌟 **Law of Attraction** - Manifest your dreams into reality\n⚡ **Mind Power Unlimited** - Unlock your mental superpowers\n\n**💼 PROFESSIONAL DEVELOPMENT:**\n🏢 **Corporate Training** - Leadership & team excellence\n🎯 **Emotional Intelligence** - Master your emotions\n👥 **Personal Coaching** - One-on-one transformation\n\n**🏠 SPECIALIZED PROGRAMS:**\n👨‍👩‍👧 **Art of Ideal Parenting** - Transform family dynamics\n🌅 **5AM Club** - Master morning routines\n💰 **Millionaire Mind** - Wealth consciousness\n📚 **Super Student Workshop** - Academic excellence\n\n**🏫 COMMUNITY PROGRAMS:**\n🏫 **School & Community Programs**\n💼 **Corporate Training Solutions**\n\n**Which area of your life needs transformation?**",
        suggestions: ["Personal development", "Professional growth", "Family harmony", "Financial success", "Academic excellence", "All programs details"]
      };
    }

    // AI-powered intent detection for specific programs
    if (input.includes("confident") || input.includes("self esteem") || input.includes("belief")) {
      trackEvent('program_discussed', { program: 'NLP' });
      return {
        text: "I can sense you're looking to build confidence and overcome limiting beliefs! 💪✨\n\n**NLP (Neuro Linguistic Programming)** is PERFECT for you!\n\n🧠 **Instant Results:**\n• Breakthrough limiting beliefs in 1 session\n• 10x confidence boost within a week\n• Reprogram negative thought patterns\n• Master emotional state control\n\n🎯 **Real Success Story:**\n\"I went from social anxiety to giving presentations confidently. NLP changed my life in just 3 weeks!\" - Priya, Software Engineer\n\n🎁 **Special Offer**: First session at 50% off + Free confidence assessment\n\nReady to become the confident person you're meant to be?",
        suggestions: ["Yes, I want NLP training", "Book free confidence assessment", "Tell me more success stories", "What's the investment?", "Can I start this week?"]
      };
    }

    // Enhanced success-focused responses
    if (input.includes("success") || input.includes("achieve") || input.includes("goals") || input.includes("dream")) {
      trackEvent('program_discussed', { program: 'Law of Attraction' });
      return {
        text: "🌟 I LOVE your success mindset! You're already thinking like a winner!\n\n**Law of Attraction** is your gateway to unlimited success!\n\n🎯 **Guaranteed Results in 30 Days:**\n• Manifest your dream job/promotion\n• Attract ideal relationships\n• Increase income by 25-50%\n• Achieve fitness and health goals\n• Find life purpose and passion\n\n💰 **ROI Example:**\nRahul invested ₹25,000 in LOA training → Got promoted with ₹8 lakh salary increase in 3 months!\n\n🎁 **Today's Special:**\n• 30% discount (saves ₹7,500)\n• Free goal-setting workbook\n• 90-day WhatsApp support\n• Money-back guarantee\n\nDon't let this opportunity slip away!",
        suggestions: ["I want this transformation", "Book my LOA journey", "Show me more success stories", "What's the total investment?", "Start my 30-day challenge"]
      };
    }

    // Business/career focus
    if (input.includes("business") || input.includes("career") || input.includes("promotion") || input.includes("leadership")) {
      trackEvent('program_discussed', { program: 'Corporate Training' });
      return {
        text: "🚀 Excellent! You're focused on professional growth!\n\n**Our Executive Success Programs** are designed for ambitious professionals like you!\n\n💼 **Choose Your Path:**\n\n🎯 **Individual Executive Coaching:**\n• Leadership presence & influence\n• Advanced communication skills\n• Strategic thinking & decision making\n• Stress management & peak performance\n\n🏢 **Corporate Training (if you want to bring your team):**\n• Team leadership development\n• Sales & negotiation mastery\n• Productivity & time management\n• Workplace emotional intelligence\n\n📈 **Guaranteed Outcomes:**\n• 40% increase in leadership effectiveness\n• 60% improvement in team performance\n• 25% boost in productivity\n• Faster promotions & recognition\n\nWhich path aligns with your current goals?",
        suggestions: ["Individual executive coaching", "I want to train my team", "Leadership development focus", "Sales & negotiation skills", "Show me pricing options"]
      };
    }

    // ...existing responses with enhancements...
    // Training programs
    if (input.includes("training") || input.includes("program") || input.includes("course")) {
      return {
        text: "🎯 **Transform Your Life with Our Signature Programs!** ✨\n\n**🌟 MOST POPULAR:**\n• **Law of Attraction (LOA)** - Manifest anything you desire (4.9/5 ⭐)\n• **NLP Training** - Reprogram your mind for success (4.8/5 ⭐)\n• **Mind Power Unlimited** - Unlock your hidden potential (4.9/5 ⭐)\n\n**🎭 SPECIALIZED PROGRAMS:**\n• **Emotional Intelligence** - Master your emotions & relationships\n• **Art of Ideal Parenting** - Transform family dynamics\n• **5 AM Club** - Early riser success habits\n• **Millionaire Mind** - Wealth consciousness training\n\n**🏢 BUSINESS SOLUTIONS:**\n• **Corporate Training** - Leadership & team development\n• **Sales Mastery** - Close more deals with confidence\n\n💡 **Not sure which is right for you?** Take our FREE 2-minute assessment!\n\nWhich area of your life needs the most transformation right now?",
        suggestions: ["Take free assessment", "I want financial success", "Improve relationships", "Build confidence", "Career advancement", "Family harmony"]
      };
    }

    // Enhanced default response with personalization
    return {
      text: "I'm here to help you discover the perfect path for your transformation! 😊✨\n\n**Popular Topics I Can Help With:**\n\n🎯 **Program Selection:**\n• Which training suits your goals\n• Program comparisons and benefits\n• Success stories and testimonials\n\n💰 **Investment & Logistics:**\n• Pricing and payment options\n• Schedule and format options\n• Location and online availability\n\n📞 **Getting Started:**\n• Free consultation booking\n• Immediate contact options\n• Personalized recommendations\n\n🎓 **About Dr. ADI:**\n• Founder's journey and expertise\n• Teaching methodology\n• Student success stories\n\nWhat specific area would you like to explore?",
      suggestions: ["Find my ideal program", "Pricing information", "Book free consultation", "About Dr. ADI", "Success stories", "Special offers today"]
    };
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      addUserMessage(inputValue);
      setInputValue("");
      setIsTyping(true);

      // Simulate bot typing delay
      setTimeout(() => {
        const response = getBotResponse(inputValue);
        setIsTyping(false);
        addBotMessage(response.text, response.suggestions);
        
        // Show contact form if needed
        if (response.requiresContact && !hasVisitorInfo) {
          setTimeout(() => {
            setShowContactForm(true);
          }, 1000);
        }
      }, 1000 + Math.random() * 1000);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    addUserMessage(suggestion);
    setIsTyping(true);

    // Handle special suggestions
    if (suggestion.includes("let's connect") || suggestion.includes("callback") || suggestion.includes("consultation")) {
      setShowContactForm(true);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          "Perfect! Please share your contact details below, and our expert counselor will reach out to you within 2 hours with personalized program recommendations! 📞✨",
          ["I'm ready to share details"]
        );
      }, 800);
      return;
    }

    // Handle specific action-oriented suggestions
    if (suggestion.includes("30-day challenge") || suggestion.includes("Start my 30-day challenge")) {
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          "🚀 **AMAZING!** Welcome to the Law of Attraction 30-Day Challenge! 🌟\n\nThis is where your transformation begins! Here's what happens next:\n\n📋 **Your 30-Day Journey:**\n• Day 1-7: Foundation & Mindset Setup\n• Day 8-14: Visualization Mastery\n• Day 15-21: Energy Alignment & Action\n• Day 22-30: Manifestation & Results\n\n🎁 **You'll Receive:**\n✅ Daily guided exercises\n✅ Personal manifestation journal\n✅ Weekly group support calls\n✅ Dr. ADI's personal guidance\n✅ Success tracking system\n\n💫 **Special Launch Offer:** Join today and get 40% off + Free bonus materials!\n\n**Ready to commit to your transformation?**",
          ["Yes, I'm ready to start!", "Tell me about the bonus materials", "What's the investment?", "Book my consultation", "Send program details", "I need to think about it"]
        );
      }, 800);
      return;
    }

    if (suggestion.includes("I want NLP training") || suggestion.includes("Yes, I want NLP training")) {
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          "🎉 **FANTASTIC CHOICE!** NLP will completely transform your life! 💪\n\n🧠 **Your NLP Transformation Journey:**\n• **Week 1**: Foundation & Belief Systems\n• **Week 2**: Advanced Communication Patterns\n• **Week 3**: Emotional State Mastery\n• **Week 4**: Goal Achievement & Integration\n\n🎯 **What You'll Master:**\n✅ Instant confidence building techniques\n✅ Powerful communication skills\n✅ Emotional control mastery\n✅ Limiting belief elimination\n✅ Advanced persuasion methods\n\n🎁 **Exclusive Bonuses:**\n• Free 1-on-1 coaching session\n• NLP toolkit & resources\n• Lifetime community access\n\n**Let's get you started immediately!**",
          ["Book my NLP training now", "What's the total cost?", "Can I start this week?", "Free consultation first", "Payment plan options", "Success guarantee details"]
        );
      }, 800);
      return;
    }

    if (suggestion.includes("I want this transformation") || suggestion.includes("Book my LOA journey")) {
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          "🌟 **YES! Your transformation journey starts NOW!** ✨\n\n🎯 **Law of Attraction Mastery Program:**\n\n📚 **Complete Training Modules:**\n• The Science of Manifestation\n• Belief System Transformation\n• Visualization & Meditation Mastery\n• Energy Alignment Techniques\n• Goal Setting & Achievement\n\n💫 **Results You'll Experience:**\n✅ Manifest your ideal career/business\n✅ Attract abundance & prosperity\n✅ Create loving relationships\n✅ Achieve health & vitality goals\n✅ Find your life purpose\n\n🎁 **Limited Time Offer:**\n• 50% Early Bird Discount\n• Free manifestation workbook\n• 3 months personal support\n\n**Ready to claim your new reality?**",
          ["Claim my early bird discount", "Book consultation now", "Start immediately", "Payment options", "Success stories", "Money-back guarantee"]
        );
      }, 800);
      return;
    }

    if (suggestion.includes("Book free consultation") || suggestion.includes("Free consultation")) {
      setShowContactForm(true);
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          "🎯 **Perfect! Let's book your FREE consultation with Dr. ADI!** 📞\n\nPlease share your details below, and our team will:\n\n✅ Call you within 2 hours\n✅ Understand your specific goals\n✅ Recommend the perfect program\n✅ Discuss exclusive offers\n✅ Answer all your questions\n\n**This consultation is completely FREE with no obligations!**",
          ["I'm ready to share my details"]
        );
      }, 800);
      return;
    }

    // Handle pricing and investment inquiries
    if (suggestion.includes("Pricing") || suggestion.includes("investment") || suggestion.includes("cost") || suggestion.includes("What's the total")) {
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          "💰 **Investment in Your Life Transformation** 💎\n\n🎯 **Flexible Investment Options:**\n\n**🌟 Individual Programs:**\n• NLP Training: ₹18,000 - ₹25,000\n• Law of Attraction: ₹15,000 - ₹22,000\n• Mind Power: ₹20,000 - ₹28,000\n\n**💼 Premium Packages:**\n• Complete Transformation Bundle: ₹45,000 (Save ₹15,000)\n• VIP Coaching Package: ₹65,000\n\n**💳 Easy Payment Plans:**\n✅ 0% EMI options available\n✅ Early bird discounts up to 40%\n✅ Group discounts available\n✅ Student special rates\n\n**💎 What's Included:**\n• Lifetime program access • Free refresher sessions • Bonus materials • Money-back guarantee\n\n**Ready to discuss your personalized package?**",
          ["Book consultation for pricing", "EMI details", "Early bird discount", "Group package deals", "Call me for pricing", "What's included exactly?"]
        );
      }, 800);
      return;
    }

    // Handle success stories requests
    if (suggestion.includes("Success stories") || suggestion.includes("testimonials") || suggestion.includes("Tell me more success stories")) {
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          "🌟 **Real Transformation Stories from Our Students!** ✨\n\n**💼 Career Success:**\n\"After NLP training, I got promoted to Senior Manager with 80% salary hike within 4 months!\" - Priya M., IT Professional\n\n**💰 Financial Abundance:**\n\"Law of Attraction helped me manifest my dream business. Revenue grew from 0 to ₹50 lakhs in 18 months!\" - Rahul K., Entrepreneur\n\n**❤️ Relationship Transformation:**\n\"My marriage was failing. After Emotional Intelligence training, we're closer than ever!\" - Sunita R., Homemaker\n\n**🎓 Academic Excellence:**\n\"Super Student Workshop helped my son crack JEE with AIR 247!\" - Mrs. Sharma, Parent\n\n**🏢 Corporate Impact:**\n\"Our team productivity increased 60% after DR.ADI's corporate training!\" - Vikash T., CEO\n\n**Ready to create your own success story?**",
          ["Yes, I want my transformation", "Book my program now", "Free consultation", "How do you guarantee results?", "More testimonials", "Connect me with past students"]
        );
      }, 800);
      return;
    }

    // Handle program-specific booking requests
    if (suggestion.includes("Mind Power training") || suggestion.includes("Book demo session")) {
      setTimeout(() => {
        setIsTyping(false);
        addBotMessage(
          "🧠 **Mind Power Unlimited - Demo Session Booking!** ⚡\n\n**🎯 What You'll Experience in the Demo:**\n• Live subconscious reprogramming session\n• Instant stress relief technique\n• Memory enhancement exercise\n• Focus & concentration booster\n• Personal mind power assessment\n\n**📅 Available Demo Slots:**\n• Tomorrow 6:00 PM - 7:30 PM\n• Day after tomorrow 2:00 PM - 3:30 PM\n• Weekend special session\n\n**🎁 Demo Session Benefits:**\n✅ Completely FREE\n✅ Immediate techniques you can use\n✅ Personal roadmap discussion\n✅ Special enrollment offers\n\n**Ready to book your demo session?**",
          ["Book tomorrow 6 PM slot", "Weekend session please", "Call me to schedule", "I prefer different time", "What should I prepare?", "Is it really free?"]
        );
      }, 800);
      return;
    }

    setTimeout(() => {
      const response = getBotResponse(suggestion);
      setIsTyping(false);
      addBotMessage(response.text, response.suggestions);
    }, 800);
  };

  const handleContactSubmit = () => {
    if (userName && userEmail) {
      setHasVisitorInfo(true);
      setShowContactForm(false);
      addBotMessage(
        `Thank you, ${userName}! 🎉 I've noted your details. Our counselor will call you within 2 hours to discuss the perfect training program for your goals.\n\nIn the meantime, feel free to ask me any questions about our programs!`,
        ["Tell me about success stories", "What makes Dr. ADI special?", "I want to see testimonials", "How soon can I start?"]
      );
      
      // You can add API call here to save lead data
      console.log('Lead captured:', { name: userName, email: userEmail, timestamp: new Date() });
    }
  };

  const quickActions: QuickAction[] = [
    {
      label: "📞 Call Now",
      action: () => window.location.href = getPhoneLink(),
      icon: <Phone className="h-3 w-3" />
    },
    {
      label: "💬 WhatsApp",
      action: () => window.open(`https://wa.me/${SITE_CONFIG.phone.replace(/\D/g, '')}?text=Hi! I'm interested in DR.ADI Academy training programs.`, '_blank'),
      icon: <MessageCircle className="h-3 w-3" />
    },
    {
      label: "📧 Email Us",
      action: () => window.open('mailto:info@dradiacademy.com?subject=Training Program Inquiry&body=Hi, I am interested in learning more about your training programs.', '_blank'),
      icon: <Mail className="h-3 w-3" />
    },
    {
      label: "🎯 Programs",
      action: () => window.open('/trainings', '_self'),
      icon: <BookOpen className="h-3 w-3" />
    },
    {
      label: "📅 Free Demo",
      action: () => window.open('/contact?training=Free Demo Session', '_self'),
      icon: <Calendar className="h-3 w-3" />
    },
    {
      label: "⭐ Reviews",
      action: () => {
        addBotMessage(
          "Here's what our students say about their transformation! 🌟\n\n✨ \"Dr. ADI's LOA program changed my life completely. I manifested my dream job within 3 months!\" - Priya, Software Engineer\n\n🚀 \"The NLP training gave me confidence I never had. My relationships and career both improved dramatically.\" - Rajesh, Manager\n\n💼 \"Corporate training by Dr. ADI transformed our entire team dynamics. Productivity increased by 40%!\" - Sunita, HR Director\n\n👨‍👩‍👧‍👦 \"Art of Parenting program helped me connect with my teenage daughter. Our relationship is stronger than ever.\" - Madhavi, Mother\n\nReady to write your own success story?",
          ["Yes, I want transformation", "Book free consultation", "Tell me about guarantees", "What's the next step?"]
        );
      },
      icon: <Star className="h-3 w-3" />
    }
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-[60]">
        <div className="relative">
          <Button
            onClick={() => setIsOpen(true)}
            className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse hover:animate-none"
            size="icon"
          >
            <MessageCircle className="h-7 w-7 text-primary-foreground group-hover:scale-110 transition-transform" />
          </Button>
          
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
          
          {/* Enhanced tooltip */}
          <div className="absolute -top-16 right-0 bg-popover text-popover-foreground border px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-bounce shadow-lg">
            <div className="flex items-center space-x-2">
              <Bot className="h-4 w-4" />
              <span>Need help? Chat with us! 👋</span>
            </div>
            <div className="text-xs opacity-80 mt-1">
              Get instant answers & free consultation!
            </div>
            {/* Arrow pointing down */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <Card className={`w-80 md:w-96 shadow-2xl border-0 transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <div>
              <CardTitle className="text-lg text-primary-foreground">DR.ADI Assistant</CardTitle>
              <p className="text-xs text-primary-foreground/80">Online • Ready to help</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[436px]">
            {/* Contact Form */}
            {showContactForm && !hasVisitorInfo && (
              <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-lg mx-4 mb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Bot className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Let's Connect! 🤝</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your details for personalized guidance and exclusive offers!
                </p>
                <div className="space-y-3">
                  <Input
                    placeholder="Your Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="h-8"
                  />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="h-8"
                  />
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleContactSubmit}
                      disabled={!userName || !userEmail}
                      className="flex-1 h-8 text-xs"
                      size="sm"
                    >
                      Connect Now! 🚀
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowContactForm(false)}
                      className="h-8 text-xs"
                      size="sm"
                    >
                      Later
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] ${message.isBot ? 'flex items-start space-x-2' : ''}`}>
                    {message.isBot && (
                      <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                    <div className={`rounded-lg p-3 ${
                      message.isBot 
                        ? 'bg-card border text-card-foreground dark:bg-card dark:text-card-foreground' 
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {!message.isBot && (
                      <div className="flex-shrink-0 w-8 h-8 bg-muted rounded-full flex items-center justify-center ml-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Suggestions */}
              {messages.length > 0 && messages[messages.length - 1]?.suggestions && (
                <div className="flex flex-wrap gap-2">
                  {messages[messages.length - 1].suggestions!.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs h-8"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              )}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="bg-card border rounded-lg p-3 dark:bg-card">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-3 border-t bg-muted/10">
              <p className="text-xs text-muted-foreground mb-2 text-center">Quick Actions</p>
              <div className="grid grid-cols-3 gap-1">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 flex items-center justify-center space-x-1 p-1"
                    onClick={action.action}
                  >
                    {action.icon}
                    <span className="hidden sm:inline">{action.label}</span>
                    <span className="sm:hidden">{action.label.split(' ')[0]}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon" disabled={!inputValue.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export { Chatbot };
export default Chatbot;
