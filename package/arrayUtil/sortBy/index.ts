type SortValue = string | number | bigint | Date;

function normalizeSortValue(value: SortValue): string | number | bigint {
  if (value instanceof Date) {
    return value.getTime();
  }

  return value;
}

export default function sortBy<T>(
  array: readonly T[],
  iteratee: (value: T, index: number, array: readonly T[]) => SortValue
): T[] {
  return array
    .map((value, index) => ({
      value,
      index,
      criteria: normalizeSortValue(iteratee(value, index, array)),
    }))
    .sort((a, b) => {
      if (a.criteria === b.criteria) {
        return a.index - b.index;
      }

      if (typeof a.criteria === "string" || typeof b.criteria === "string") {
        return String(a.criteria).localeCompare(String(b.criteria));
      }

      return a.criteria > b.criteria ? 1 : -1;
    })
    .map(({ value }) => value);
}
