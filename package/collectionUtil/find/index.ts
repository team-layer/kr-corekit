import toEntries, { type Collection } from "../_toEntries";

export default function find<T>(
  collection: Collection<T>,
  predicate: (value: T, key: string, collection: Collection<T>) => boolean
): T | undefined {
  const entry = toEntries(collection).find(([key, value]) =>
    predicate(value, key, collection)
  );

  return entry?.[1];
}
