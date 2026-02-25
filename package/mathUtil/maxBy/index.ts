export default function maxBy<T>(
  array: readonly T[],
  iteratee: (value: T, index: number, array: readonly T[]) => number
): T | undefined {
  if (array.length === 0) {
    return undefined;
  }

  let best = array[0];
  let bestScore = iteratee(array[0], 0, array);

  for (let index = 1; index < array.length; index++) {
    const score = iteratee(array[index], index, array);

    if (score > bestScore) {
      best = array[index];
      bestScore = score;
    }
  }

  return best;
}
