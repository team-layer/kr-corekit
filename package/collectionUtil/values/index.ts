import { type Collection } from "../_toEntries";

export default function values<T>(collection: Collection<T>): T[] {
  if (Array.isArray(collection)) {
    return [...collection];
  }

  return Object.values(collection);
}
