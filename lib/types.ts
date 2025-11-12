export type LoveLanguage = 'A' | 'B' | 'C' | 'D' | 'E';

export interface QuestionPair {
  id: number;
  optionA: {
    text: string;
    language: LoveLanguage;
  };
  optionB: {
    text: string;
    language: LoveLanguage;
  };
}

export interface TestResults {
  A: number;
  B: number;
  C: number;
  D: number;
  E: number;
}

export interface LanguageInfo {
  name: string;
  description: string;
  icon: string;
}
