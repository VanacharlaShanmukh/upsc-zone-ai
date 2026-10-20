import React, { useState } from 'react';
import { FEATURES_DATA } from '../data/features';
import { FeatureItem } from '../types';
import {
  Brain,
  Newspaper,
  BookOpen,
  Files,
  CalendarCheck,
  BarChart3,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

interface FeaturesProps {
  onFeatureSelect?: (feature: FeatureItem) => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({
  onFeatureSelect,
  onNavigateToSection
}) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain':
        return <Brain className="w-6 h-6 text-atlas-terracotta" />;
      case 'newspaper':
        return <Newspaper className="w-6 h-6 text-atlas-terracotta" />;
      case 'book-open':
        return <BookOpen className="w-6 h-6 text-atlas-terracotta" />;
      case 'files':
        return <Files className="w-6 h-6 text-atlas-terracotta" />;
      case 'calendar-check':
        return <CalendarCheck className="w-6 h-6 text-atlas-terracotta" />;
      case 'chart-no-axes-combined':
      default:
        return <BarChart3 className="w-6 h-6 text-atlas-terracotta" />;
    }
  };

  const handleCardClick = (feature: FeatureItem) => {
    setSelectedFeature(feature);
    if (onFeatureSelect) {
      onFeatureSelect(feature);
    }
    // Also scroll smoothly to corresponding section if applicable
    if (feature.id === 'ai-mock-tests' || feature.id === 'previous-year-questions' || feature.id === 'smart-study-notes') {
      const el = document.getElementById('resources');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (feature.id === 'daily-current-affairs') {
      const el = document.getElementById('current-affairs');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (feature.id === 'study-planner' || feature.id === 'performance-analytics') {
      const el = document.getElementById('dashboard');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-atlas-paper border-b border-atlas-border relative overflow-hidden"
    >
      {/* Background Subtle Contour Detail */}
      <div className="absolute inset-0 pointer-events-none contour-lines-subtle opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atlas-paperSecondary border border-atlas-border text-[11px] font-mono tracking-coordinates text-atlas-navy uppercase font-semibold">
            <span>SECTION 02 // TOOLKIT</span>
            <span className="text-atlas-terracotta">·</span>
            <span>YOUR PREPARATION TOOLKIT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-atlas-navy font-normal tracking-tight">
            Everything You Need to Prepare with Purpose.
          </h2>

          <p className="text-base sm:text-lg text-atlas-textMuted leading-relaxed max-w-2xl font-normal">
            From your first study session to targeted revision, bring the essential parts of your
            preparation into one organized experience.
          </p>
        </div>

        {/* Feature Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES_DATA.map((feature) => (
            <div
              key={feature.id}
              onClick={() => handleCardClick(feature)}
              className="group cursor-pointer bg-atlas-card border border-atlas-border rounded-lg p-6 sm:p-7 shadow-atlas-sm hover:shadow-atlas-md hover:border-atlas-terracotta/50 transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between"
            >
              {/* Card Top Coordinate Stamp */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-atlas-border/60">
                  <span className="text-[10px] font-mono tracking-wider text-atlas-textMuted uppercase">
                    {feature.coordinates}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-atlas-paperSecondary text-atlas-navy">
                    {feature.tag}
                  </span>
                </div>

                {/* Card Icon & Title */}
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 rounded bg-atlas-paperSecondary/80 border border-atlas-border/80 flex items-center justify-center flex-shrink-0 group-hover:bg-atlas-terracotta/10 group-hover:border-atlas-terracotta/40 transition-colors">
                    {getIcon(feature.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-atlas-terracotta font-semibold">
                      TOOL {feature.number}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-atlas-navy leading-tight group-hover:text-atlas-terracotta transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-atlas-text leading-relaxed mt-2 mb-4">
                  {feature.description}
                </p>
              </div>

              {/* Card Bottom Action */}
              <div className="pt-3 border-t border-atlas-border/60 flex items-center justify-between text-xs font-medium">
                <span className="text-atlas-textMuted font-mono text-[11px]">
                  {feature.demoDetails.badge}
                </span>
                <span className="inline-flex items-center gap-1 text-atlas-terracotta font-semibold group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
