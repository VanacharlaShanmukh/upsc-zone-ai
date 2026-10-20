import React from 'react';
import { CURRENT_AFFAIRS_ARTICLES } from '../data/currentAffairs';
import { CurrentAffairsArticle } from '../types';
import { Newspaper, ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react';

interface CurrentAffairsSectionProps {
  onOpenArticle: (article: CurrentAffairsArticle) => void;
  onExploreAll: () => void;
}

export const CurrentAffairsSection: React.FC<CurrentAffairsSectionProps> = ({
  onOpenArticle,
  onExploreAll,
}) => {
  const featuredArticle = CURRENT_AFFAIRS_ARTICLES.find((a) => a.isFeatured) || CURRENT_AFFAIRS_ARTICLES[0];
  const sideArticles = CURRENT_AFFAIRS_ARTICLES.filter((a) => a.id !== featuredArticle.id);

  return (
    <section
      id="current-affairs"
      className="py-20 md:py-28 bg-atlas-paper border-b border-atlas-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-4 border-b border-atlas-border gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-coordinates text-atlas-terracotta uppercase font-bold">
              <Newspaper className="w-3.5 h-3.5" />
              <span>THE WORLD, IN CONTEXT // EDITORIAL DISPATCH</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-atlas-navy font-normal tracking-tight">
              Understand Today’s Issues.{' '}
              <span className="italic text-atlas-terracotta font-serif">
                Build Tomorrow’s Knowledge.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-atlas-textMuted max-w-2xl font-normal">
              Curated like a premier journal, mapped rigorously to the UPSC syllabus. Zero clickbait,
              zero trivial trivia—only high-yield constitutional, economic, and scientific context.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            type="button"
            className="inline-flex items-center gap-2 text-sm font-semibold text-atlas-navy hover:text-atlas-terracotta transition-colors group flex-shrink-0"
          >
            <span>Explore Current Affairs Archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Editorial Layout: Large Featured Story on Left + 2 Stacked Stories on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Article Card (7 columns) */}
          <div
            onClick={() => onOpenArticle(featuredArticle)}
            className="lg:col-span-7 bg-atlas-card border border-atlas-border rounded-lg p-7 sm:p-9 shadow-atlas-sm hover:shadow-atlas-md hover:border-atlas-terracotta/50 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-atlas-border/60">
                <span className="px-2.5 py-1 rounded bg-atlas-paperSecondary text-[11px] font-mono font-bold text-atlas-terracotta uppercase tracking-wider">
                  {featuredArticle.category}
                </span>
                <div className="flex items-center gap-3 text-xs font-mono text-atlas-textMuted">
                  <span>{featuredArticle.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-atlas-terracotta" />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </div>

              {/* Syllabus paper badge */}
              <p className="text-xs font-mono text-atlas-sageDark font-semibold mb-2">
                {featuredArticle.syllabusPaper}
              </p>

              {/* Headline */}
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-atlas-navy leading-tight group-hover:text-atlas-terracotta transition-colors mb-4">
                {featuredArticle.headline}
              </h3>

              {/* Summary */}
              <p className="text-sm sm:text-base text-atlas-text leading-relaxed font-normal mb-6">
                {featuredArticle.summary}
              </p>

              {/* Contextual Teaser Block */}
              <div className="bg-atlas-paperSecondary/40 border-l-2 border-atlas-terracotta p-4 rounded-r text-xs text-atlas-text space-y-2 mb-6">
                <p className="font-semibold text-atlas-navy">PRELIMS & MAINS ALIGNMENT:</p>
                <p className="text-atlas-textMuted leading-relaxed">
                  {featuredArticle.fullArticle.prelimsPointer}
                </p>
              </div>
            </div>

            {/* Read Summary Action */}
            <div className="pt-4 border-t border-atlas-border/60 flex items-center justify-between">
              <span className="text-[11px] font-mono text-atlas-textMuted">
                {featuredArticle.coordinates}
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-atlas-terracotta group-hover:translate-x-1 transition-transform">
                <span>Read Full Issue Analysis</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Right Column: Stacked Side Articles (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onOpenArticle(article)}
                className="bg-atlas-card border border-atlas-border rounded-lg p-6 shadow-atlas-sm hover:shadow-atlas-md hover:border-atlas-terracotta/50 transition-all cursor-pointer flex-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-atlas-border/60">
                    <span className="px-2 py-0.5 rounded bg-atlas-paperSecondary text-[10px] font-mono font-bold text-atlas-terracotta uppercase">
                      {article.category}
                    </span>
                    <span className="text-[11px] font-mono text-atlas-textMuted flex items-center gap-1">
                      <Clock className="w-3 h-3 text-atlas-terracotta" />
                      {article.readTime}
                    </span>
                  </div>

                  <p className="text-[11px] font-mono text-atlas-sageDark font-semibold mb-1">
                    {article.syllabusPaper}
                  </p>

                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-atlas-navy group-hover:text-atlas-terracotta transition-colors leading-snug mb-2.5">
                    {article.headline}
                  </h4>

                  <p className="text-xs sm:text-sm text-atlas-text leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-atlas-border/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-atlas-textMuted">
                    {article.coordinates}
                  </span>
                  <span className="text-atlas-terracotta font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read Summary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
