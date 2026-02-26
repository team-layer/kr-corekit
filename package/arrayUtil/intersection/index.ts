export default function intersection<T>(
  first: readonly T[],
  second: readonly T[]
): T[] {
  const secondSet = new Set(second);
  const seen = new Set<T>();

  return first.filter((value) => {
    if (!secondSet.has(value) || seen.has(value)) {
      return false;
    }

    seen.add(value);
    return true;
  });
}
