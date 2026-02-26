export default function toNumber(value: unknown, defaultValue: number = Number.NaN): number {
  if (typeof value === "number") {
    return Number.isNaN(value) ? defaultValue : value;
  }

  if (typeof value === "symbol") {
    return defaultValue;
  }

  const parsed = Number(value);
  return Number.isNaN(parsed) ? defaultValue : parsed;
}
