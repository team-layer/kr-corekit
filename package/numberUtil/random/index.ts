export default function random(
  lower: number = 0,
  upper: number = 1,
  floating: boolean = false
): number {
  let min = lower;
  let max = upper;

  if (arguments.length === 1) {
    min = 0;
    max = lower;
  }

  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  const shouldFloat = floating || !Number.isInteger(min) || !Number.isInteger(max);

  if (shouldFloat) {
    return Math.random() * (max - min) + min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
