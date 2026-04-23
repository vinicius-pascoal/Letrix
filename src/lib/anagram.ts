export function generateAnagram(word: string): string {
  if (word.length <= 1) {
    return word;
  }

  const letters = word.split("");
  let candidate = word;
  let attempts = 0;

  while (candidate === word && attempts < 20) {
    const shuffled = [...letters];

    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    candidate = shuffled.join("");
    attempts += 1;
  }

  if (candidate !== word) {
    return candidate;
  }

  return `${word.slice(1)}${word[0]}`;
}
