import { FeatureItem } from '../types';

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'ai-mock-tests',
    number: '01',
    title: 'AI-Powered Mock Tests',
    description: 'Practice exam-style questions, review your answers with in-depth elimination rationales, and identify concepts that deserve another look.',
    iconName: 'brain',
    coordinates: 'GRID · T-01 // GS PRELIMS',
    tag: 'ACTIVE RECALL',
    demoDetails: {
      badge: 'Sectional & Full-Length',
      metrics: 'Over 2,400+ Curated Questions',
      previewNote: 'Simulates UPSC marking (+2 / -0.66) with granular concept difficulty tagging.'
    }
  },
  {
    id: 'daily-current-affairs',
    number: '02',
    title: 'Daily Current Affairs',
    description: 'Explore concise current affairs summaries organized for focused learning and revision, directly mapped to GS-I through GS-IV syllabus themes.',
    iconName: 'newspaper',
    coordinates: 'GRID · T-02 // EDITORIAL PULSE',
    tag: 'SYLLABUS MAPPED',
    demoDetails: {
      badge: 'Daily 07:00 AM Dispatch',
      metrics: '3 Key Themes per Day',
      previewNote: 'Includes Prelims trivia bullets and Mains analytical dimensions with sample questions.'
    }
  },
  {
    id: 'smart-study-notes',
    number: '03',
    title: 'Smart Study Notes',
    description: 'Keep important concepts organized in clear notes that are easier to revisit. Formatted with visual tables, constitutional articles, and timeline charts.',
    iconName: 'book-open',
    coordinates: 'GRID · T-03 // KNOWLEDGE VAULT',
    tag: 'STATIC FOUNDATION',
    demoDetails: {
      badge: 'Modular Concept Sheets',
      metrics: '38 Core Subject Modules',
      previewNote: 'Features quick-export summaries and cross-reference links to authentic government reports.'
    }
  },
  {
    id: 'previous-year-questions',
    number: '04',
    title: 'Previous Year Questions',
    description: 'Practice PYQs by subject and topic to understand question patterns, trend shifts, and recurring traps spanning 2011 to 2024.',
    iconName: 'files',
    coordinates: 'GRID · T-04 // HISTORICAL ARCHIVE',
    tag: 'PATTERN RECOGNITION',
    demoDetails: {
      badge: '14-Year Deep Archive',
      metrics: '2,800+ Official PYQs',
      previewNote: 'Filter by micro-topics such as Fundamental Rights, Monetary Policy, and Western Ghats.'
    }
  },
  {
    id: 'study-planner',
    number: '05',
    title: 'Personalized Study Planner',
    description: 'Create a manageable routine around your target year, daily hours, optional subject, and existing revision priorities.',
    iconName: 'calendar-check',
    coordinates: 'GRID · T-05 // DISCIPLINE CADENCE',
    tag: 'TIME DISCIPLINE',
    demoDetails: {
      badge: 'Adaptive Routine Engine',
      metrics: 'Dynamic Weekly Targets',
      previewNote: 'Re-allocates missed sessions seamlessly without triggering backlog anxiety.'
    }
  },
  {
    id: 'performance-analytics',
    number: '06',
    title: 'Performance Analytics',
    description: 'Review practice results, track topic-wise accuracy, spot guesswork patterns, and decide exactly where to direct your next revision block.',
    iconName: 'chart-no-axes-combined',
    coordinates: 'GRID · T-06 // COGNITIVE RADAR',
    tag: 'DIAGNOSTIC INSIGHT',
    demoDetails: {
      badge: 'Diagnostic Telemetry',
      metrics: 'Subject Accuracy & Speed',
      previewNote: 'Visualizes your conceptual confidence score alongside syllabus coverage heatmaps.'
    }
  }
];
