export default function unzip<T>(array: ReadonlyArray<readonly T[]>): T[][] {
  const maxLength = array.reduce((max, row) => Math.max(max, row.length), 0);

  return Array.from({ length: maxLength }, (_, index) =>
    array.map((row) => row[index])
  );
}
