import React from 'react';
import { ArrowRight, Compass, Target, ShieldCheck, MapPin } from 'lucide-react';
import { CompassRose } from './atlas/CompassRose';

interface FinalCTAProps {
  onStartFree: () => void;
  onExploreTools: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStartFree, onExploreTools }) => {
  return (
    <section className="py-20 md:py-28 bg-atlas-navyDeep text-atlas-paper relative overflow-hidden border-b border-atlas-navyBorder">
      {/* Background Cartographic Contours and Latitude Grid */}
      <div className="absolute inset-0 atlas-grid-bg-dark opacity-35 pointer-events-none" />

      {/* Cartographic Curves Leading To Apex */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1200 500" fill="none">
          <path
            d="M 100,450 Q 400,300 600,200 T 1100,50"
            stroke="#BF693D"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <circle cx="600" cy="200" r="4" fill="#BF693D" />
          <circle cx="1100" cy="50" r="6" fill="#78856A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-7">
          
          {/* Chapter Stamp */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atlas-navyCard border border-atlas-navyBorder text-[11px] font-mono tracking-coordinates text-atlas-terracotta uppercase font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>FINAL CHAPTER // COMMENCEMENT</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-atlas-paper font-normal tracking-tight leading-tight">
            Your Next Chapter Starts with{' '}
            <span className="italic text-atlas-terracotta font-serif">
              a Clear Plan.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-atlas-paper/80 leading-relaxed max-w-2xl mx-auto font-normal">
            Build your routine, practice with purpose, and take the next step in your preparation.
            The Atlas is ready to chart your complete examination cycle.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onStartFree}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded bg-atlas-terracotta text-atlas-paper font-semibold text-base shadow-atlas-lg hover:bg-atlas-terracottaDark transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-paper group"
            >
              <span>Start Your Free Preparation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreTools}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded bg-atlas-navyCard text-atlas-paper font-semibold text-base border border-atlas-navyBorder hover:bg-atlas-navyCardHover transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-atlas-terracotta"
            >
              <span>Explore Learning Tools</span>
            </button>
          </div>

          {/* Supporting Trust & Ethics Statement */}
          <div className="pt-8 border-t border-atlas-navyBorder/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-atlas-paper/60">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-atlas-sage" />
              <span>Full Syllabus Alignment</span>
            </span>
            <span>·</span>
            <span>Instant Diagnostic Assessment</span>
            <span>·</span>
            <span>No Payment Required to Start</span>
          </div>

        </div>
      </div>
    </section>
  );
};
