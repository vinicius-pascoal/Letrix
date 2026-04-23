import type { LetterFeedback } from "@/src/types/game";

export function getFeedback(guess: string, secret: string): LetterFeedback[] {
  const normalizedGuess = guess.toLowerCase();
  const normalizedSecret = secret.toLowerCase();
  const result: LetterFeedback[] = new Array(normalizedGuess.length);
  const remaining: Record<string, number> = {};

  for (let i = 0; i < normalizedSecret.length; i += 1) {
    const letter = normalizedSecret[i];
    remaining[letter] = (remaining[letter] || 0) + 1;
  }

  for (let i = 0; i < normalizedGuess.length; i += 1) {
    const letter = normalizedGuess[i];

    if (letter === normalizedSecret[i]) {
      result[i] = { letter, state: "correct" };
      remaining[letter] -= 1;
    }
  }

  for (let i = 0; i < normalizedGuess.length; i += 1) {
    if (result[i]) {
      continue;
    }

    const letter = normalizedGuess[i];

    if ((remaining[letter] || 0) > 0) {
      result[i] = { letter, state: "present" };
      remaining[letter] -= 1;
    } else {
      result[i] = { letter, state: "absent" };
    }
  }

  return result;
}
