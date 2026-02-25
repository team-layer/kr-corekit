export default function flatten<T>(array: readonly (T | readonly T[])[]): T[] {
  return array.flat(1) as T[];
}
