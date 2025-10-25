export default async function retry<T>(
  fn: () => Promise<T>,
  loop: number = 3
): Promise<T> {
  let count = 0;

  const attempt = async (): Promise<T> => {
    try {
      return await fn();
    } catch (e) {
      count++;
      if (count > loop) {
        throw e;
      }
      return attempt();
    }
  };

  return attempt();
}
