export interface SettledResult<T> {
  fulfilled: T[];
  rejected: unknown[];
}

export default async function settle<T>(
  promises: ReadonlyArray<Promise<T>>
): Promise<SettledResult<T>> {
  const results = await Promise.allSettled(promises);

  return results.reduce<SettledResult<T>>(
    (accumulator, result) => {
      if (result.status === "fulfilled") {
        accumulator.fulfilled.push(result.value);
      } else {
        accumulator.rejected.push(result.reason);
      }

      return accumulator;
    },
    { fulfilled: [], rejected: [] }
  );
}
