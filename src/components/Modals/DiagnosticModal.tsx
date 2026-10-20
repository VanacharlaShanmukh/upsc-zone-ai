import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Compass, Sparkles, Target, BookOpen, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [targetYear, setTargetYear] = useState('2026');
  const [optionalSubject, setOptionalSubject] = useState('Political Science & IR');
  const [dailyHours, setDailyHours] = useState('6-8 Hours');
  const [roadmapGenerated, setRoadmapGenerated] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = () => {
    setRoadmapGenerated(true);
    setStep(3);
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#BF693D', '#78856A', '#14283F'],
      });
    } catch (e) {}
  };

  const resetModal = () => {
    setStep(1);
    setRoadmapGenerated(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-atlas-navyDeep/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-atlas-card border border-atlas-border rounded-xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={resetModal}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-md text-atlas-textMuted hover:text-atlas-navy hover:bg-atlas-paperSecondary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pb-4 mb-6 border-b border-atlas-border">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-atlas-terracotta uppercase font-bold mb-1">
            <Compass className="w-4 h-4" />
            <span>KNOWLEDGE ATLAS // PREPARATION CALIBRATION</span>
          </div>
          <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-atlas-navy">
            {step === 3 ? 'Your Custom Preparation Roadmap' : 'Calibrate Your UPSC Expedition'}
          </h3>
          <p className="text-xs sm:text-sm text-atlas-textMuted mt-1">
            {step === 3
              ? 'Based on your parameters, the Atlas has structured your 4-phase preparation itinerary.'
              : 'Configure your target timeline to generate an actionable preparation blueprint.'}
          </p>
        </div>

        {/* Step 1: Target Year & Discipline */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase font-bold text-atlas-navy mb-2">
                1. SELECT YOUR EXAMINATION TARGET
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['2025 Sprint', '2026 Core', '2027 Foundation'].map((yr) => {
                  const isSel = targetYear.includes(yr.slice(0, 4));
                  return (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => setTargetYear(yr)}
                      className={`p-3 rounded-lg border text-xs sm:text-sm font-semibold transition-all text-center ${
                        isSel
                          ? 'bg-atlas-navy text-atlas-paper border-atlas-navy shadow-sm'
                          : 'bg-atlas-paperSecondary/40 text-atlas-navy border-atlas-border hover:border-atlas-terracotta'
                      }`}
                    >
                      {yr}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase font-bold text-atlas-navy mb-2">
                2. OPTIONAL DISCIPLINE
              </label>
              <select
                value={optionalSubject}
                onChange={(e) => setOptionalSubject(e.target.value)}
                className="w-full p-3 rounded-lg border border-atlas-border bg-atlas-card text-atlas-navy text-sm font-medium focus:ring-2 focus:ring-atlas-terracotta focus:outline-none"
              >
                <option value="Political Science & IR">Political Science & International Relations (PSIR)</option>
                <option value="History">Modern & Ancient History</option>
                <option value="Geography">Geography & Regional Planning</option>
                <option value="Sociology">Sociology & Social Institutions</option>
                <option value="Anthropology">Anthropology</option>
                <option value="Public Administration">Public Administration</option>
                <option value="Economics">Economics</option>
                <option value="Literature">Regional Literature</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-atlas-navy text-atlas-paper font-semibold text-sm hover:bg-atlas-navyDeep transition-colors shadow-atlas-sm"
              >
                <span>Continue to Time Budget</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Daily Hours & Mode */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase font-bold text-atlas-navy mb-2">
                3. DAILY COMMITTED STUDY BUDGET
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['3-4 Hours (Working)', '6-8 Hours (Dedicated)', '9+ Hours (Full-Time)'].map((hrs) => {
                  const isSel = dailyHours === hrs;
                  return (
                    <button
                      key={hrs}
                      type="button"
                      onClick={() => setDailyHours(hrs)}
                      className={`p-3 rounded-lg border text-xs font-semibold transition-all text-center ${
                        isSel
                          ? 'bg-atlas-terracotta text-atlas-paper border-atlas-terracotta shadow-sm'
                          : 'bg-atlas-paperSecondary/40 text-atlas-navy border-atlas-border hover:border-atlas-terracotta'
                      }`}
                    >
                      {hrs}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-atlas-paperSecondary/50 border border-atlas-border p-4 rounded-lg text-xs space-y-1.5 text-atlas-text">
              <p className="font-bold text-atlas-navy">DIAGNOSTIC SUMMARY:</p>
              <p>Target: <strong>UPSC CSE {targetYear}</strong></p>
              <p>Optional: <strong>{optionalSubject}</strong></p>
              <p>Time Commitment: <strong>{dailyHours}</strong></p>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-atlas-navy hover:text-atlas-terracotta"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleGenerate}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-atlas-terracotta text-atlas-paper font-semibold text-sm hover:bg-atlas-terracottaDark transition-colors shadow-atlas-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate My Atlas Roadmap</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Generated Roadmap Result */}
        {step === 3 && (
          <div className="space-y-5 animate-fadeIn">
            <div className="bg-atlas-sageLight border border-atlas-sage/40 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-atlas-sage text-atlas-paper flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-atlas-navy">Roadmap Generated Successfully</h4>
                <p className="text-xs text-atlas-sageDark font-mono">
                  CSE {targetYear} · {optionalSubject} · {dailyHours}
                </p>
              </div>
            </div>

            {/* Generated 4 Phases */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-lg border border-atlas-border bg-atlas-paperSecondary/30">
                <div className="flex items-center justify-between text-xs font-mono text-atlas-terracotta font-bold mb-1">
                  <span>MONTHS 1–3 // FOUNDATION</span>
                  <span>STATIC CORRIDOR</span>
                </div>
                <p className="text-xs text-atlas-text font-medium">
                  NCERT Masteries + GS Paper I & II core textbooks + Daily Current Affairs (45m).
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-atlas-border bg-atlas-paperSecondary/30">
                <div className="flex items-center justify-between text-xs font-mono text-atlas-terracotta font-bold mb-1">
                  <span>MONTHS 4–6 // DRILLS</span>
                  <span>PYQS & OPTIONAL PAPER I</span>
                </div>
                <p className="text-xs text-atlas-text font-medium">
                  Topic-wise MCQ elimination sessions (15/day) + First comprehensive coverage of {optionalSubject}.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-atlas-border bg-atlas-paperSecondary/30">
                <div className="flex items-center justify-between text-xs font-mono text-atlas-terracotta font-bold mb-1">
                  <span>MONTHS 7–9 // SYNTHESIS</span>
                  <span>MAINS ANSWER WRITING</span>
                </div>
                <p className="text-xs text-atlas-text font-medium">
                  GS-IV Ethics case studies + 2 Mains answers daily + Spaced repetition flashcards.
                </p>
              </div>

              <div className="p-3.5 rounded-lg border border-atlas-border bg-atlas-paperSecondary/30">
                <div className="flex items-center justify-between text-xs font-mono text-atlas-terracotta font-bold mb-1">
                  <span>MONTHS 10–12 // APEX</span>
                  <span>FULL SIMULATION & CSAT</span>
                </div>
                <p className="text-xs text-atlas-text font-medium">
                  12 Full-length GS Prelims simulations + CSAT speed drills + Final high-yield revision notes.
                </p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={resetModal}
                className="px-5 py-2.5 rounded bg-atlas-navy text-atlas-paper text-xs sm:text-sm font-semibold hover:bg-atlas-navyDeep transition-colors"
              >
                Access Free Dashboard Now →
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
