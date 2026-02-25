const TRUE_SET = new Set(["true", "1", "yes", "y", "on"]);
const FALSE_SET = new Set(["false", "0", "no", "n", "off", ""]);

export default function toBoolean(value: unknown): boolean {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    return value !== 0 && !Number.isNaN(value);
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();

    if (TRUE_SET.has(normalized)) {
      return true;
    }

    if (FALSE_SET.has(normalized)) {
      return false;
    }
  }

  return Boolean(value);
}
