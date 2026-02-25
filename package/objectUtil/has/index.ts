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

export default function has(
  obj: unknown,
  path: string | readonly PathSegment[]
): boolean {
  const segments = toPath(path);
  let current = obj;

  for (const segment of segments) {
    if (
      current === null ||
      current === undefined ||
      !Object.prototype.hasOwnProperty.call(current, segment)
    ) {
      return false;
    }

    current = (current as Record<PropertyKey, unknown>)[segment];
  }

  return true;
}
