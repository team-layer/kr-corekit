import toEntries, { type Collection } from "../_toEntries";

export default function includes<T>(
  collection: Collection<T> | string,
  target: T | string
): boolean {
  if (typeof collection === "string") {
    return collection.includes(String(target));
  }

  return toEntries(collection).some(([, value]) => value === target);
}
