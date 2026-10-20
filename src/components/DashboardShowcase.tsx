import React, { useState } from 'react';
import { INITIAL_CHECKLIST, SUBJECT_PROGRESS_DATA, WEEKLY_HOURS } from '../data/studyPlan';
import { StudyChecklistItem } from '../types';
import {
  CheckSquare,
  Square,
  BarChart2,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Target,
  Award,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DashboardShowcaseProps {
  onStartMockTest?: () => void;
}

export const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({ onStartMockTest }) => {
  const [checklist, setChecklist] = useState<StudyChecklistItem[]>(INITIAL_CHECKLIST);

  const toggleTask = (id: string) => {
    setChecklist((prev) => {
      const updated = prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
      const newlyCompleted = updated.find((t) => t.id === id)?.completed;
      if (newlyCompleted) {
        // Trigger delicate confetti burst if all tasks completed!
        const allDone = updated.every((t) => t.completed);
        if (allDone) {
          try {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#BF693D', '#78856A', '#14283F'],
            });
          } catch (e) {
            // Ignore if canvas unavailable
          }
        }
      }
      return updated;
    });
  };

  const completedCount = checklist.filter((t) => t.completed).length;
  const completionPercentage = Math.round((completedCount / checklist.length) * 100);

  return (
    <section
      id="dashboard"
      className="py-20 md:py-28 bg-atlas-paperSecondary/40 border-b border-atlas-border relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atlas-card border border-atlas-border text-[11px] font-mono tracking-coordinates text-atlas-navy uppercase font-semibold">
            <span>SECTION 04 // PRODUCT DEMO</span>
            <span className="text-atlas-terracotta">·</span>
            <span>INTELLIGENT PREPARATION DASHBOARD</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-atlas-navy font-normal tracking-tight">
            A Clear View of Your Preparation.
          </h2>

          <p className="text-base sm:text-lg text-atlas-textMuted leading-relaxed max-w-2xl font-normal">
            Bring study goals, practice sessions, and revision priorities into one organized workspace.
            Interact with the live checklist below to test real-time progress calculations.
          </p>
        </div>

        {/* Dashboard Frame Container */}
        <div className="bg-atlas-card border border-atlas-border rounded-xl shadow-atlas-lg overflow-hidden">
          
          {/* Top Atlas Telemetry Bar */}
          <div className="bg-atlas-paperSecondary/80 px-6 py-3.5 border-b border-atlas-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-atlas-sage animate-pulse" />
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="font-bold text-atlas-navy">CANDIDATE: ADITYA S.</span>
                <span className="text-atlas-textMuted">|</span>
                <span className="text-atlas-terracotta font-semibold">TARGET: CSE 2026</span>
                <span className="text-atlas-textMuted">|</span>
                <span className="text-atlas-textMuted">OPTIONAL: POL. SCIENCE</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-atlas-textMuted">
              <span className="bg-atlas-card px-2.5 py-1 rounded border border-atlas-border">
                PREPARATION DAY: 142 OF 365
              </span>
              <span className="text-atlas-sageDark font-semibold hidden sm:inline">
                STATUS: DISCIPLINED CADENCE
              </span>
            </div>
          </div>

          {/* Main Dashboard Interface Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Top Stat Row: Daily Progress, Mock Performance, Next Action */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Daily Goal Completion Card */}
              <div className="bg-atlas-paperSecondary/30 border border-atlas-border rounded-lg p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-atlas-textMuted uppercase font-semibold">
                    TODAY’S SYLLABUS GOAL
                  </span>
                  <span className="text-xs font-mono font-bold text-atlas-terracotta">
                    {completedCount} / {checklist.length} COMPLETED
                  </span>
                </div>

                <div className="my-3 flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-bold text-atlas-navy">
                    {completionPercentage}%
                  </span>
                  <span className="text-xs text-atlas-textMuted font-medium">Daily Target Achieved</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-atlas-border/60 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-atlas-sage transition-all duration-500 ease-out"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
              </div>

              {/* Mock Test Performance Card */}
              <div className="bg-atlas-paperSecondary/30 border border-atlas-border rounded-lg p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-atlas-textMuted uppercase font-semibold">
                    LATEST MOCK SCORE
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-atlas-sageLight text-atlas-sageDark">
                    82ND PERCENTILE
                  </span>
                </div>

                <div className="my-3 flex items-baseline gap-2">
                  <span className="font-serif text-4xl font-bold text-atlas-navy">
                    114<span className="text-lg font-sans text-atlas-textMuted font-normal">/200</span>
                  </span>
                  <span className="text-xs text-atlas-sageDark font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +12 net vs. prior
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-atlas-textMuted pt-2 border-t border-atlas-border/50">
                  <span>Accuracy: <strong className="text-atlas-navy">76.4%</strong></span>
                  <span>Negative Impact: <strong className="text-atlas-terracotta">-8.0</strong></span>
                </div>
              </div>

              {/* Next Immediate Action Card */}
              <div className="bg-atlas-navy text-atlas-paper rounded-lg p-5 flex flex-col justify-between shadow-atlas-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-atlas-terracotta uppercase font-bold tracking-wider">
                    PRIORITY ACTION
                  </span>
                  <Clock className="w-4 h-4 text-atlas-terracotta" />
                </div>

                <div className="my-2">
                  <h4 className="font-serif text-xl font-bold text-atlas-paper">
                    GS Paper II Sectional Mock
                  </h4>
                  <p className="text-xs text-atlas-paper/70 mt-1">
                    25 Questions · Polity, Basic Structure & Centre-State Relations
                  </p>
                </div>

                <button
                  onClick={onStartMockTest}
                  type="button"
                  className="mt-2 w-full py-2 px-3 rounded bg-atlas-terracotta text-atlas-paper text-xs font-semibold hover:bg-atlas-terracottaDark transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
                >
                  <span>Start Practice Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Middle Section: Interactive Study Checklist + Subject-wise Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column (7 cols): Interactive Study Checklist */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-atlas-border">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-atlas-terracotta" />
                    <h3 className="font-serif text-xl font-bold text-atlas-navy">
                      Today’s Study Checklist
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-atlas-textMuted">
                    Click items to toggle completion
                  </span>
                </div>

                <div className="space-y-2.5">
                  {checklist.map((task) => (
                    <div
                      key={task.id}
                      onClick={() => toggleTask(task.id)}
                      className={`cursor-pointer p-3.5 rounded-lg border transition-all flex items-start gap-3 select-none ${
                        task.completed
                          ? 'bg-atlas-paperSecondary/50 border-atlas-sage/40 opacity-75'
                          : 'bg-atlas-card border-atlas-border hover:border-atlas-terracotta/50 shadow-atlas-sm'
                      }`}
                    >
                      <button
                        type="button"
                        aria-label={task.completed ? 'Mark task as incomplete' : 'Mark task as complete'}
                        className="mt-0.5 text-atlas-navy hover:text-atlas-terracotta flex-shrink-0"
                      >
                        {task.completed ? (
                          <CheckSquare className="w-5 h-5 text-atlas-sageDark" />
                        ) : (
                          <Square className="w-5 h-5 text-atlas-border hover:text-atlas-terracotta" />
                        )}
                      </button>

                      <div className="flex-1">
                        <p
                          className={`text-sm font-medium ${
                            task.completed
                              ? 'line-through text-atlas-textMuted'
                              : 'text-atlas-text'
                          }`}
                        >
                          {task.text}
                        </p>
                        <div className="flex items-center gap-3 mt-1.5 text-xs text-atlas-textMuted font-mono">
                          <span className="px-1.5 py-0.5 rounded bg-atlas-paperSecondary text-[10px] uppercase">
                            {task.subject}
                          </span>
                          <span>{task.duration}</span>
                          {task.priority === 'high' && (
                            <span className="text-atlas-terracotta font-semibold">HIGH PRIORITY</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (5 cols): Subject Coverage & Weekly Hours */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Subject-wise Progress */}
                <div className="bg-atlas-paperSecondary/30 border border-atlas-border rounded-lg p-5 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-atlas-border">
                    <h4 className="font-serif text-lg font-bold text-atlas-navy">
                      Subject Syllabus Coverage
                    </h4>
                    <span className="text-[11px] font-mono text-atlas-textMuted">CORE PAPERS</span>
                  </div>

                  <div className="space-y-3.5">
                    {SUBJECT_PROGRESS_DATA.map((subj) => (
                      <div key={subj.subject} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-atlas-navy">
                            {subj.subject}
                          </span>
                          <span className="font-mono text-atlas-textMuted">
                            {subj.percentage}% ({subj.topicsCovered}/{subj.totalTopics})
                          </span>
                        </div>
                        <div className="w-full bg-atlas-border/50 h-2 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${subj.percentage}%`,
                              backgroundColor: subj.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weekly Study Hours Bars */}
                <div className="bg-atlas-paperSecondary/30 border border-atlas-border rounded-lg p-5">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-atlas-border">
                    <h4 className="font-serif text-lg font-bold text-atlas-navy">
                      Weekly Study Hours
                    </h4>
                    <span className="text-xs font-mono font-bold text-atlas-terracotta">
                      51.7 HRS TOTAL
                    </span>
                  </div>

                  <div className="flex items-end justify-between h-28 pt-4 px-2">
                    {WEEKLY_HOURS.map((d) => {
                      const heightPercent = Math.min(100, Math.round((d.hours / 10) * 100));
                      return (
                        <div key={d.day} className="flex flex-col items-center gap-1.5 flex-1">
                          <span className="text-[10px] font-mono text-atlas-textMuted">
                            {d.hours}h
                          </span>
                          <div className="w-5 bg-atlas-border/40 rounded-t h-20 flex items-end overflow-hidden">
                            <div
                              className="w-full bg-atlas-navy rounded-t transition-all hover:bg-atlas-terracotta"
                              style={{ height: `${heightPercent}%` }}
                            />
                          </div>
                          <span className="text-xs font-semibold text-atlas-navy">
                            {d.day}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Bottom Card Footer Notice */}
          <div className="bg-atlas-paperSecondary/60 px-6 py-3 border-t border-atlas-border flex items-center justify-between text-[11px] font-mono text-atlas-textMuted">
            <span>DATA TELEMETRY: ILLUSTRATIVE SAMPLE CANDIDATE PROFILE</span>
            <span className="text-atlas-sageDark font-semibold">ALL METRICS SYNCHRONIZED</span>
          </div>

        </div>

      </div>
    </section>
  );
};
