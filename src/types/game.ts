export type GameMode = "daily" | "random" | "infinite" | "timed";

export type RoundStatus = "playing" | "won" | "lost";

export type LetterState = "empty" | "correct" | "present" | "absent";

export interface LetterFeedback {
  letter: string;
  state: LetterState;
}

export interface GuessResult {
  guess: string;
  feedback: LetterFeedback[];
}

export interface Round {
  mode: GameMode;
  word: string;
  anagram: string;
  attempts: GuessResult[];
  maxAttempts: number;
  status: RoundStatus;
}

export interface GuessValidation {
  valid: boolean;
  reason?: string;
}
