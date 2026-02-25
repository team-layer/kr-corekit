type Memoized<T extends (...args: unknown[]) => unknown, K> = ((
  ...args: Parameters<T>
) => ReturnType<T>) & {
  cache: Map<K, ReturnType<T>>;
};

export default function memoize<
  T extends (...args: unknown[]) => unknown,
  K = unknown
>(
  fn: T,
  resolver?: (...args: Parameters<T>) => K
): Memoized<T, K> {
  const cache = new Map<K, ReturnType<T>>();

  const memoized = ((...args: Parameters<T>) => {
    const key = resolver ? resolver(...args) : (args[0] as K);

    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }

    const result = fn(...args) as ReturnType<T>;
    cache.set(key, result);
    return result;
  }) as Memoized<T, K>;

  memoized.cache = cache;

  return memoized;
}
