export default function min(numbers: readonly number[]): number | undefined {
  if (numbers.length === 0) {
    return undefined;
  }

  return numbers.reduce((accumulator, value) =>
    value < accumulator ? value : accumulator
  );
}
