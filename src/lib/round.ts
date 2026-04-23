import { generateAnagram } from "@/src/lib/anagram";
import { getSecretWord } from "@/src/lib/words";
import type { GameMode } from "@/src/types/game";

export interface RoundSeed {
  word: string;
  anagram: string;
}

export function createRound(mode: GameMode): RoundSeed {
  const word = getSecretWord(mode);
  const anagram = generateAnagram(word);
  return { word, anagram };
}
