import toEntries, { type Collection } from "../_toEntries";

export default function map<T, R>(
  collection: Collection<T>,
  iteratee: (value: T, key: string, collection: Collection<T>) => R
): R[] {
  return toEntries(collection).map(([key, value]) =>
    iteratee(value, key, collection)
  );
}
