export type Collection<T> = readonly T[] | Record<string, T>;

export default function toEntries<T>(collection: Collection<T>): Array<[string, T]> {
  if (Array.isArray(collection)) {
    return collection.map((value, index) => [String(index), value]);
  }

  return Object.entries(collection);
}
