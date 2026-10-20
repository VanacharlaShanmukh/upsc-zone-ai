import React from 'react';
import { X, Shield, FileText, HelpCircle } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'faq' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-atlas-navyDeep/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-atlas-card border border-atlas-border rounded-xl shadow-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-md text-atlas-textMuted hover:text-atlas-navy hover:bg-atlas-paperSecondary transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-atlas-border">
              <Shield className="w-5 h-5 text-atlas-terracotta" />
              <h3 className="font-serif text-2xl font-bold text-atlas-navy">
                Privacy Policy
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-atlas-text space-y-3 leading-relaxed">
              <p>
                <strong>Last Updated: October 2026</strong>
              </p>
              <p>
                At UPSC ZONE AI, we uphold strict standards regarding candidate data privacy and study telemetry.
              </p>
              <h4 className="font-bold text-atlas-navy">1. Data We Collect</h4>
              <p>
                We record mock test response choices, revision intervals, and study checklist statuses strictly to generate personalized preparation telemetry. We do not sell or monetize personal candidate data.
              </p>
              <h4 className="font-bold text-atlas-navy">2. Local Storage & Security</h4>
              <p>
                Client-side diagnostic roadmaps and mock quiz states are securely managed within your browser session.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-atlas-border">
              <FileText className="w-5 h-5 text-atlas-terracotta" />
              <h3 className="font-serif text-2xl font-bold text-atlas-navy">
                Terms of Use
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-atlas-text space-y-3 leading-relaxed">
              <p>
                <strong>Last Updated: October 2026</strong>
              </p>
              <h4 className="font-bold text-atlas-navy">1. Educational Purpose</h4>
              <p>
                UPSC ZONE AI provides academic revision tools, algorithmic syllabus mapping, and previous year question drills for competitive examination aspirants.
              </p>
              <h4 className="font-bold text-atlas-navy">2. Independent Entity</h4>
              <p>
                UPSC ZONE AI is an independent academic preparation platform and has no official association, endorsement, or affiliation with the Union Public Service Commission (UPSC) or the Government of India.
              </p>
            </div>
          </div>
        )}

        {type === 'faq' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-atlas-border">
              <HelpCircle className="w-5 h-5 text-atlas-terracotta" />
              <h3 className="font-serif text-2xl font-bold text-atlas-navy">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="space-y-4 text-xs sm:text-sm text-atlas-text leading-relaxed">
              <div>
                <h4 className="font-bold text-atlas-navy">How does the Knowledge Atlas system work?</h4>
                <p className="text-atlas-textMuted mt-1">
                  The Atlas deconstructs the voluminous UPSC CSE syllabus into four linked quadrants: Foundation, Practice, Revision, and Readiness.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-atlas-navy">Is the diagnostic test free?</h4>
                <p className="text-atlas-textMuted mt-1">
                  Yes, the initial preparation calibration and study itinerary generator are 100% free and do not require any credit card.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-atlas-navy">How are previous year questions curated?</h4>
                <p className="text-atlas-textMuted mt-1">
                  Our questions are verified against official UPSC Preliminary keys and paired with granular statement-by-statement elimination rationales.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-atlas-border flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-atlas-navy text-atlas-paper text-xs font-semibold hover:bg-atlas-navyDeep"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
