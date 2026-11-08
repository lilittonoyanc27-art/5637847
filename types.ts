export interface BilingualText {
  es: string;
  hy: string;
}

export interface QuizOption {
  key: 'A' | 'B' | 'C' | 'D';
  es: string;
  hy: string;
}

export interface QuizQuestion {
  id: number;
  category: 'generos_lirica' | 'recursos' | 'narrativa' | 'teatro' | 'analisis';
  categoryTitle: BilingualText;
  contextText?: {
    title: BilingualText;
    es: string;
    hy: string;
  };
  question: BilingualText;
  options: QuizOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: BilingualText;
  incorrectExplanations?: Partial<Record<'A' | 'B' | 'C' | 'D', BilingualText>>;
}

export interface TableRow {
  col1: BilingualText;
  col2: BilingualText;
  col3?: BilingualText;
}

export interface StudyConcept {
  id: string;
  letter?: string;
  title: BilingualText;
  explanation: BilingualText;
  example?: {
    es: string;
    hy: string;
    explanation?: BilingualText;
  };
  bullets?: BilingualText[];
  table?: {
    headers: BilingualText[];
    rows: TableRow[];
  };
  note?: BilingualText;
}

export interface ExamQA {
  id: number;
  question: BilingualText;
  answer: BilingualText;
  tags?: string[];
}

export interface TrueFalseItem {
  id: number;
  statement: BilingualText;
  isTrue: boolean;
  justification: BilingualText;
}

export interface FillBlankItem {
  id: number;
  before: BilingualText;
  blank: string;
  blankArm: string;
  after: BilingualText;
  options?: string[];
}

export interface TextAnalysisItem {
  id: string;
  title: BilingualText;
  originalText: {
    es: string;
    hy: string;
  };
  note?: BilingualText;
  questions: {
    id: number;
    question: BilingualText;
    answer: BilingualText;
  }[];
}

export interface TransformTask {
  id: string;
  letter: string;
  title: BilingualText;
  instruction: BilingualText;
  sourceText?: BilingualText;
  modelAnswer: BilingualText;
}

export interface MiniExamQuestion {
  id: number;
  points: number;
  question: BilingualText;
  textContext?: BilingualText;
  subQuestions?: {
    letter: string;
    question: BilingualText;
    answer: BilingualText;
  }[];
  answer?: BilingualText;
}
