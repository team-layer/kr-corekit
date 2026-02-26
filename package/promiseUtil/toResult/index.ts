export type PromiseResult<T> =
  | { data: T; error: null }
  | { data: null; error: unknown };

export default async function toResult<T>(
  promise: Promise<T>
): Promise<PromiseResult<T>> {
  try {
    return { data: await promise, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
