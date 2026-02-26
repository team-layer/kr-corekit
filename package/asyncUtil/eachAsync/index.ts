import mapAsync from "../mapAsync";

interface EachAsyncOptions {
  concurrency?: number;
}

export default async function eachAsync<T>(
  array: readonly T[],
  iteratee: (value: T, index: number, array: readonly T[]) => Promise<void> | void,
  options: EachAsyncOptions = {}
): Promise<void> {
  await mapAsync(array, iteratee, options);
}
