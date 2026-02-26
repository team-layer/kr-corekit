import pLimit from "../pLimit";

interface MapAsyncOptions {
  concurrency?: number;
}

export default async function mapAsync<T, R>(
  array: readonly T[],
  iteratee: (value: T, index: number, array: readonly T[]) => Promise<R> | R,
  options: MapAsyncOptions = {}
): Promise<R[]> {
  const { concurrency = Number.POSITIVE_INFINITY } = options;

  if (!Number.isFinite(concurrency)) {
    return Promise.all(array.map((value, index) => iteratee(value, index, array)));
  }

  const limit = pLimit(concurrency);

  return Promise.all(
    array.map((value, index) =>
      limit(async () => iteratee(value, index, array))
    )
  );
}
