export default function inRange(
  value: number,
  start: number,
  end?: number
): boolean {
  const rangeStart = end === undefined ? 0 : start;
  const rangeEnd = end === undefined ? start : end;
  const min = Math.min(rangeStart, rangeEnd);
  const max = Math.max(rangeStart, rangeEnd);

  return value >= min && value < max;
}
