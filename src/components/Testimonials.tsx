import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Compass, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-atlas-paper border-b border-atlas-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atlas-paperSecondary border border-atlas-border text-[11px] font-mono tracking-coordinates text-atlas-navy uppercase font-semibold">
            <span>SECTION 07 // PERSPECTIVES</span>
            <span className="text-atlas-terracotta">·</span>
            <span>STRUCTURE OVER NOISE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-atlas-navy font-normal tracking-tight">
            A More Organized Way to Prepare.
          </h2>

          <p className="text-base sm:text-lg text-atlas-textMuted leading-relaxed max-w-2xl font-normal">
            Designed for disciplined aspirants who understand that consistency, rigorous revision,
            and honest error analysis outweigh voluminous unorganized reading.
          </p>
        </div>

        {/* 3 Perspective Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-atlas-card border border-atlas-border rounded-lg p-6 sm:p-7 shadow-atlas-sm flex flex-col justify-between hover:border-atlas-terracotta/40 transition-all"
            >
              <div>
                {/* Top Badge & Marker */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-atlas-border/60">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-atlas-terracotta">
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-mono text-atlas-textMuted">
                    {item.locationMarker}
                  </span>
                </div>

                {/* Quote Icon */}
                <Quote className="w-6 h-6 text-atlas-border mb-3" />

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-atlas-text font-serif italic leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              {/* Persona Footer & Routine Metric */}
              <div className="pt-4 border-t border-atlas-border/60 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-atlas-navy">{item.persona}</h4>
                    <p className="text-xs text-atlas-textMuted">{item.role}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-atlas-paperSecondary border border-atlas-border flex items-center justify-center text-xs font-mono font-bold text-atlas-navy">
                    {item.persona.charAt(0)}
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1 text-[11px] text-atlas-sageDark font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>{item.routineHighlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Transparency Notice */}
        <div className="mt-10 p-4 rounded bg-atlas-paperSecondary/50 border border-atlas-border/70 text-center text-xs text-atlas-textMuted font-mono">
          <span className="text-atlas-navy font-semibold">CANDIDATE ARCHIVE NOTICE:</span> Perspectives represent real structural preparation workflows modelled on typical UPSC candidate profiles (working professionals, full-time aspirants, and peer mentors). No fabricated selections or artificial AIR claims are made.
        </div>

      </div>
    </section>
  );
};
