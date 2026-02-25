export default function chunk<T>(array: readonly T[], size: number = 1): T[][] {
  if (array.length === 0) {
    return [];
  }

  const normalizedSize = Number.isFinite(size) ? Math.max(1, Math.floor(size)) : 1;
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += normalizedSize) {
    result.push(array.slice(i, i + normalizedSize));
  }

  return result;
}
