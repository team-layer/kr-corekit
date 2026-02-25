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

export default function set<T extends Record<PropertyKey, unknown>>(
  obj: T,
  path: string | readonly PathSegment[],
  value: unknown
): T {
  const segments = toPath(path);

  if (segments.length === 0) {
    return obj;
  }

  let current: Record<PropertyKey, unknown> = obj;

  for (let i = 0; i < segments.length - 1; i++) {
    const segment = segments[i];
    const nextSegment = segments[i + 1];
    const currentValue = current[segment];

    if (
      currentValue === null ||
      currentValue === undefined ||
      typeof currentValue !== "object"
    ) {
      current[segment] = typeof nextSegment === "number" ? [] : {};
    }

    current = current[segment] as Record<PropertyKey, unknown>;
  }

  current[segments[segments.length - 1]] = value;

  return obj;
}
