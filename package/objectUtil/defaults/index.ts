export default function defaults<T extends Record<PropertyKey, unknown>>(
  target: T,
  ...sources: ReadonlyArray<Record<PropertyKey, unknown>>
): T {
  const output = target as Record<PropertyKey, unknown>;

  sources.forEach((source) => {
    Reflect.ownKeys(source).forEach((key) => {
      if (output[key] === undefined) {
        output[key] = source[key as keyof typeof source];
      }
    });
  });

  return target;
}
