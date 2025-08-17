import { Button } from "@/components/ui/button";

const WhyAssociateSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">WHY DO YOU NEED TO ASSOCIATE</span>
            <br />
            <span className="text-foreground">WITH A MENTOR TO RESTART YOUR LIFE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Why do only a few people achieve success while many continue to struggle? At Dr. ADI Academy, once you become part of our training community, you'll uncover the hidden reasons holding you back and discover a clear path to a new way of living. Our programs empower you to find solutions and succeed in every area of life — career and business, relationships, health and appearance, spiritual growth, and meaningful contribution.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 italic">
              "Bees pollinate our plants by carrying pollen between flowers, enabling them to reproduce. If bees can fulfill such a vital purpose in nature, imagine the magnitude of the purpose we, as human beings, are meant to serve in life."
            </blockquote>
            <p className="text-lg text-muted-foreground mb-8">
              Don't wait any longer — join our training community to discover your life's true purpose and create the best version of yourself using simple, practical, and powerful tools and techniques.
            </p>
            <Button variant="cta" size="xl" className="group bg-[#229ED9] hover:bg-[#1E88C7] border-[#229ED9] text-white" asChild>
              <a href="https://t.me/+F37v8f6NXpJkYWJl" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Join our Telegram Community
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAssociateSection;