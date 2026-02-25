export default function invert(
  obj: Record<PropertyKey, string | number | symbol>
): Record<string, string> {
  const result: Record<string, string> = {};

  Reflect.ownKeys(obj).forEach((key) => {
    const value = obj[key];
    result[String(value)] = String(key);
  });

  return result;
}
