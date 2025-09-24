export default function isPlainObject(value: unknown): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return (
    Object.getPrototypeOf(value) === Object.prototype ||
    Object.getPrototypeOf(value) === null
  );
}
