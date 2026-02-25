export default function defaultTo<T>(value: T, defaultValue: T): T {
  if (value === null || value === undefined) {
    return defaultValue;
  }

  if (typeof value === "number" && Number.isNaN(value)) {
    return defaultValue;
  }

  return value;
}
