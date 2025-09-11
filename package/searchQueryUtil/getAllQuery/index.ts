export default function getAllQuery(): Record<string, string | string[]> {
  if (window && typeof window.URLSearchParams === "undefined") {
    throw new Error("URLSearchParams is not supported in this environment.");
  }

  const params = new URLSearchParams(window.location.search);
  const result: { [key: string]: string | string[] } = {};

  for (const [key, value] of params.entries()) {
    if (result[key]) {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      result[key] = value;
    }
  }

  return result;
}
