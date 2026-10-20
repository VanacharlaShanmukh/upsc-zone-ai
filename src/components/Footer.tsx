import React from 'react';
import { ArrowUp, BookOpen, Compass, ShieldCheck } from 'lucide-react';
import { CompassRose } from './atlas/CompassRose';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenFAQ?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenFAQ,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-atlas-paperSecondary border-t border-atlas-border text-atlas-text pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Cartographic Coordinates Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Atlas Plate Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-12 border-b border-atlas-border/80 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-atlas-navy text-atlas-paper flex items-center justify-center font-serif text-lg font-bold">
              U
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-atlas-navy">
                UPSC ZONE AI
              </span>
              <p className="text-[10px] font-mono tracking-coordinates text-atlas-terracotta uppercase">
                THE KNOWLEDGE ATLAS FOR CIVIL SERVICES
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-atlas-textMuted">
            <span>COORD: 28°36'N · 77°12'E</span>
            <span>|</span>
            <span>EDITION: CSE 2026/27</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded bg-atlas-card border border-atlas-border hover:border-atlas-terracotta text-atlas-navy transition-colors flex items-center gap-1 focus:outline-none"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-sans font-semibold">Top</span>
            </button>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <p className="text-xs sm:text-sm text-atlas-textMuted leading-relaxed">
              Tools and resources to support a more focused, organized preparation journey across
              General Studies, CSAT, and Current Affairs.
            </p>
            <div className="pt-2 text-[11px] font-mono text-atlas-sageDark flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Independent Educational Platform</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-atlas-navy">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-atlas-text">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleSmoothScroll(e, '#hero')}
                  className="hover:text-atlas-terracotta transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={(e) => handleSmoothScroll(e, '#features')}
                  className="hover:text-atlas-terracotta transition-colors"
                >
                  Features Toolkit
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
                  className="hover:text-atlas-terracotta transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#dashboard"
                  onClick={(e) => handleSmoothScroll(e, '#dashboard')}
                  className="hover:text-atlas-terracotta transition-colors"
                >
                  Product Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleSmoothScroll(e, '#testimonials')}
                  className="hover:text-atlas-terracotta transition-colors"
                >
                  Aspirant Perspectives
                </a>
              </li>
            </ul>
          </div>

          {/* Study Resources */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-atlas-navy">
              Study Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-atlas-text">
              <li>
                <a
                  href="#resources"
                  onClick={(e) => handleSmoothScroll(e, '#resources')}
                  className="hover:text-atlas-terracotta transition-colors"
                >
                  AI Mock Tests
                </a>
              </li>
              <li>
                <a
                  href="#current-affairs"
                  onClick={(e) => handleSmoothScroll(e, '#current-affairs')}
                  className="hover:text-atlas-terracotta transition-colors"
                >
                  Daily Current Affairs
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  onClick={(e) => handleSmoothScroll(e, '#resources')}
                  className="hover:text-atlas-terracotta transition-colors"
                >
                  Smart Study Notes
                </a>
              </li>
              <li>
                <a
                  href="#resources"
                  onClick={(e) => handleSmoothScroll(e, '#resources')}
                  className="hover:text-atlas-terracotta transition-colors"
                >
                  Previous Year Questions (PYQs)
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-atlas-navy">
              Support & Ethics
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-atlas-text">
              <li>
                <button
                  type="button"
                  onClick={onOpenFAQ}
                  className="hover:text-atlas-terracotta transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <span className="text-atlas-textMuted text-xs">
                  Aspirant Desk: support@upsczone.ai (Placeholder)
                </span>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-atlas-terracotta transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-atlas-terracotta transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 border-t border-atlas-border flex flex-col md:flex-row items-center justify-between text-xs text-atlas-textMuted font-mono gap-4">
          <p>© 2026 UPSC ZONE AI · The Knowledge Atlas Design System. All rights reserved.</p>
          <p className="text-[11px] text-center md:text-right">
            UPSC ZONE AI is an independent academic preparation platform and is not affiliated with the Union Public Service Commission.
          </p>
        </div>

      </div>
    </footer>
  );
};
