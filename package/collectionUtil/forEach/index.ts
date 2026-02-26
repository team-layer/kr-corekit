import toEntries, { type Collection } from "../_toEntries";

export default function forEach<T>(
  collection: Collection<T>,
  iteratee: (value: T, key: string, collection: Collection<T>) => void
): void {
  toEntries(collection).forEach(([key, value]) => {
    iteratee(value, key, collection);
  });
}
