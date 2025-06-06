export interface Country {
  name: string;
  code: string;
  similarTo?: string[]; // Array of country codes that have similar flags
  aliases?: string[]; // Array of alternative names for voice recognition
}

export interface QuizQuestion {
  correctCountry: Country;
  options: Country[];
}

export interface QuizState {
  currentQuestion: QuizQuestion | null;
  score: number;
  totalQuestions: number;
  questionIndex: number;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  gameOver: boolean;
} 