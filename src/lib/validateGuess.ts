import type { GuessValidation } from "@/src/types/game";
import { getAnswerWords, getValidWordsSet } from "@/src/lib/words";

interface DictionaryLookupResponse {
  exists: boolean;
  suggestions?: string[];
}

function normalizeLetters(value: string): string {
  return value.toLowerCase().split("").sort().join("");
}

const localDictionary = new Set<string>([
  ...getAnswerWords().map((word) => word.toLowerCase()),
  ...getValidWordsSet(),
]);

export function validateGuess(
  guess: string,
  secret: string,
): Promise<GuessValidation> {
  const normalizedGuess = guess.trim().toLowerCase();
  const normalizedSecret = secret.toLowerCase();

  if (normalizedGuess.length !== 5) {
    return Promise.resolve({ valid: false, reason: "A palavra precisa ter 5 letras." });
  }

  if (!/^[a-z]+$/.test(normalizedGuess)) {
    return Promise.resolve({ valid: false, reason: "Use apenas letras sem acento." });
  }

  if (normalizeLetters(normalizedGuess) !== normalizeLetters(normalizedSecret)) {
    return Promise.resolve({
      valid: false,
      reason: "O chute precisa usar exatamente as letras do anagrama.",
    });
  }

  if (localDictionary.has(normalizedGuess)) {
    return Promise.resolve({ valid: true });
  }

  return fetch(`/api/dictionary/word/${encodeURIComponent(normalizedGuess)}`)
    .then(async (response) => {
      if (!response.ok) {
        return {
          valid: false,
          reason: "Nao foi possivel validar no dicionario agora.",
        };
      }

      const payload = (await response.json()) as DictionaryLookupResponse;

      if (payload.exists) {
        return { valid: true };
      }

      return { valid: false, reason: "Palavra nao encontrada no dicionario." };
    })
    .catch(() => {
      return {
        valid: false,
        reason: "Nao foi possivel validar no dicionario agora.",
      };
    });
}
