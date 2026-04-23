import answerWordsJson from "@/src/data/answer-words.json";
import validWordsJson from "@/src/data/valid-words.json";
import { getDailySeed, seededIndex } from "@/src/lib/dailySeed";
import type { GameMode } from "@/src/types/game";

const answerWords = answerWordsJson as string[];
const validWords = validWordsJson as string[];

export function getAnswerWords(): string[] {
  return answerWords;
}

export function getValidWordsSet(): Set<string> {
  return new Set(validWords.map((word) => word.toLowerCase()));
}

export function getSecretWord(mode: GameMode): string {
  const words = getAnswerWords();

  if (words.length === 0) {
    throw new Error("A lista de respostas esta vazia.");
  }

  if (mode === "daily") {
    const index = seededIndex(getDailySeed(), words.length);
    return words[index].toLowerCase();
  }

  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toLowerCase();
}
