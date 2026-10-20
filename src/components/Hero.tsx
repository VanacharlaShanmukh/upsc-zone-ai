import React from 'react';
import { ArrowRight, CheckCircle2, Compass, Sparkles, BookOpen, Target, Award, MapPin } from 'lucide-react';
import { CompassRose } from './atlas/CompassRose';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onExploreAtlas: () => void;
  onLaunchDrill: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDiagnostic,
  onExploreAtlas,
  onLaunchDrill,
}) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-atlas-border"
    >
      {/* Background cartographic decorations */}
      <div className="absolute top-8 left-8 hidden lg:block opacity-40 font-mono text-[11px] tracking-coordinates text-atlas-textMuted select-none">
        <span>REF: ATLAS-IN-2026</span>
        <br />
        <span>SECTOR: 28°36'N · 77°12'E</span>
      </div>

      <div className="absolute top-8 right-8 hidden lg:block opacity-40 font-mono text-[11px] tracking-coordinates text-atlas-textMuted text-right select-none">
        <span>MERIDIAN: 82°30'E IST</span>
        <br />
        <span>ELEVATION: 216M MSL</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atlas-paperSecondary border border-atlas-border shadow-atlas-sm">
              <span className="w-2 h-2 rounded-full bg-atlas-terracotta animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-editorial font-sans text-atlas-navy uppercase">
                YOUR SMARTER UPSC JOURNEY STARTS HERE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] text-atlas-navy font-normal tracking-tight">
              Discipline Today.{' '}
              <span className="italic text-atlas-terracotta font-serif">
                A Better India
              </span>{' '}
              Tomorrow.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-atlas-text font-normal leading-relaxed max-w-2xl">
              Build a more focused preparation routine with AI-powered practice, organized current affairs,
              smarter revision, and a clear view of your progress.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenDiagnostic}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded bg-atlas-navy text-atlas-paper font-semibold text-base shadow-atlas-md hover:bg-atlas-navyDeep hover:shadow-atlas-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-terracotta group"
              >
                <span>Start Your Free Preparation</span>
                <ArrowRight className="w-4 h-4 text-atlas-terracotta group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreAtlas}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-atlas-paperSecondary/80 text-atlas-navy font-semibold text-base border border-atlas-border hover:bg-atlas-paperSecondary hover:border-atlas-terracotta/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-terracotta"
              >
                <Compass className="w-4 h-4 text-atlas-terracotta" />
                <span>Explore the Atlas</span>
              </button>
            </div>

            {/* Three Concise Value Points */}
            <div className="pt-4 border-t border-atlas-border/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-atlas-sageLight text-atlas-sageDark flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-atlas-text">
                  Practice with purpose.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-atlas-sageLight text-atlas-sageDark flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-atlas-text">
                  Revise with clarity.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-atlas-sageLight text-atlas-sageDark flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-atlas-text">
                  Track your progress.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Knowledge Atlas Cartographic Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-atlas-card border border-atlas-border rounded-lg p-5 sm:p-7 shadow-atlas-lg">
              
              {/* Atlas Sheet Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-atlas-border/60">
                <div className="flex items-center gap-2 font-mono text-[11px] text-atlas-textMuted tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-atlas-terracotta inline-block" />
                  <span>KNOWLEDGE ATLAS · PLATE NO. 01</span>
                </div>
                <div className="flex items-center gap-2">
                  <CompassRose size={26} variant="light" />
                  <span className="text-[10px] font-mono text-atlas-textMuted">82.5°E</span>
                </div>
              </div>

              {/* Cartographic Graphic Container */}
              <div className="relative h-[340px] sm:h-[380px] w-full bg-atlas-paperSecondary/40 rounded border border-atlas-border/70 overflow-hidden flex items-center justify-center">
                
                {/* Background Grid Lines */}
                <div className="absolute inset-0 atlas-grid-bg opacity-50 pointer-events-none" />

                {/* Subcontinent Cartographic SVG */}
                <svg
                  className="w-full h-full object-contain p-2"
                  viewBox="0 0 400 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Latitude / Longitude lines */}
                  <line x1="20" y1="110" x2="380" y2="110" stroke="#14283F" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
                  <line x1="20" y1="200" x2="380" y2="200" stroke="#14283F" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
                  <line x1="20" y1="290" x2="380" y2="290" stroke="#14283F" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
                  
                  <line x1="120" y1="20" x2="120" y2="420" stroke="#14283F" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
                  <line x1="200" y1="20" x2="200" y2="420" stroke="#14283F" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
                  <line x1="280" y1="20" x2="280" y2="420" stroke="#14283F" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />

                  {/* Tropic of Cancer label */}
                  <text x="25" y="206" fill="#BF693D" fontSize="8" fontFamily="Manrope" fontWeight="600" opacity="0.75" letterSpacing="0.05em">
                    TROPIC OF CANCER 23°26'N
                  </text>

                  {/* Fine Cartographic Topographic Contours of India */}
                  <path
                    d="M190,40 C210,35 240,60 250,90 C260,110 280,120 310,140 C340,160 360,190 350,220 C330,240 300,220 280,240 C260,260 250,290 230,330 C210,370 190,400 185,410 C180,400 160,370 140,330 C120,280 110,240 95,210 C80,180 85,150 110,130 C130,120 150,110 160,80 Z"
                    fill="#FFFDFA"
                    fillOpacity="0.7"
                    stroke="#DCD4C6"
                    strokeWidth="1.2"
                  />
                  
                  {/* Inner Contour Lines */}
                  <path
                    d="M185,60 C200,55 225,75 235,100 C245,120 265,130 285,150 C270,175 250,190 230,220 C215,250 205,280 185,340 C165,280 155,250 140,220 C120,190 100,175 85,150 C105,130 125,120 135,100 Z"
                    stroke="#14283F"
                    strokeWidth="0.75"
                    strokeDasharray="4 3"
                    opacity="0.3"
                  />

                  {/* Preparation Route: Prayagraj -> Delhi -> LBSNAA Mussoorie */}
                  <path
                    d="M170,320 Q190,260 230,210 T180,135 T175,85"
                    stroke="#BF693D"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                    className="animate-dash-flow"
                  />

                  {/* Architectural Silhouette Motif at bottom base: Restrained Parliament Colonnade */}
                  <g opacity="0.35" transform="translate(130, 375)">
                    <rect x="0" y="14" width="140" height="3" fill="#14283F" />
                    <rect x="10" y="5" width="120" height="2" fill="#14283F" />
                    {/* Columns */}
                    <line x1="20" y1="7" x2="20" y2="14" stroke="#14283F" strokeWidth="1.5" />
                    <line x1="35" y1="7" x2="35" y2="14" stroke="#14283F" strokeWidth="1.5" />
                    <line x1="50" y1="7" x2="50" y2="14" stroke="#14283F" strokeWidth="1.5" />
                    <line x1="65" y1="7" x2="65" y2="14" stroke="#14283F" strokeWidth="1.5" />
                    <line x1="80" y1="7" x2="80" y2="14" stroke="#14283F" strokeWidth="1.5" />
                    <line x1="95" y1="7" x2="95" y2="14" stroke="#14283F" strokeWidth="1.5" />
                    <line x1="110" y1="7" x2="110" y2="14" stroke="#14283F" strokeWidth="1.5" />
                    <line x1="120" y1="7" x2="120" y2="14" stroke="#14283F" strokeWidth="1.5" />
                    {/* Center Dome */}
                    <path d="M60,5 C60,0 80,0 80,5 Z" fill="#14283F" />
                  </g>

                  {/* Marker 1: Prayagraj Hub */}
                  <g transform="translate(230, 210)">
                    <circle cx="0" cy="0" r="4" fill="#14283F" />
                    <circle cx="0" cy="0" r="8" stroke="#14283F" strokeWidth="0.8" opacity="0.4" />
                    <text x="12" y="3" fill="#28323B" fontSize="9" fontFamily="Manrope" fontWeight="600">
                      PRAYAGRAJ · FOUNDATION
                    </text>
                  </g>

                  {/* Marker 2: New Delhi Secretariat */}
                  <g transform="translate(180, 135)">
                    <circle cx="0" cy="0" r="4.5" fill="#BF693D" />
                    <circle cx="0" cy="0" r="10" stroke="#BF693D" strokeWidth="1" strokeDasharray="2 2" className="animate-spin" style={{ animationDuration: '10s' }} />
                    <text x="-95" y="-6" fill="#14283F" fontSize="9.5" fontFamily="Manrope" fontWeight="700">
                      NEW DELHI · 28°36'N
                    </text>
                    <text x="-95" y="6" fill="#68716F" fontSize="8" fontFamily="Manrope">
                      Central Knowledge Hub
                    </text>
                  </g>

                  {/* Marker 3: Apex Destination - LBSNAA Mussoorie */}
                  <g transform="translate(175, 85)">
                    <circle cx="0" cy="0" r="5" fill="#78856A" />
                    <circle cx="0" cy="0" r="12" stroke="#78856A" strokeWidth="1" opacity="0.6" />
                    <polygon points="0,-16 4,-7 -4,-7" fill="#BF693D" />
                    <text x="14" y="-3" fill="#14283F" fontSize="9.5" fontFamily="Manrope" fontWeight="700">
                      LBSNAA · MUSSOORIE
                    </text>
                    <text x="14" y="9" fill="#BF693D" fontSize="8" fontFamily="Manrope" fontWeight="600">
                      30°27'N · ACADEMY APEX
                    </text>
                  </g>

                  {/* Marker 4: Southern Tech & Library Node (Bengaluru) */}
                  <g transform="translate(170, 320)">
                    <circle cx="0" cy="0" r="3.5" fill="#14283F" opacity="0.8" />
                    <text x="10" y="3" fill="#68716F" fontSize="8.5" fontFamily="Manrope">
                      BENGALURU · 12°58'N
                    </text>
                  </g>
                </svg>

                {/* Floating Telemetry Study Card */}
                <div className="absolute bottom-3 left-3 right-3 bg-atlas-card/95 backdrop-blur-sm border border-atlas-border rounded p-3 shadow-atlas-md">
                  <div className="flex items-center justify-between text-[11px] font-mono text-atlas-textMuted pb-1.5 mb-1.5 border-b border-atlas-border/50">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-atlas-sage animate-ping" />
                      <span className="font-semibold text-atlas-navy">NEXT LEARNING GOAL</span>
                    </span>
                    <span className="text-atlas-terracotta font-semibold">CADENCE: ON TRACK</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-atlas-navy">GS-II: Basic Structure & Federalism</p>
                      <p className="text-[11px] text-atlas-textMuted">Active 15-MCQ Drill Ready · +2 / -0.66</p>
                    </div>
                    <button
                      onClick={onLaunchDrill}
                      type="button"
                      className="px-2.5 py-1 text-xs font-semibold bg-atlas-terracotta text-atlas-paper rounded hover:bg-atlas-terracottaDark transition-colors shadow-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-atlas-navy"
                    >
                      Launch Drill →
                    </button>
                  </div>
                </div>
              </div>

              {/* Atlas Metadata Footer */}
              <div className="mt-3.5 pt-3 border-t border-atlas-border/60 flex items-center justify-between text-[11px] font-mono text-atlas-textMuted">
                <span>PROJECTION: LAMBERT CONICAL</span>
                <span className="text-atlas-sageDark font-semibold">VERIFIED SYLLABUS MAPPING</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
