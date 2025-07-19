import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TeamSection } from "./components/TeamSection";
import { Footer } from "./components/Footer";
import { FoundItPage } from "./components/FoundItPage";

export default function App() {
  const [currentView, setCurrentView] = useState<'sixthmind' | 'foundit'>('sixthmind');

  const navigateToFoundIt = () => {
    setCurrentView('foundit');
  };

  const navigateToSixthMind = () => {
    setCurrentView('sixthmind');
  };

  if (currentView === 'foundit') {
    return <FoundItPage onBack={navigateToSixthMind} />;
  }

  return (
    <div className="min-h-screen">
      <Header onNavigateToFoundIt={navigateToFoundIt} />
      <HeroSection onNavigateToFoundIt={navigateToFoundIt} />
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  );
}