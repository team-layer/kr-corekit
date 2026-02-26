export default function groupBy<T, K extends PropertyKey>(
  array: readonly T[],
  iteratee: (value: T, index: number, array: readonly T[]) => K
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;

  array.forEach((value, index) => {
    const key = iteratee(value, index, array);

    if (!Object.prototype.hasOwnProperty.call(result, key)) {
      result[key] = [];
    }

    result[key].push(value);
  });

  return result;
}
