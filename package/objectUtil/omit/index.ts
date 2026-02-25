export default function omit<T extends Record<PropertyKey, unknown>, K extends keyof T>(
  obj: T,
  keys: readonly K[]
): Omit<T, K> {
  const cloned = { ...obj } as T;

  keys.forEach((key) => {
    delete cloned[key];
  });

  return cloned as Omit<T, K>;
}
