import { type Collection } from "../_toEntries";

export default function size(collection: Collection<unknown> | string | Map<unknown, unknown> | Set<unknown>): number {
  if (typeof collection === "string" || Array.isArray(collection)) {
    return collection.length;
  }

  if (collection instanceof Map || collection instanceof Set) {
    return collection.size;
  }

  return Object.keys(collection).length;
}
