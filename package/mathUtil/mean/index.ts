export default function mean(numbers: readonly number[]): number {
  if (numbers.length === 0) {
    return Number.NaN;
  }

  const total = numbers.reduce((accumulator, value) => accumulator + value, 0);
  return total / numbers.length;
}
