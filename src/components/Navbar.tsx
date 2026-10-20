import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, BookOpen, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenDiagnostic: () => void;
  onOpenLogin: () => void;
  loggedInUser?: string | null;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiagnostic, onOpenLogin, loggedInUser }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'features', 'how-it-works', 'dashboard', 'resources', 'testimonials'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', sectionId: 'hero' },
    { name: 'Features', href: '#features', sectionId: 'features' },
    { name: 'Resources', href: '#resources', sectionId: 'resources' },
    { name: 'How It Works', href: '#how-it-works', sectionId: 'how-it-works' },
    { name: 'Testimonials', href: '#testimonials', sectionId: 'testimonials' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-atlas-paper/95 backdrop-blur-md shadow-atlas-sm border-b border-atlas-border py-3.5'
          : 'bg-atlas-paper/85 backdrop-blur-sm border-b border-atlas-border/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark & Title */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-terracotta rounded-md"
            aria-label="UPSC ZONE AI Home"
          >
            <div className="w-10 h-10 rounded bg-atlas-navy text-atlas-paper flex items-center justify-center relative shadow-sm border border-atlas-navy/80 group-hover:bg-atlas-navyDeep transition-colors">
              {/* Minimal Atlas Book Mark */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h7" />
              </svg>
              {/* Subtle terracotta pinpoint */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-atlas-terracotta rounded-full ring-2 ring-atlas-paper" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-tight text-atlas-navy font-bold leading-tight group-hover:text-atlas-navyDeep">
                UPSC ZONE AI
              </span>
              <span className="text-[10px] tracking-coordinates font-sans font-semibold text-atlas-terracotta uppercase">
                THE KNOWLEDGE ATLAS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-[14px] font-medium transition-colors relative rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-terracotta ${
                    isActive
                      ? 'text-atlas-terracotta font-semibold'
                      : 'text-atlas-text hover:text-atlas-terracotta'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-atlas-terracotta rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {loggedInUser ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-atlas-sageLight border border-atlas-sage/40 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-atlas-sage animate-pulse" />
                <span className="text-atlas-navy font-bold">{loggedInUser}</span>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                type="button"
                className="px-4 py-2 text-[14px] font-medium text-atlas-navy hover:text-atlas-terracotta transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-terracotta"
              >
                Log In
              </button>
            )}
            <button
              onClick={onOpenDiagnostic}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-[14px] font-semibold bg-atlas-navy text-atlas-paper hover:bg-atlas-navyDeep rounded transition-all shadow-atlas-sm hover:shadow-atlas-md focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-terracotta group"
            >
              <span>Start Free</span>
              <ArrowUpRight className="w-4 h-4 text-atlas-paper/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-atlas-navy hover:text-atlas-terracotta hover:bg-atlas-paperSecondary/60 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-terracotta"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-atlas-paper border-b border-atlas-border shadow-atlas-lg px-4 pt-3 pb-6 space-y-3 transition-all animate-fadeIn">
          <div className="py-2 border-b border-atlas-border/50 text-[11px] font-mono tracking-coordinates text-atlas-textMuted uppercase flex items-center justify-between">
            <span>SECTOR MAP // DIRECTORY</span>
            <span className="text-atlas-terracotta">LAT 28°36'N</span>
          </div>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded text-[15px] font-medium text-atlas-text hover:text-atlas-terracotta hover:bg-atlas-paperSecondary/50 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-atlas-textMuted font-mono">→</span>
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-atlas-border/60 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              type="button"
              className="w-full py-2.5 text-center text-sm font-semibold text-atlas-navy border border-atlas-border rounded hover:bg-atlas-paperSecondary/50 transition-colors"
            >
              Log In to Portal
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              type="button"
              className="w-full py-2.5 text-center text-sm font-semibold bg-atlas-navy text-atlas-paper rounded shadow-atlas-sm hover:bg-atlas-navyDeep transition-colors"
            >
              Start Free Preparation →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
