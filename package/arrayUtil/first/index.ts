export default function first<T>(array: readonly T[]): T | undefined {
  return array[0];
}
