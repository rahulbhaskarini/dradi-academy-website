import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import MyStory from "./pages/MyStory";
import Contact from "./pages/Contact";
import Trainings from "./pages/Trainings";
import OtherTrainings from "./pages/OtherTrainings";
import NotFound from "./pages/NotFound";

// Training Pages
import LawOfAttraction from "./pages/trainings/LawOfAttraction";
import NLP from "./pages/trainings/NLP";
import SubconsciousMind from "./pages/trainings/SubconsciousMind";
import MindPower from "./pages/trainings/MindPower";
import MindMastery from "./pages/trainings/MindMastery";
import FiveAMClub from "./pages/trainings/FiveAMClub";
import HabitMastery from "./pages/trainings/HabitMastery";
import MillionaireMind from "./pages/trainings/MillionaireMind";
import RewireYourMind from "./pages/trainings/RewireYourMind";

// Other Training Pages
import EmotionalIntelligence from "./pages/other-trainings/EmotionalIntelligence";
import PersonalCoaching from "./pages/other-trainings/PersonalCoaching";
import LoveYourselfHealYourself from "./pages/other-trainings/LoveYourselfHealYourself";
import SuperStudentWorkshop from "./pages/other-trainings/SuperStudentWorkshop";
import ArtOfIdealParenting from "./pages/other-trainings/ArtOfIdealParenting";
import SchoolCommunityPrograms from "./pages/other-trainings/SchoolCommunityPrograms";
import CorporateTraining from "./pages/other-trainings/CorporateTraining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/my-story" element={<MyStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/other-trainings" element={<OtherTrainings />} />
          
          {/* Training Routes */}
          <Route path="/trainings/law-of-attraction" element={<LawOfAttraction />} />
          <Route path="/trainings/nlp" element={<NLP />} />
          <Route path="/trainings/subconscious-mind" element={<SubconsciousMind />} />
          <Route path="/trainings/mind-power" element={<MindPower />} />
          <Route path="/trainings/mind-mastery" element={<MindMastery />} />
          <Route path="/trainings/5am-club" element={<FiveAMClub />} />
          <Route path="/trainings/habit-mastery" element={<HabitMastery />} />
          <Route path="/trainings/millionaire-mind" element={<MillionaireMind />} />
          <Route path="/trainings/rewire-your-mind" element={<RewireYourMind />} />
          
          {/* Other Training Routes */}
          <Route path="/other-trainings/emotional-intelligence" element={<EmotionalIntelligence />} />
          <Route path="/other-trainings/personal-coaching" element={<PersonalCoaching />} />
          <Route path="/other-trainings/love-yourself-heal-yourself" element={<LoveYourselfHealYourself />} />
          <Route path="/other-trainings/super-student-workshop" element={<SuperStudentWorkshop />} />
          <Route path="/other-trainings/art-of-ideal-parenting" element={<ArtOfIdealParenting />} />
          <Route path="/other-trainings/school-community-programs" element={<SchoolCommunityPrograms />} />
          <Route path="/other-trainings/corporate-training" element={<CorporateTraining />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
