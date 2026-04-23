import type { GuessValidation } from "@/src/types/game";

function normalizeLetters(value: string): string {
  return value.toLowerCase().split("").sort().join("");
}

export function validateGuess(
  guess: string,
  validWords: Set<string>,
  secret: string,
): GuessValidation {
  const normalizedGuess = guess.trim().toLowerCase();
  const normalizedSecret = secret.toLowerCase();

  if (normalizedGuess.length !== 5) {
    return { valid: false, reason: "A palavra precisa ter 5 letras." };
  }

  if (!/^[a-z]+$/.test(normalizedGuess)) {
    return { valid: false, reason: "Use apenas letras sem acento." };
  }

  if (!validWords.has(normalizedGuess)) {
    return { valid: false, reason: "Essa palavra nao esta na base valida." };
  }

  if (normalizeLetters(normalizedGuess) !== normalizeLetters(normalizedSecret)) {
    return {
      valid: false,
      reason: "O chute precisa usar exatamente as letras do anagrama.",
    };
  }

  return { valid: true };
}
