import { JourneyMilestone } from '../types';

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'foundation',
    number: '01',
    title: 'Build Your Foundation',
    description: 'Deconstruct standard reference texts, NCERT fundamentals, and core syllabus themes into manageable daily study maps.',
    coordinates: '28°36\'N 77°12\'E · NEW DELHI',
    phase: 'CORE SYLLABUS MAPPING',
    deliverables: [
      'NCERT Class 6–12 conceptual synthesis',
      'Constitutional Law, Economy & History foundational notes',
      'Subject-wise knowledge checklist with zero blind spots'
    ],
    keyAction: 'Initialize Daily Baseline'
  },
  {
    id: 'practice',
    number: '02',
    title: 'Practice with Purpose',
    description: 'Transform passive reading into active cognitive recall through AI-curated sectional mock tests calibrated to UPSC CSE standards.',
    coordinates: '25°27\'N 81°50\'E · PRAYAGRAJ',
    phase: 'DAILY RECALL & SECTIONAL DRILLS',
    deliverables: [
      '15-minute daily high-yield topic quizzes',
      'Option elimination reasoning breakdown',
      'Negative marking & risk calibration analyzer'
    ],
    keyAction: 'Launch Sectional Drill'
  },
  {
    id: 'revision',
    number: '03',
    title: 'Revise Strategically',
    description: 'Anchor volatile facts and dynamic current events through algorithmic spaced repetition and synchronized revision prompts.',
    coordinates: '12°58\'N 77°35\'E · BENGALURU',
    phase: 'SYNCHRONIZED CURRENT AFFAIRS',
    deliverables: [
      'Editorial issue briefs mapped to GS-I, II, III & IV',
      'Dynamic flashcards for constitutional articles & summits',
      '7-day and 30-day automated memory refresher alerts'
    ],
    keyAction: 'Review Revision Queue'
  },
  {
    id: 'improve',
    number: '04',
    title: 'Measure Your Progress',
    description: 'Convert test analytics into tactical clarity—detect weakness clusters, measure accuracy by syllabus paper, and refine exam temperament.',
    coordinates: '30°27\'N 78°04\'E · LBSNAA MERIDIAN',
    phase: 'SIMULATION & ADAPTIVE FEEDBACK',
    deliverables: [
      'Full-length 100-question GS Prelims simulation',
      'Paper II CSAT speed & comprehension audit',
      'Actionable focus plan for the upcoming study cycle'
    ],
    keyAction: 'Inspect Readiness Radar'
  }
];
