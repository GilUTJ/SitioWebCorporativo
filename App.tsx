import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TeamSection } from "./components/TeamSection";
import { FoundItIntegratedSection } from "./components/FoundItIntegratedSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <FoundItIntegratedSection />
      <Footer />
    </div>
  );
}