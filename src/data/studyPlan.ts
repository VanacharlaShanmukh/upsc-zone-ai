import { StudyChecklistItem, SubjectProgress } from '../types';

export const INITIAL_CHECKLIST: StudyChecklistItem[] = [
  {
    id: 'task-1',
    text: 'Revise 16th Finance Commission Terms of Reference (GS-III)',
    duration: '45 mins',
    subject: 'Economy',
    completed: true,
    priority: 'high'
  },
  {
    id: 'task-2',
    text: 'Solve 25 MCQs: Modern Indian History (Tribal & Peasant Movements)',
    duration: '35 mins',
    subject: 'History',
    completed: true,
    priority: 'high'
  },
  {
    id: 'task-3',
    text: 'Read Great Nicobar Transshipment Project Environmental Brief',
    duration: '30 mins',
    subject: 'Environment',
    completed: false,
    priority: 'medium'
  },
  {
    id: 'task-4',
    text: 'Practice 2 Mains Answers: Basic Structure & Judicial Activism',
    duration: '60 mins',
    subject: 'Polity',
    completed: false,
    priority: 'high'
  },
  {
    id: 'task-5',
    text: 'CSAT Reading Comprehension Speed Drill (5 Passages)',
    duration: '30 mins',
    subject: 'CSAT',
    completed: false,
    priority: 'medium'
  }
];

export const SUBJECT_PROGRESS_DATA: SubjectProgress[] = [
  {
    subject: 'Indian Polity & Governance',
    code: 'GS-II',
    percentage: 84,
    topicsCovered: 42,
    totalTopics: 50,
    color: '#14283F'
  },
  {
    subject: 'Modern Indian History',
    code: 'GS-I',
    percentage: 72,
    topicsCovered: 26,
    totalTopics: 36,
    color: '#BF693D'
  },
  {
    subject: 'Macroeconomics & Budgeting',
    code: 'GS-III',
    percentage: 65,
    topicsCovered: 24,
    totalTopics: 37,
    color: '#78856A'
  },
  {
    subject: 'Environment & Biodiversity',
    code: 'GS-III',
    percentage: 90,
    topicsCovered: 27,
    totalTopics: 30,
    color: '#28323B'
  }
];

export const WEEKLY_HOURS = [
  { day: 'Mon', hours: 7.5, target: 8.0 },
  { day: 'Tue', hours: 8.2, target: 8.0 },
  { day: 'Wed', hours: 6.8, target: 8.0 },
  { day: 'Thu', hours: 8.5, target: 8.0 },
  { day: 'Fri', hours: 7.0, target: 8.0 },
  { day: 'Sat', hours: 9.0, target: 8.0 },
  { day: 'Sun', hours: 5.5, target: 6.0 }
];
