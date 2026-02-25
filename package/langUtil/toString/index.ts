export default function toString(value: unknown): string {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "symbol") {
    return value.toString();
  }

  return String(value);
}
