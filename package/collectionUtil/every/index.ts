import toEntries, { type Collection } from "../_toEntries";

export default function every<T>(
  collection: Collection<T>,
  predicate: (value: T, key: string, collection: Collection<T>) => boolean
): boolean {
  return toEntries(collection).every(([key, value]) =>
    predicate(value, key, collection)
  );
}
