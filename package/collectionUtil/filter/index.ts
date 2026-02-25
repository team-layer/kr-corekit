import toEntries, { type Collection } from "../_toEntries";

export default function filter<T>(
  collection: Collection<T>,
  predicate: (value: T, key: string, collection: Collection<T>) => boolean
): T[] {
  return toEntries(collection)
    .filter(([key, value]) => predicate(value, key, collection))
    .map(([, value]) => value);
}
