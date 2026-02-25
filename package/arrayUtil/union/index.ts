export default function union<T>(...arrays: ReadonlyArray<readonly T[]>): T[] {
  const result: T[] = [];
  const seen = new Set<T>();

  arrays.forEach((array) => {
    array.forEach((value) => {
      if (seen.has(value)) {
        return;
      }

      seen.add(value);
      result.push(value);
    });
  });

  return result;
}
