export default function sumBy<T>(
  array: readonly T[],
  iteratee: (value: T, index: number, array: readonly T[]) => number
): number {
  return array.reduce((accumulator, value, index) => {
    return accumulator + iteratee(value, index, array);
  }, 0);
}
