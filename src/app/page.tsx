import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import EngineeringPillars from "@/components/EngineeringPillars";
import FlagshipProjects from "@/components/FlagshipProjects";
import ReaperConsole from "@/components/ReaperConsole";
import OpenSourceHub from "@/components/OpenSourceHub";
import TechMatrix from "@/components/TechMatrix";
import EngineeringPhilosophy from "@/components/EngineeringPhilosophy";
import GitHubTelemetry from "@/components/GitHubTelemetry";
import ContactHub from "@/components/ContactHub";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Sticky Telemetry Navbar */}
      <Nav />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero & Telemetry Banner */}
        <HeroSection />

        {/* 2. Core Engineering Pillars (Bento Grid) */}
        <EngineeringPillars />

        {/* 3. Flagship Production Systems */}
        <FlagshipProjects />

        {/* 4. Hermes Interactive Agent Console */}
        <ReaperConsole />

        {/* 5. More Open-Source Repositories */}
        <OpenSourceHub />

        {/* 6. Classified Tech Stack Matrix */}
        <TechMatrix />

        {/* 7. System Design Principles */}
        <EngineeringPhilosophy />

        {/* 8. Live GitHub Telemetry */}
        <GitHubTelemetry />

        {/* 9. Secure Contact & Transmission Hub */}
        <ContactHub />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
