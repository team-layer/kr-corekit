export default function mapValues<
  T extends Record<PropertyKey, unknown>,
  R
>(
  obj: T,
  iteratee: (value: T[keyof T], key: keyof T, obj: T) => R
): Record<keyof T, R> {
  const result = {} as Record<keyof T, R>;

  (Object.keys(obj) as Array<keyof T>).forEach((key) => {
    result[key] = iteratee(obj[key], key, obj);
  });

  return result;
}
