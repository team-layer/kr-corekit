export default function partition<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => boolean
): [T[], T[]] {
  const truthy: T[] = [];
  const falsy: T[] = [];

  array.forEach((value, index) => {
    if (predicate(value, index, array)) {
      truthy.push(value);
      return;
    }

    falsy.push(value);
  });

  return [truthy, falsy];
}
