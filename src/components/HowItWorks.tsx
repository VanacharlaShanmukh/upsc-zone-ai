import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/howItWorks';
import { CompassRose } from './atlas/CompassRose';
import { Compass, CheckCircle2, ChevronRight, Target, BookOpen, Layers, BarChart } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-5 h-5 text-atlas-terracotta" />;
      case 1:
        return <BookOpen className="w-5 h-5 text-atlas-terracotta" />;
      case 2:
        return <Layers className="w-5 h-5 text-atlas-terracotta" />;
      case 3:
      default:
        return <BarChart className="w-5 h-5 text-atlas-terracotta" />;
    }
  };

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 bg-atlas-navyDeep text-atlas-paper relative overflow-hidden border-b border-atlas-navyBorder"
    >
      {/* Background Cartographic Grid and Contour overlay */}
      <div className="absolute inset-0 atlas-grid-bg-dark opacity-30 pointer-events-none" />

      {/* Background SVG Elevation Curves */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
          <path d="M-100,100 C200,80 500,280 850,150 C1200,30 1350,220 1600,180" stroke="#F4EFE5" strokeWidth="0.75" strokeDasharray="6 4" />
          <path d="M-100,300 C300,240 600,450 950,320 C1300,200 1450,380 1600,340" stroke="#BF693D" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M-100,550 C250,480 650,680 1000,550 C1350,420 1500,600 1600,560" stroke="#F4EFE5" strokeWidth="0.6" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atlas-navyCard border border-atlas-navyBorder text-[11px] font-mono tracking-coordinates text-atlas-paper/80 uppercase">
            <span className="w-2 h-2 rounded-full bg-atlas-terracotta" />
            <span>YOUR JOURNEY, ONE STEP AT A TIME</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-atlas-paper font-normal tracking-tight">
            From Learning to <span className="italic text-atlas-terracotta font-serif">Real Progress.</span>
          </h2>

          <p className="text-base sm:text-lg text-atlas-paper/75 leading-relaxed max-w-2xl font-normal">
            Preparing for the Civil Services is not an erratic sprint—it is a calibrated expedition.
            Follow a proven sequence that turns vast syllabus territory into steady intellectual clarity.
          </p>
        </div>

        {/* Interactive Step Switcher & Detailed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 4 Milestones Selector */}
          <div className="lg:col-span-5 space-y-3">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-4 sm:p-5 rounded-lg border transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-atlas-navyCard border-atlas-terracotta shadow-atlas-navy'
                      : 'bg-atlas-navyCard/40 border-atlas-navyBorder hover:bg-atlas-navyCard/70 hover:border-atlas-paper/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded flex items-center justify-center font-mono text-sm font-bold flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-atlas-terracotta text-atlas-paper'
                          : 'bg-atlas-navyDeep border border-atlas-navyBorder text-atlas-paper/60'
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between text-[11px] font-mono text-atlas-paper/50 mb-1">
                        <span>{step.coordinates}</span>
                        {isSelected && (
                          <span className="text-atlas-terracotta font-semibold">ACTIVE</span>
                        )}
                      </div>
                      <h3
                        className={`font-serif text-xl font-bold transition-colors ${
                          isSelected ? 'text-atlas-paper' : 'text-atlas-paper/80'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs text-atlas-paper/70 mt-1 line-clamp-2">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: In-depth Step Canvas & Cartographic Detail */}
          <div className="lg:col-span-7">
            <div className="bg-atlas-navyCard border border-atlas-navyBorder rounded-lg p-6 sm:p-8 shadow-atlas-navy relative overflow-hidden">
              
              {/* Card Header Stamp */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-atlas-navyBorder">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-atlas-terracotta/20 border border-atlas-terracotta/40 flex items-center justify-center">
                    {getStepIcon(activeStep)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-atlas-terracotta uppercase tracking-wider font-semibold">
                      STEP {HOW_IT_WORKS_STEPS[activeStep].number} EXPEDITION DISPATCH
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-atlas-paper">
                      {HOW_IT_WORKS_STEPS[activeStep].title}
                    </h3>
                  </div>
                </div>

                <CompassRose size={36} variant="dark" />
              </div>

              {/* Step Subtitle & Full Description */}
              <div className="space-y-4 mb-8">
                <div className="inline-block px-3 py-1 rounded bg-atlas-navyDeep border border-atlas-navyBorder text-xs font-mono text-atlas-sage">
                  FOCUS: {HOW_IT_WORKS_STEPS[activeStep].subtitle}
                </div>
                <p className="text-sm sm:text-base text-atlas-paper/85 leading-relaxed">
                  {HOW_IT_WORKS_STEPS[activeStep].description}
                </p>
              </div>

              {/* Tangible Key Outputs / Deliverables */}
              <div className="space-y-3 pt-6 border-t border-atlas-navyBorder">
                <h4 className="text-xs font-mono uppercase tracking-wider text-atlas-paper/60 font-semibold">
                  TANGIBLE LEARNING DELIVERABLES
                </h4>
                <div className="space-y-2.5">
                  {HOW_IT_WORKS_STEPS[activeStep].keyOutputs.map((output, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded bg-atlas-navyDeep/60 border border-atlas-navyBorder/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-atlas-terracotta/20 text-atlas-terracotta flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-atlas-paper/90 font-medium">
                        {output}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expedition Progress Footnote */}
              <div className="mt-8 pt-4 border-t border-atlas-navyBorder/60 flex items-center justify-between text-[11px] font-mono text-atlas-paper/50">
                <span>CADENCE: SYSTEMATIC PROGRESSION</span>
                <span className="text-atlas-terracotta">STEP {activeStep + 1} OF 4</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
