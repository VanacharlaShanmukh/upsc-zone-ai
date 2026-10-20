export interface JourneyMilestone {
  id: string;
  number: string;
  title: string;
  description: string;
  coordinates: string;
  phase: string;
  deliverables: string[];
  keyAction: string;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'brain' | 'newspaper' | 'book-open' | 'files' | 'calendar-check' | 'chart-no-axes-combined';
  coordinates: string;
  tag: string;
  demoDetails: {
    badge: string;
    metrics: string;
    previewNote: string;
  };
}

export interface HowItWorksStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  coordinates: string;
  keyOutputs: string[];
}

export interface CurrentAffairsArticle {
  id: string;
  category: string;
  syllabusPaper: string;
  headline: string;
  summary: string;
  readTime: string;
  date: string;
  coordinates: string;
  isFeatured?: boolean;
  fullArticle: {
    context: string;
    keyPoints: string[];
    prelimsPointer: string;
    mainsAngle: string;
    practiceQuestion: string;
  };
}

export interface PYQQuestion {
  id: string;
  year: string;
  paper: string;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  syllabusReference: string;
}

export interface StudyChecklistItem {
  id: string;
  text: string;
  duration: string;
  subject: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

export interface SubjectProgress {
  subject: string;
  code: string;
  percentage: number;
  topicsCovered: number;
  totalTopics: number;
  color: string;
}

export interface TestimonialItem {
  id: string;
  persona: string;
  role: string;
  badge: string;
  quote: string;
  routineHighlight: string;
  locationMarker: string;
}
