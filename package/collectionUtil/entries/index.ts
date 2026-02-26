import toEntries, { type Collection } from "../_toEntries";

export default function entries<T>(collection: Collection<T>): Array<[string, T]> {
  return toEntries(collection);
}
