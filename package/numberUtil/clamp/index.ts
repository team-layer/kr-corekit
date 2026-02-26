export default function clamp(value: number, lower: number, upper: number): number {
  const min = Math.min(lower, upper);
  const max = Math.max(lower, upper);
  return Math.min(Math.max(value, min), max);
}
