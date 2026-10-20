import React from 'react';
import { CurrentAffairsArticle } from '../../types';
import { X, Clock, Bookmark, Share2, CheckCircle2, HelpCircle } from 'lucide-react';

interface ArticleModalProps {
  article: CurrentAffairsArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-atlas-navyDeep/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-atlas-card border border-atlas-border rounded-xl shadow-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-md text-atlas-textMuted hover:text-atlas-navy hover:bg-atlas-paperSecondary transition-colors"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-3 pb-3 mb-4 border-b border-atlas-border/70 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-atlas-paperSecondary font-bold text-atlas-terracotta uppercase">
            {article.category}
          </span>
          <span className="text-atlas-textMuted">{article.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1 text-atlas-textMuted">
            <Clock className="w-3.5 h-3.5 text-atlas-terracotta" />
            {article.readTime}
          </span>
        </div>

        {/* Syllabus Tag */}
        <p className="text-xs font-mono text-atlas-sageDark font-semibold uppercase mb-2">
          {article.syllabusPaper}
        </p>

        {/* Headline */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-atlas-navy leading-tight mb-4">
          {article.headline}
        </h2>

        {/* Executive Context */}
        <div className="bg-atlas-paperSecondary/40 border-l-4 border-atlas-terracotta p-4 rounded-r text-xs sm:text-sm text-atlas-text leading-relaxed mb-6">
          <p className="font-bold text-atlas-navy mb-1 uppercase font-mono text-xs">
            EXECUTIVE CONTEXT // ARTICLE 280 & POLICY MANDATE:
          </p>
          <p>{article.fullArticle.context}</p>
        </div>

        {/* Core Analytical Themes */}
        <div className="space-y-4 mb-6">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-atlas-navy">
            KEY ANALYTICAL DIMENSIONS
          </h3>
          <ul className="space-y-3">
            {article.fullArticle.keyPoints.map((point, i) => (
              <li key={i} className="text-xs sm:text-sm text-atlas-text flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-atlas-navy text-atlas-paper font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prelims Pointer Box */}
        <div className="p-4 rounded-lg bg-atlas-sageLight/70 border border-atlas-sage/40 space-y-1.5 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-atlas-sageDark uppercase">
            <CheckCircle2 className="w-4 h-4" />
            <span>HIGH-YIELD PRELIMS POINTER</span>
          </div>
          <p className="text-xs sm:text-sm text-atlas-navy leading-relaxed">
            {article.fullArticle.prelimsPointer}
          </p>
        </div>

        {/* Mains Dimension & Practice Question */}
        <div className="p-4 rounded-lg bg-atlas-paperSecondary/60 border border-atlas-border space-y-3 mb-6">
          <div>
            <span className="text-[10px] font-mono font-bold text-atlas-terracotta uppercase">
              MAINS ANALYTICAL ANGLE
            </span>
            <p className="text-xs sm:text-sm text-atlas-text mt-1">
              {article.fullArticle.mainsAngle}
            </p>
          </div>

          <div className="pt-3 border-t border-atlas-border/60">
            <span className="text-[10px] font-mono font-bold text-atlas-navy uppercase">
              PRACTICE MAINS QUESTION
            </span>
            <p className="text-xs sm:text-sm text-atlas-navy font-serif italic mt-1 leading-relaxed">
              “{article.fullArticle.practiceQuestion}”
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-atlas-border flex items-center justify-between">
          <span className="text-[11px] font-mono text-atlas-textMuted">
            {article.coordinates}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded bg-atlas-navy text-atlas-paper text-xs font-semibold hover:bg-atlas-navyDeep transition-colors"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
};
