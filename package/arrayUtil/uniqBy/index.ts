export default function uniqBy<T, K>(
  array: readonly T[],
  iteratee: (value: T, index: number, array: readonly T[]) => K
): T[] {
  const seen = new Set<K>();

  return array.filter((value, index) => {
    const key = iteratee(value, index, array);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}
