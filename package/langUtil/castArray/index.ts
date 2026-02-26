export default function castArray<T>(value: T | readonly T[]): T[] {
  return Array.isArray(value) ? [...value] : [value as T];
}
