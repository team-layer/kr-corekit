import sumBy from "../sumBy";

export default function meanBy<T>(
  array: readonly T[],
  iteratee: (value: T, index: number, array: readonly T[]) => number
): number {
  if (array.length === 0) {
    return Number.NaN;
  }

  return sumBy(array, iteratee) / array.length;
}
