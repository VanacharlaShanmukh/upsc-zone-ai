import React, { useState } from 'react';
import { SAMPLE_STUDY_NOTE, SAMPLE_PYQ_QUESTIONS } from '../data/mockQuestions';
import { BookOpen, HelpCircle, CheckCircle, XCircle, RotateCcw, ArrowRight, Bookmark, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export const NotesAndPYQSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<{ attempts: number; correct: number; netMarks: number }>({
    attempts: 0,
    correct: 0,
    netMarks: 0,
  });

  const question = SAMPLE_PYQ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;

    setIsSubmitted(true);
    const isCorrect = selectedOption === question.correctIndex;

    setQuizScore((prev) => {
      const attempts = prev.attempts + 1;
      const correct = isCorrect ? prev.correct + 1 : prev.correct;
      const netMarks = Number((prev.netMarks + (isCorrect ? 2 : -0.66)).toFixed(2));
      return { attempts, correct, netMarks };
    });

    if (isCorrect) {
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#78856A', '#BF693D', '#14283F'],
        });
      } catch (e) {}
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % SAMPLE_PYQ_QUESTIONS.length);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
    setQuizScore({ attempts: 0, correct: 0, netMarks: 0 });
  };

  return (
    <section
      id="resources"
      className="py-20 md:py-28 bg-atlas-paperSecondary/30 border-b border-atlas-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atlas-card border border-atlas-border text-[11px] font-mono tracking-coordinates text-atlas-navy uppercase font-semibold">
            <span>SECTION 06 // ACTIVE RECALL</span>
            <span className="text-atlas-terracotta">·</span>
            <span>LEARNING NOTES & PYQ LABORATORY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-atlas-navy font-normal tracking-tight">
            Synthesize Theory. Test Retention.
          </h2>

          <p className="text-base sm:text-lg text-atlas-textMuted leading-relaxed max-w-2xl font-normal">
            Examine how archival study notes link directly into high-fidelity previous year question drills.
            Select an answer on the right to test UPSC elimination reasoning.
          </p>
        </div>

        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 columns): Sample Study Note Preview */}
          <div className="lg:col-span-5 bg-atlas-card border border-atlas-border rounded-lg p-6 sm:p-7 shadow-atlas-sm relative">
            
            {/* Note Meta Stamp */}
            <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-atlas-border/60 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 text-atlas-terracotta font-semibold">
                <Bookmark className="w-3.5 h-3.5" />
                <span>{SAMPLE_STUDY_NOTE.coordinates}</span>
              </div>
              <span className="text-atlas-textMuted">{SAMPLE_STUDY_NOTE.lastUpdated}</span>
            </div>

            {/* Note Title & Paper */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-atlas-sageDark font-semibold uppercase mb-1">
                <span>{SAMPLE_STUDY_NOTE.paper}</span>
                <span>·</span>
                <span>{SAMPLE_STUDY_NOTE.subject}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-atlas-navy leading-tight">
                {SAMPLE_STUDY_NOTE.title}
              </h3>
              <p className="text-[11px] font-mono text-atlas-textMuted mt-1">
                {SAMPLE_STUDY_NOTE.chapter}
              </p>
            </div>

            {/* Editorial Highlight Passage */}
            <div className="p-4 rounded bg-atlas-paperSecondary/60 border-l-4 border-atlas-terracotta my-4 text-xs sm:text-sm text-atlas-text leading-relaxed italic font-serif">
              “{SAMPLE_STUDY_NOTE.highlightPassage}”
            </div>

            <p className="text-xs text-atlas-text leading-relaxed mb-4">
              {SAMPLE_STUDY_NOTE.excerpt}
            </p>

            {/* Key Takeaways */}
            <div className="space-y-2 pt-3 border-t border-atlas-border/60">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-atlas-textMuted">
                CORE CONSTITUTIONAL ANCHORS
              </span>
              <ul className="space-y-1.5">
                {SAMPLE_STUDY_NOTE.keyTakeaways.map((point, i) => (
                  <li key={i} className="text-xs text-atlas-text flex items-start gap-2">
                    <span className="text-atlas-terracotta font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Associated Precedent Cases */}
            <div className="mt-4 pt-3 border-t border-atlas-border/50 text-[11px] font-mono text-atlas-textMuted flex flex-wrap gap-2">
              <span className="text-atlas-navy font-semibold">PRECEDENTS:</span>
              {SAMPLE_STUDY_NOTE.associatedCases.map((c, i) => (
                <span key={i} className="bg-atlas-paperSecondary px-1.5 py-0.5 rounded">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (7 columns): Interactive PYQ Quiz Interface */}
          <div className="lg:col-span-7 bg-atlas-card border border-atlas-border rounded-lg p-6 sm:p-8 shadow-atlas-md relative">
            
            {/* Quiz Header & Live Scorecard */}
            <div className="flex flex-wrap items-center justify-between pb-3.5 mb-5 border-b border-atlas-border gap-3">
              <div>
                <span className="text-[11px] font-mono text-atlas-terracotta uppercase font-bold tracking-wider">
                  QUESTION {currentQuestionIndex + 1} OF {SAMPLE_PYQ_QUESTIONS.length} · {question.year}
                </span>
                <p className="text-xs font-mono text-atlas-textMuted">
                  {question.subject} // {question.topic}
                </p>
              </div>

              {/* Live Marks Counter */}
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-atlas-paperSecondary border border-atlas-border text-atlas-navy">
                  NET MARKS:{' '}
                  <strong className={quizScore.netMarks >= 0 ? 'text-atlas-sageDark' : 'text-atlas-terracotta'}>
                    {quizScore.netMarks > 0 ? `+${quizScore.netMarks}` : quizScore.netMarks}
                  </strong>
                </span>
                <span className="text-atlas-textMuted hidden sm:inline">
                  Accuracy: {quizScore.attempts > 0 ? Math.round((quizScore.correct / quizScore.attempts) * 100) : 0}%
                </span>
              </div>
            </div>

            {/* Question Text */}
            <div className="mb-6">
              <p className="text-sm sm:text-base font-medium text-atlas-navy leading-relaxed whitespace-pre-line">
                {question.question}
              </p>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-3 mb-6">
              {question.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === question.correctIndex;
                let optionStyle = 'bg-atlas-card border-atlas-border hover:border-atlas-terracotta/60';

                if (isSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'bg-atlas-sageLight/70 border-atlas-sage text-atlas-navy font-semibold';
                  } else if (isSelected && !isCorrect) {
                    optionStyle = 'bg-atlas-terracottaLight border-atlas-terracotta text-atlas-navy';
                  } else {
                    optionStyle = 'bg-atlas-card border-atlas-border/50 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-atlas-paperSecondary border-atlas-navy text-atlas-navy font-semibold shadow-sm';
                }

                const optionLetter = String.fromCharCode(65 + idx);

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 ${optionStyle}`}
                  >
                    <span
                      className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs font-bold flex-shrink-0 ${
                        isSubmitted && isCorrect
                          ? 'bg-atlas-sage text-atlas-paper'
                          : isSubmitted && isSelected && !isCorrect
                          ? 'bg-atlas-terracotta text-atlas-paper'
                          : isSelected
                          ? 'bg-atlas-navy text-atlas-paper'
                          : 'bg-atlas-paperSecondary text-atlas-navy'
                      }`}
                    >
                      {optionLetter}
                    </span>
                    <span className="flex-1 pt-0.5 leading-snug">{option}</span>
                    {isSubmitted && isCorrect && (
                      <CheckCircle className="w-5 h-5 text-atlas-sageDark flex-shrink-0" />
                    )}
                    {isSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-atlas-terracotta flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Submit / Next Action Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-atlas-border">
              {!isSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  className={`px-5 py-2.5 rounded text-xs sm:text-sm font-semibold transition-all ${
                    selectedOption !== null
                      ? 'bg-atlas-navy text-atlas-paper hover:bg-atlas-navyDeep shadow-atlas-sm'
                      : 'bg-atlas-paperSecondary text-atlas-textMuted cursor-not-allowed border border-atlas-border'
                  }`}
                >
                  Submit Answer (+2 / -0.66)
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-atlas-terracotta text-atlas-paper text-xs sm:text-sm font-semibold hover:bg-atlas-terracottaDark transition-colors shadow-atlas-sm"
                >
                  <span>Next Question Drill</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-atlas-textMuted hover:text-atlas-navy transition-colors font-mono"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Drill</span>
              </button>
            </div>

            {/* Answer Explanation & Official UPSC Syllabus Reference */}
            {isSubmitted && (
              <div className="mt-5 p-4 rounded-lg bg-atlas-paperSecondary/60 border border-atlas-border space-y-2 transition-all animate-fadeIn">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-atlas-navy uppercase">
                    OFFICIAL ELIMINATION RATIONALE
                  </span>
                  <span className="text-atlas-terracotta">
                    CORRECT OPTION: ({String.fromCharCode(65 + question.correctIndex)})
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-atlas-text leading-relaxed">
                  {question.explanation}
                </p>
                <p className="text-[11px] font-mono text-atlas-sageDark pt-1 border-t border-atlas-border/50">
                  {question.syllabusReference}
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
