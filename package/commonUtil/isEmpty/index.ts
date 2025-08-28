export default function isEmpty(value: any): boolean {
  if (value == null) return true;

  if (typeof value === "number" && isNaN(value)) return true;


  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Date) {
    return isNaN(value.getTime());
  }

  if (typeof value === "symbol") {
    return value.description === undefined;
  }

  if (value instanceof Set || value instanceof Map) {
    return value.size === 0;
  }

  if (typeof value === "object" && value.constructor === Object) {
    return Object.keys(value).length === 0;
  }

  return false;
}
