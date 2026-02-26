import isPlainObject from "../../typeUtil/isPlainObject";

function mergeValue(targetValue: unknown, sourceValue: unknown): unknown {
  if (Array.isArray(sourceValue)) {
    return [...sourceValue];
  }

  if (isPlainObject(sourceValue)) {
    const targetBase = isPlainObject(targetValue)
      ? (targetValue as Record<PropertyKey, unknown>)
      : {};

    return merge(targetBase, sourceValue as Record<PropertyKey, unknown>);
  }

  return sourceValue;
}

export default function merge<T extends Record<PropertyKey, unknown>>(
  target: T,
  ...sources: ReadonlyArray<Record<PropertyKey, unknown>>
): T {
  const output = target as Record<PropertyKey, unknown>;

  sources.forEach((source) => {
    Reflect.ownKeys(source).forEach((key) => {
      const sourceValue = source[key as keyof typeof source];
      const targetValue = output[key];
      output[key] = mergeValue(targetValue, sourceValue);
    });
  });

  return target;
}
