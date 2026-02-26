export default function unique<T>(array: readonly T[]): T[] {
  return [...new Set(array)];
}
