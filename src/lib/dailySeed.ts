export function getDailySeed(date = new Date()): number {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  return year * 10000 + month * 100 + day;
}

export function seededIndex(seed: number, length: number): number {
  if (length <= 0) {
    return 0;
  }

  const x = Math.sin(seed) * 10000;
  return Math.floor((x - Math.floor(x)) * length);
}
