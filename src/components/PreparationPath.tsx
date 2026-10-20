import React, { useState, useEffect, useRef } from 'react';
import { JOURNEY_MILESTONES } from '../data/journey';
import { JourneyMilestone } from '../types';
import { Check, ChevronRight, Compass, Sparkles, MapPin } from 'lucide-react';

interface PreparationPathProps {
  onSelectMilestone?: (milestone: JourneyMilestone) => void;
}

export const PreparationPath: React.FC<PreparationPathProps> = ({ onSelectMilestone }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.35); // Initial partial reveal
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const [selectedMilestone, setSelectedMilestone] = useState<JourneyMilestone | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress between entering viewport and leaving
      const totalDist = rect.height + windowHeight;
      const currentPos = windowHeight - rect.top;
      let ratio = currentPos / totalDist;
      ratio = Math.max(0.15, Math.min(1, ratio));

      setScrollProgress(ratio);

      // Determine active milestone based on progress
      if (ratio < 0.35) {
        setActiveMilestoneIndex(0);
      } else if (ratio < 0.58) {
        setActiveMilestoneIndex(1);
      } else if (ratio < 0.8) {
        setActiveMilestoneIndex(2);
      } else {
        setActiveMilestoneIndex(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMilestoneClick = (milestone: JourneyMilestone, index: number) => {
    setActiveMilestoneIndex(index);
    setSelectedMilestone(milestone);
    if (onSelectMilestone) {
      onSelectMilestone(milestone);
    }
  };

  return (
    <section
      id="preparation-path"
      ref={containerRef}
      className="py-20 md:py-28 bg-atlas-paperSecondary/60 border-b border-atlas-border relative overflow-hidden"
    >
      {/* Background cartographic contours */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path d="M0,150 C300,100 600,220 900,180 C1100,140 1200,200 1300,170" stroke="#14283F" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M0,350 C250,300 550,450 850,380 C1050,320 1200,420 1300,390" stroke="#BF693D" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atlas-card border border-atlas-border text-[11px] font-mono tracking-coordinates text-atlas-textMuted uppercase">
            <Compass className="w-3.5 h-3.5 text-atlas-terracotta" />
            <span>SIGNATURE ROUTE · ATLAS PREPARATION PATH</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-atlas-navy font-normal tracking-tight">
            The Aspirant’s Preparation Path:{' '}
            <span className="italic text-atlas-terracotta">Learn → Practice → Revise → Improve</span>
          </h2>

          <p className="text-base sm:text-lg text-atlas-textMuted leading-relaxed max-w-2xl mx-auto font-normal">
            As you journey through the syllabus, the Atlas charts every phase. Each milestone builds
            the intellectual stamina and precise eliminative reasoning required for the final merit list.
          </p>
        </div>

        {/* Desktop Interactive Self-Drawing Route (Horizontal Winding Path) */}
        <div className="hidden lg:block relative py-8">
          
          {/* SVG Vector Path Canvas */}
          <div className="relative w-full h-[180px]">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Guideline Track */}
              <path
                d="M 50,70 C 200,20 350,120 500,70 C 650,20 800,120 950,70"
                stroke="#DCD4C6"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Self-drawing active Terracotta Path */}
              <path
                ref={pathRef}
                d="M 50,70 C 200,20 350,120 500,70 C 650,20 800,120 950,70"
                stroke="#BF693D"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: Math.max(0, 1000 * (1 - scrollProgress)),
                  transition: 'stroke-dashoffset 0.4s ease-out',
                }}
              />

              {/* Waypoint Coordinates Along Path */}
              {/* Waypoint 1 (X: 50, Y: 70) */}
              <circle cx="50" cy="70" r={activeMilestoneIndex >= 0 ? 12 : 8} fill="#FFFDFA" stroke="#BF693D" strokeWidth="3" />
              <circle cx="50" cy="70" r="5" fill="#BF693D" />

              {/* Waypoint 2 (X: 350, Y: 95) */}
              <circle cx="350" cy="95" r={activeMilestoneIndex >= 1 ? 12 : 8} fill="#FFFDFA" stroke={activeMilestoneIndex >= 1 ? '#BF693D' : '#DCD4C6'} strokeWidth="3" />
              <circle cx="350" cy="95" r="5" fill={activeMilestoneIndex >= 1 ? '#BF693D' : '#A89D8B'} />

              {/* Waypoint 3 (X: 650, Y: 45) */}
              <circle cx="650" cy="45" r={activeMilestoneIndex >= 2 ? 12 : 8} fill="#FFFDFA" stroke={activeMilestoneIndex >= 2 ? '#BF693D' : '#DCD4C6'} strokeWidth="3" />
              <circle cx="650" cy="45" r="5" fill={activeMilestoneIndex >= 2 ? '#BF693D' : '#A89D8B'} />

              {/* Waypoint 4 (X: 950, Y: 70) */}
              <circle cx="950" cy="70" r={activeMilestoneIndex >= 3 ? 14 : 9} fill="#FFFDFA" stroke={activeMilestoneIndex >= 3 ? '#78856A' : '#DCD4C6'} strokeWidth="3" />
              <circle cx="950" cy="70" r="6" fill={activeMilestoneIndex >= 3 ? '#78856A' : '#A89D8B'} />
            </svg>
          </div>

          {/* Milestone Cards Grid */}
          <div className="grid grid-cols-4 gap-6 mt-4">
            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const isActive = activeMilestoneIndex === idx;
              const isPast = activeMilestoneIndex > idx;

              return (
                <div
                  key={milestone.id}
                  onClick={() => handleMilestoneClick(milestone, idx)}
                  className={`cursor-pointer transition-all duration-300 p-5 rounded-lg border text-left relative group ${
                    isActive
                      ? 'bg-atlas-card border-atlas-terracotta shadow-atlas-md scale-[1.02]'
                      : isPast
                      ? 'bg-atlas-card/90 border-atlas-sage/50 shadow-atlas-sm hover:border-atlas-terracotta/60'
                      : 'bg-atlas-card/60 border-atlas-border hover:border-atlas-terracotta/40'
                  }`}
                >
                  {/* Top indicator tag */}
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-atlas-border/60">
                    <span className="font-mono text-xs font-bold text-atlas-terracotta tracking-wider">
                      PHASE {milestone.number}
                    </span>
                    <span className="text-[10px] font-mono text-atlas-textMuted uppercase truncate max-w-[110px]">
                      {milestone.phase}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-atlas-navy mb-2 group-hover:text-atlas-terracotta transition-colors">
                    {milestone.title}
                  </h3>

                  <p className="text-xs text-atlas-text leading-relaxed line-clamp-3 mb-4">
                    {milestone.description}
                  </p>

                  <div className="pt-2 border-t border-atlas-border/50 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-atlas-textMuted truncate">{milestone.coordinates}</span>
                    <span className="text-atlas-terracotta font-semibold group-hover:translate-x-0.5 transition-transform">
                      Inspect →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Route */}
        <div className="lg:hidden space-y-6 relative pl-6 before:absolute before:top-4 before:bottom-4 before:left-2.5 before:w-0.5 before:bg-atlas-border">
          {JOURNEY_MILESTONES.map((milestone, idx) => {
            const isActive = activeMilestoneIndex === idx;

            return (
              <div
                key={milestone.id}
                onClick={() => handleMilestoneClick(milestone, idx)}
                className={`relative p-5 rounded-lg border transition-all ${
                  isActive
                    ? 'bg-atlas-card border-atlas-terracotta shadow-atlas-md'
                    : 'bg-atlas-card/80 border-atlas-border'
                }`}
              >
                {/* Vertical node marker pin */}
                <div
                  className={`absolute -left-[27px] top-5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isActive
                      ? 'bg-atlas-terracotta border-atlas-paper text-atlas-paper'
                      : 'bg-atlas-paperSecondary border-atlas-border text-atlas-textMuted'
                  }`}
                >
                  <span className="text-[9px] font-bold font-mono">{idx + 1}</span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-atlas-terracotta mb-1">
                  <span>MILESTONE {milestone.number}</span>
                  <span className="text-atlas-textMuted">{milestone.phase}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-atlas-navy mb-1.5">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-atlas-text leading-relaxed mb-3">
                  {milestone.description}
                </p>

                <div className="flex items-center justify-between text-xs text-atlas-textMuted pt-2 border-t border-atlas-border/60">
                  <span className="font-mono text-[10px]">{milestone.coordinates}</span>
                  <span className="text-atlas-terracotta font-semibold text-xs">Tap to view deliverables →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Milestone Deliverables Popover / Details Modal */}
        {selectedMilestone && (
          <div className="mt-8 bg-atlas-card border border-atlas-terracotta/50 rounded-lg p-6 shadow-atlas-lg transition-all animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-atlas-border gap-3">
              <div>
                <span className="text-xs font-mono text-atlas-terracotta tracking-wider uppercase font-semibold">
                  DETAILED DELIVERABLES // PHASE {selectedMilestone.number}: {selectedMilestone.phase}
                </span>
                <h4 className="font-serif text-2xl font-bold text-atlas-navy mt-1">
                  {selectedMilestone.title}
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-atlas-textMuted bg-atlas-paperSecondary px-2.5 py-1 rounded">
                  COORDINATES: {selectedMilestone.coordinates}
                </span>
                <button
                  onClick={() => setSelectedMilestone(null)}
                  type="button"
                  className="text-xs font-semibold px-3 py-1 bg-atlas-paperSecondary hover:bg-atlas-border rounded text-atlas-navy transition-colors"
                >
                  Close ×
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedMilestone.deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-atlas-paperSecondary/40 border border-atlas-border/60">
                  <div className="w-5 h-5 rounded-full bg-atlas-sage text-atlas-paper flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-atlas-text font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
