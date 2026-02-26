type Falsy = false | 0 | 0n | "" | null | undefined;

export default function compact<T>(
  array: readonly T[]
): Array<Exclude<T, Falsy>> {
  return array.filter(Boolean) as Array<Exclude<T, Falsy>>;
}
