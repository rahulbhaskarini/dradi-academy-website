import Layout from "@/components/Layout/Layout";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import drAdiImage2Png from "@/assets/Gallery/DrAdiAcademy2.png";
import drAdiImage3 from "@/assets/Gallery/DrAdiAcademy3.jpeg";
import photo1 from "@/assets/Gallery/photo_2025-08-17 18.14.26.jpeg";
import photo3 from "@/assets/Gallery/photo_2025-08-17 18.14.34.jpeg";
import photo5 from "@/assets/Gallery/photo_2025-08-17 18.14.43.jpeg";
import photo6 from "@/assets/Gallery/photo_2025-08-17 18.14.48.jpeg";
import photo7 from "@/assets/Gallery/photo_2025-08-17 18.14.52.jpeg";
import photo8 from "@/assets/Gallery/photo_2025-08-17 18.17.46.jpeg";
import photo9 from "@/assets/Gallery/photo_2025-08-17 18.17.51.jpeg";
import photo10 from "@/assets/Gallery/photo_2025-08-17 18.20.19.jpeg";
import photo11 from "@/assets/Gallery/photo_2025-08-17 18.20.27.jpeg";
import photo12 from "@/assets/Gallery/photo_2025-08-17 18.30.17.jpeg";
import photo14 from "@/assets/Gallery/photo_2025-08-17 18.30.23.jpeg";
import photo15 from "@/assets/Gallery/photo_2025-08-17 18.30.24.jpeg";
import photo16 from "@/assets/Gallery/photo_2025-08-17 18.30.26.jpeg";
import photo17 from "@/assets/Gallery/photo_2025-08-17 18.30.27.jpeg";
import photo18 from "@/assets/Gallery/photo_2025-08-17 18.30.30.jpeg";
import photo19 from "@/assets/Gallery/photo_2025-08-17 18.30.45.jpeg";
import photo20 from "@/assets/Gallery/photo_2025-08-17 18.30.51.jpeg";
import photo22 from "@/assets/Gallery/photo_2025-08-17 18.31.11.jpeg";
import photo23 from "@/assets/Gallery/photo_2025-08-17 18.31.19.jpeg";
import photo24 from "@/assets/Gallery/photo_2025-08-17 18.41.14.jpeg";
import photo25 from "@/assets/Gallery/photo_2025-08-17 18.41.15.jpeg";
import photo26 from "@/assets/Gallery/photo_2025-08-17 18.41.18.jpeg";
import photo27 from "@/assets/Gallery/photo_2025-08-17 18.41.20.jpeg";
import photo28 from "@/assets/Gallery/photo_2025-08-17 18.41.24.jpeg";
import photo29 from "@/assets/Gallery/photo_2025-08-17 18.41.26.jpeg";
import photo30 from "@/assets/Gallery/photo_2025-08-17 18.41.27.jpeg";
import photo31 from "@/assets/Gallery/photo_2025-08-17 18.41.29.jpeg";
import photo32 from "@/assets/Gallery/photo_2025-08-17 18.41.30.jpeg";
import photo33 from "@/assets/Gallery/photo_2025-08-17 18.41.32.jpeg";
import photo34 from "@/assets/Gallery/photo_2025-08-17 18.41.35.jpeg";
import photo35 from "@/assets/Gallery/photo_2025-08-17 18.41.37.jpeg";
import photo36 from "@/assets/Gallery/photo_2025-08-17 18.41.39.jpeg";
import photo37 from "@/assets/Gallery/photo_2025-08-17 18.41.40.jpeg";
import photo38 from "@/assets/Gallery/photo_2025-08-17 18.41.48.jpeg";
import photo39 from "@/assets/Gallery/photo_2025-08-17 18.41.52.jpeg";
import photo40 from "@/assets/Gallery/photo_2025-08-17 18.41.54.jpeg";
import photo41 from "@/assets/Gallery/photo_2025-08-17 18.41.57.jpeg";
import photo42 from "@/assets/Gallery/photo_2025-08-17 18.41.59.jpeg";
import photo43 from "@/assets/Gallery/photo_2025-08-17 18.42.02.jpeg";
import photo44 from "@/assets/Gallery/photo_2025-08-17 18.42.04.jpeg";
import photo45 from "@/assets/Gallery/photo_2025-08-17 18.42.10.jpeg";
import photo46 from "@/assets/Gallery/photo_2025-08-17 18.42.11.jpeg";
import photo47 from "@/assets/Gallery/photo_2025-08-17 18.42.12.jpeg";
import photo48 from "@/assets/Gallery/photo_2025-08-17 18.42.15.jpeg";
import photo49 from "@/assets/Gallery/photo_2025-08-17 18.42.17.jpeg";
import photo50 from "@/assets/Gallery/photo_2025-08-17 18.30.28.jpeg";
import photo51 from "@/assets/Gallery/photo_2025-08-17 18.30.29.jpeg";
import photo52 from "@/assets/Gallery/photo_2025-08-17 18.30.33.jpeg";
import photo53 from "@/assets/Gallery/photo_2025-08-17 18.30.48.jpeg";
import photo54 from "@/assets/Gallery/photo_2025-08-17 18.41.54.jpeg";
import photo55 from "@/assets/Gallery/photo_2025-08-17 18.42.02.jpeg";
import photo56 from "@/assets/Gallery/photo_2025-08-17 19.00.07.jpeg";
import photo58 from "@/assets/Gallery/photo_2025-08-17 19.00.34.jpeg";
import photo59 from "@/assets/Gallery/photo_2025-08-17 19.00.35.jpeg";
import photo60 from "@/assets/Gallery/photo_2025-08-17 19.00.39.jpeg";
import photo61 from "@/assets/Gallery/photo_2025-08-17 19.00.41.jpeg";
import photo62 from "@/assets/Gallery/photo_2025-08-17 19.00.43.jpeg";
import photo65 from "@/assets/Gallery/photo_2025-08-17 19.00.47.jpeg";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    {
      src: drAdiImage3,
      alt: "Dr. ADi Academy",
      title: "Mind Mastery & NLP Expert"
    },
    {
      src: photo1,
      alt: "Dr. ADi Academy Event",
      title: "Leadership Training Session"
    },
    {
      src: photo3,
      alt: "Dr. ADi Academy Training",
      title: "NLP Training Program"
    },
    {
      src: photo5,
      alt: "Dr. ADi Academy Seminar",
      title: "Personal Development Seminar"
    },
    {
      src: photo6,
      alt: "Dr. ADi Academy Workshop",
      title: "Success Mindset Workshop"
    },
    {
      src: photo7,
      alt: "Dr. ADi Academy Event",
      title: "Life Transformation Event"
    },
    {
      src: photo8,
      alt: "Dr. ADi Academy Session",
      title: "Breakthrough Session"
    },
    {
      src: photo9,
      alt: "Dr. ADi Academy Coaching",
      title: "Transformational Coaching"
    },
    {
      src: photo10,
      alt: "Dr. ADi Academy Workshop",
      title: "Advanced NLP Workshop"
    },
    {
      src: photo11,
      alt: "Dr. ADi Academy Event",
      title: "Peak Performance Training"
    },
    {
      src: photo12,
      alt: "Dr. ADi Academy Workshop",
      title: "Mindset Mastery Workshop"
    },
    {
      src: photo14,
      alt: "Dr. ADi Academy Event",
      title: "Transformational Speaking"
    },
    {
      src: photo15,
      alt: "Dr. ADi Academy Session",
      title: "Personal Breakthrough Workshop"
    },
    {
      src: photo16,
      alt: "Dr. ADi Academy Training",
      title: "NLP Master Practitioner Session"
    },
    {
      src: photo17,
      alt: "Dr. ADi Academy Event",
      title: "High Performance Coaching"
    },
    {
      src: photo18,
      alt: "Dr. ADi Academy Workshop",
      title: "Executive Leadership Program"
    },
    {
      src: photo19,
      alt: "Dr. ADi Academy Training",
      title: "Business Excellence Workshop"
    },
    {
      src: photo20,
      alt: "Dr. ADi Academy Event",
      title: "Strategic Mindset Training"
    },
    {
      src: photo22,
      alt: "Dr. ADi Academy Workshop",
      title: "Professional Growth Mastery"
    },
    {
      src: photo23,
      alt: "Dr. ADi Academy Event",
      title: "Peak Performance Summit"
    },
    {
      src: photo24,
      alt: "Dr. ADi Academy Training",
      title: "Advanced Leadership Workshop"
    },
    {
      src: photo25,
      alt: "Dr. ADi Academy Session",
      title: "Executive Mindset Training"
    },
    {
      src: photo26,
      alt: "Dr. ADi Academy Workshop",
      title: "Business Transformation Program"
    },
    {
      src: photo27,
      alt: "Dr. ADi Academy Event",
      title: "Corporate Excellence Summit"
    },
    {
      src: photo28,
      alt: "Dr. ADi Academy Training",
      title: "Strategic Leadership Course"
    },
    {
      src: photo29,
      alt: "Dr. ADi Academy Workshop",
      title: "Professional Development Intensive"
    },
    {
      src: photo30,
      alt: "Dr. ADi Academy Session",
      title: "High Impact Communication"
    },
    {
      src: photo31,
      alt: "Dr. ADi Academy Event",
      title: "Breakthrough Performance Training"
    },
    {
      src: photo32,
      alt: "Dr. ADi Academy Workshop",
      title: "Advanced NLP Techniques"
    },
    {
      src: photo33,
      alt: "Dr. ADi Academy Training",
      title: "Executive Presence Mastery"
    },
    {
      src: photo34,
      alt: "Dr. ADi Academy Session",
      title: "Leadership Innovation Program"
    },
    {
      src: photo35,
      alt: "Dr. ADi Academy Workshop",
      title: "Peak Performance Strategies"
    },
    {
      src: photo36,
      alt: "Dr. ADi Academy Event",
      title: "Transformational Leadership Summit"
    },
    {
      src: photo37,
      alt: "Dr. ADi Academy Training",
      title: "Business Excellence Masterclass"
    },
    {
      src: photo38,
      alt: "Dr. ADi Academy Workshop",
      title: "Mind Power Advanced Program"
    },
    {
      src: photo39,
      alt: "Dr. ADi Academy Session",
      title: "Corporate Wellness Workshop"
    },
    {
      src: photo40,
      alt: "Dr. ADi Academy Event",
      title: "Leadership Transformation Journey"
    },
    {
      src: photo41,
      alt: "Dr. ADi Academy Training",
      title: "Executive Coaching Session"
    },
    {
      src: photo42,
      alt: "Dr. ADi Academy Workshop",
      title: "Success Principles Mastery"
    },
    {
      src: photo43,
      alt: "Dr. ADi Academy Event",
      title: "Professional Growth Summit"
    },
    {
      src: photo44,
      alt: "Dr. ADi Academy Session",
      title: "Advanced Communication Skills"
    },
    {
      src: photo45,
      alt: "Dr. ADi Academy Training",
      title: "Leadership Excellence Summit"
    },
    {
      src: photo46,
      alt: "Dr. ADi Academy Workshop",
      title: "Business Transformation Intensive"
    },
    {
      src: photo47,
      alt: "Dr. ADi Academy Event",
      title: "Mind Mastery Advanced Program"
    },
    {
      src: photo48,
      alt: "Dr. ADi Academy Session",
      title: "Corporate Leadership Summit"
    },
    {
      src: photo49,
      alt: "Dr. ADi Academy Training",
      title: "Peak Performance Mastery"
    },
    {
      src: photo50,
      alt: "Dr. ADi Academy Workshop",
      title: "Leadership Development Workshop"
    },
    {
      src: photo51,
      alt: "Dr. ADi Academy Training",
      title: "Advanced Business Strategy"
    },
    {
      src: photo52,
      alt: "Dr. ADi Academy Session",
      title: "Executive Communication Skills"
    },
    {
      src: photo53,
      alt: "Dr. ADi Academy Event",
      title: "Professional Growth Intensive"
    },
    {
      src: photo54,
      alt: "Dr. ADi Academy Workshop",
      title: "Strategic Leadership Mastery"
    },
    {
      src: photo55,
      alt: "Dr. ADi Academy Event",
      title: "Business Transformation Excellence"
    },
    {
      src: photo56,
      alt: "Dr. ADi Academy Workshop",
      title: "Corporate Excellence Workshop"
    },
    {
      src: photo58,
      alt: "Dr. ADi Academy Session",
      title: "Executive Communication Mastery"
    },
    {
      src: photo59,
      alt: "Dr. ADi Academy Event",
      title: "Business Innovation Summit"
    },
    {
      src: photo60,
      alt: "Dr. ADi Academy Workshop",
      title: "Advanced Mind Programming"
    },
    {
      src: photo61,
      alt: "Dr. ADi Academy Training",
      title: "Peak Performance Leadership"
    },
    {
      src: photo62,
      alt: "Dr. ADi Academy Session",
      title: "Strategic Business Mastery"
    },
    {
      src: photo65,
      alt: "Dr. ADi Academy Training",
      title: "Executive Success Summit"
    },
    {
      src: drAdiImage2Png,
      alt: "Dr. ADi Academy",
      title: "Transformational Journey"
    }
  ];

  const handlePrevious = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our transformational journey through these moments captured in time. 
              Each image represents our commitment to empowering minds and transforming lives.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <CardContent className="p-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-[90vw] w-fit p-0 overflow-hidden">
          {selectedImageIndex !== null && (
            <div className="relative">
              <img 
                src={images[selectedImageIndex].src} 
                alt={images[selectedImageIndex].alt}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-lg font-semibold">{images[selectedImageIndex].title}</h3>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
