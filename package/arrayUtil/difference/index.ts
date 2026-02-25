export default function difference<T>(array: readonly T[], values: readonly T[]): T[] {
  const excludeSet = new Set(values);
  return array.filter((item) => !excludeSet.has(item));
}
