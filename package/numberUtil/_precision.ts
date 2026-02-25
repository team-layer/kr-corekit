export default function precisionMath(
  value: number,
  precision: number,
  operator: (value: number) => number
): number {
  if (precision === 0) {
    return operator(value);
  }

  const factor = Math.pow(10, Math.abs(precision));

  if (precision > 0) {
    return operator(value * factor) / factor;
  }

  return operator(value / factor) * factor;
}
