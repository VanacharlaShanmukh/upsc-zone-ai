import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PreparationPath } from './components/PreparationPath';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { DashboardShowcase } from './components/DashboardShowcase';
import { CurrentAffairsSection } from './components/CurrentAffairsSection';
import { NotesAndPYQSection } from './components/NotesAndPYQSection';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DiagnosticModal } from './components/Modals/DiagnosticModal';
import { LoginModal } from './components/Modals/LoginModal';
import { ArticleModal } from './components/Modals/ArticleModal';
import { LegalModal } from './components/Modals/LegalModal';
import { CurrentAffairsArticle } from './types';
import { CURRENT_AFFAIRS_ARTICLES } from './data/currentAffairs';

export function App() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<CurrentAffairsArticle | null>(null);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'faq' | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const handleLoginSuccess = (name: string) => {
    setLoggedInUser(name);
    showToast(`Welcome back, ${name}! Your candidate telemetry is synced.`);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-atlas-paper text-atlas-text flex flex-col relative selection:bg-atlas-terracotta/20 selection:text-atlas-navy">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-atlas-navy text-atlas-paper px-4 py-3 rounded-lg shadow-atlas-lg border border-atlas-navyBorder flex items-center gap-3 animate-fadeIn text-xs sm:text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-atlas-sage animate-ping" />
          <span>{toast}</span>
          <button
            onClick={() => setToast(null)}
            className="text-atlas-paper/60 hover:text-atlas-paper ml-2 text-xs font-mono"
          >
            ×
          </button>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        onOpenDiagnostic={() => setDiagnosticOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
        loggedInUser={loggedInUser}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenDiagnostic={() => setDiagnosticOpen(true)}
          onExploreAtlas={() => scrollToSection('preparation-path')}
          onLaunchDrill={() => scrollToSection('resources')}
        />

        {/* Signature Interaction: The Self-Drawing Preparation Path */}
        <PreparationPath />

        {/* Section 02: Toolkit Features */}
        <Features onNavigateToSection={scrollToSection} />

        {/* Section 03: How It Works — Deep Navy Expedition Journey */}
        <HowItWorks />

        {/* Section 04: Product Showcase — Interactive Preparation Dashboard */}
        <DashboardShowcase onStartMockTest={() => scrollToSection('resources')} />

        {/* Section 05: Current Affairs — Editorial Reading Experience */}
        <CurrentAffairsSection
          onOpenArticle={(art) => setActiveArticle(art)}
          onExploreAll={() => setActiveArticle(CURRENT_AFFAIRS_ARTICLES[0])}
        />

        {/* Section 06: Learning Notes & PYQ Interactive Laboratory */}
        <NotesAndPYQSection />

        {/* Section 07: Testimonials & Aspirant Perspectives */}
        <Testimonials />

        {/* Section 08: Final Chapter CTA */}
        <FinalCTA
          onStartFree={() => setDiagnosticOpen(true)}
          onExploreTools={() => scrollToSection('features')}
        />
      </main>

      {/* Archival Editorial Footer */}
      <Footer
        onOpenPrivacy={() => setLegalType('privacy')}
        onOpenTerms={() => setLegalType('terms')}
        onOpenFAQ={() => setLegalType('faq')}
      />

      {/* Modals */}
      <DiagnosticModal
        isOpen={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
      />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />

      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />

    </div>
  );
}

export default App;
