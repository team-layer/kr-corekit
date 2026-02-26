export default function sample<T>(array: readonly T[]): T | undefined {
  if (array.length === 0) {
    return undefined;
  }

  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
