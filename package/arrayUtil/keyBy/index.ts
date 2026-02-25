export default function keyBy<T, K extends PropertyKey>(
  array: readonly T[],
  iteratee: (value: T, index: number, array: readonly T[]) => K
): Record<K, T> {
  const result = {} as Record<K, T>;

  array.forEach((value, index) => {
    const key = iteratee(value, index, array);
    result[key] = value;
  });

  return result;
}
