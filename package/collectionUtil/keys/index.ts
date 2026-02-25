import { type Collection } from "../_toEntries";

export default function keys<T>(collection: Collection<T>): string[] {
  if (Array.isArray(collection)) {
    return collection.map((_, index) => String(index));
  }

  return Object.keys(collection);
}
