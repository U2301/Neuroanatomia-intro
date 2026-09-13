export type ScreenId = 'atlas' | 'backup';

export type MainTab = 'graph' | 'timeline' | 'disciplines' | 'flashcards';

export interface NeuroNode {
  id: number;
  label: string;
  period: string;
  category: 'Filosofía Antigua' | 'Fisiología S.XVIII-XIX' | 'Era Moderna' | 'Disciplinas';
  group: 'antigua' | 'fisiologia' | 'moderna' | 'disciplinas';
  desc: string;
  exam: string;
  colorGroup: string;
}

export interface NeuroEdge {
  from: number;
  to: number;
  label: string;
  arrows?: string;
}

export interface Flashcard {
  id: string;
  year: string;
  category: string;
  question: string;
  answer: string;
  examNote: string;
}

export interface TimelineMilestone {
  id: number;
  number: number;
  year: string;
  location: string;
  title: string;
  badge: string;
  description: string;
  examNote?: string;
  category: 'antigua' | 'moderna';
  highlightColor?: string;
}
