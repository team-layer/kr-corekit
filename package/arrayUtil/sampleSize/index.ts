import shuffle from "../shuffle";

export default function sampleSize<T>(array: readonly T[], size: number = 1): T[] {
  if (size <= 0) {
    return [];
  }

  const normalizedSize = Math.min(array.length, Math.floor(size));
  return shuffle(array).slice(0, normalizedSize);
}
