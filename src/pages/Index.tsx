import Layout from "@/components/Layout/Layout";
import HeroSection from "@/components/Sections/HeroSection";
import WhyAssociateSection from "@/components/Sections/WhyAssociateSection";
import TrainingsSection from "@/components/Sections/TrainingsSection";
import MagnetSection from "@/components/Sections/MagnetSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyAssociateSection />
      <TrainingsSection />
      <MagnetSection />
    </Layout>
  );
};

export default Index;
