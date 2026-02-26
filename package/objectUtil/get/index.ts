type PathSegment = string | number;

function toPath(path: string | readonly PathSegment[]): PathSegment[] {
  if (typeof path !== "string") {
    return [...path];
  }

  return path
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean)
    .map((segment: string) =>
      /^\d+$/.test(segment) ? Number(segment) : segment
    );
}

export default function get<T, D = undefined>(
  obj: T,
  path: string | readonly PathSegment[],
  defaultValue?: D
): unknown | D {
  const segments = toPath(path);
  let current: unknown = obj;

  for (const segment of segments) {
    if (current === null || current === undefined) {
      return defaultValue as D;
    }

    current = (current as Record<PropertyKey, unknown>)[segment];
  }

  return current === undefined ? (defaultValue as D) : current;
}
