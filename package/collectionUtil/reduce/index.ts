import toEntries, { type Collection } from "../_toEntries";

export default function reduce<T, R>(
  collection: Collection<T>,
  iteratee: (accumulator: R, value: T, key: string, collection: Collection<T>) => R,
  initialValue: R
): R {
  return toEntries(collection).reduce(
    (accumulator, [key, value]) => iteratee(accumulator, value, key, collection),
    initialValue
  );
}
