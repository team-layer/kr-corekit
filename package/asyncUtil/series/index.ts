export default async function series<T>(
  tasks: ReadonlyArray<() => Promise<T> | T>
): Promise<T[]> {
  const results: T[] = [];

  for (const task of tasks) {
    results.push(await task());
  }

  return results;
}
