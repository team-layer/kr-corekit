export default function zip<T>(...arrays: ReadonlyArray<readonly T[]>): Array<Array<T | undefined>> {
  const maxLength = arrays.reduce((max, array) => Math.max(max, array.length), 0);

  return Array.from({ length: maxLength }, (_, index) =>
    arrays.map((array) => array[index])
  );
}
