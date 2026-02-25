import mapAsync from "../mapAsync";

interface FilterAsyncOptions {
  concurrency?: number;
}

export default async function filterAsync<T>(
  array: readonly T[],
  predicate: (value: T, index: number, array: readonly T[]) => Promise<boolean> | boolean,
  options: FilterAsyncOptions = {}
): Promise<T[]> {
  const matches = await mapAsync(array, predicate, options);

  return array.filter((_, index) => matches[index]);
}
