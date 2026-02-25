export default async function parallel<T>(
  tasks: ReadonlyArray<() => Promise<T> | T>
): Promise<T[]> {
  return Promise.all(tasks.map((task) => task()));
}
