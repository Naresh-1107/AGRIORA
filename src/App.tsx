import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { IntelligenceSection } from './components/IntelligenceSection';
import { FarmCopilot } from './components/FarmCopilot';
import { FarmJourney } from './components/FarmJourney';
import { IntelligenceDashboard } from './components/IntelligenceDashboard';
import { MarketMap } from './components/MarketMap';
import { SupplyChainFlow } from './components/SupplyChainFlow';
import { LossReductionSankey } from './components/LossReductionSankey';
import { SustainabilityMetrics } from './components/SustainabilityMetrics';
import { LanguageAccess } from './components/LanguageAccess';
import { TrustLoop } from './components/TrustLoop';
import { ImpactSection } from './components/ImpactSection';
import { FinalCinematicCTA } from './components/FinalCinematicCTA';
import { Footer } from './components/Footer';
import { PlatformModal } from './components/PlatformModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { Scroll3DAssembly } from './components/Scroll3DAssembly';

export default function App() {
  const [isPlatformModalOpen, setIsPlatformModalOpen] = useState(false);
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div id="home" className="min-h-screen bg-[#08090c] text-slate-100 selection:bg-amber-400/30 selection:text-amber-200 font-sans">
        
        {/* Luxury Smart Living Floating Glass Navigation */}
        <Navbar
          onOpenPlatform={() => setIsPlatformModalOpen(true)}
          onNavigate={scrollToSection}
        />

        {/* Hero Section with 3D Architectural Living Estate */}
        <HeroSection
          onExploreIntelligence={() => scrollToSection('intelligence')}
          onSeeHowItWorks={() => scrollToSection('journey')}
          onExploreEcosystem={() => scrollToSection('problem')}
          onOpenPlatform={() => setIsPlatformModalOpen(true)}
        />

        {/* Problem Section: 5 Connected Decisions with 3D assembly */}
        <ProblemSection />

        {/* Intelligence Section: Unified Living Pillars */}
        <Scroll3DAssembly direction="up" delay={50}>
          <IntelligenceSection />
        </Scroll3DAssembly>

        {/* Farm Copilot: AI Plant Doctor & Holographic Scanner */}
        <FarmCopilot />

        {/* Connected 7-Stage Farm Lifecycle */}
        <Scroll3DAssembly direction="scatter" delay={60}>
          <FarmJourney />
        </Scroll3DAssembly>

        {/* Farm Intelligence Live Console */}
        <div id="dashboard">
          <Scroll3DAssembly direction="up" delay={80}>
            <IntelligenceDashboard />
          </Scroll3DAssembly>
        </div>

        {/* Fair Market & Institutional Escrow */}
        <Scroll3DAssembly direction="up" delay={60}>
          <MarketMap />
        </Scroll3DAssembly>

        {/* Autonomous Supply Chain Intelligence */}
        <Scroll3DAssembly direction="right" delay={70}>
          <SupplyChainFlow />
        </Scroll3DAssembly>

        {/* Food Loss Preservation Sankey */}
        <Scroll3DAssembly direction="left" delay={70}>
          <LossReductionSankey />
        </Scroll3DAssembly>

        {/* Sustainability Metrics */}
        <Scroll3DAssembly direction="up" delay={60}>
          <SustainabilityMetrics />
        </Scroll3DAssembly>

        {/* Multilingual Voice & Regional Access (Language Switcher) */}
        <LanguageAccess />

        {/* Human + AI Trust Loop */}
        <Scroll3DAssembly direction="up" delay={70}>
          <TrustLoop />
        </Scroll3DAssembly>

        {/* Impact Statements */}
        <Scroll3DAssembly direction="scatter" delay={80}>
          <ImpactSection />
        </Scroll3DAssembly>

        {/* Final Cinematic Call to Action */}
        <Scroll3DAssembly direction="up" delay={90}>
          <FinalCinematicCTA
            onLaunchPlatform={() => setIsPlatformModalOpen(true)}
            onViewArchitecture={() => setIsArchitectureModalOpen(true)}
          />
        </Scroll3DAssembly>

        {/* Architectural Footer */}
        <Footer
          onOpenPlatform={() => setIsPlatformModalOpen(true)}
          onViewArchitecture={() => setIsArchitectureModalOpen(true)}
          onNavigate={scrollToSection}
        />

        {/* Interactive Farmer Console Workspace Modal */}
        <PlatformModal
          isOpen={isPlatformModalOpen}
          onClose={() => setIsPlatformModalOpen(false)}
        />

        {/* Technical Architecture & Pipeline Modal */}
        <ArchitectureModal
          isOpen={isArchitectureModalOpen}
          onClose={() => setIsArchitectureModalOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}
