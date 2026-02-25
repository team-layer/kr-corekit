interface RetryWithDelayOptions {
  retries?: number;
  delay?: number;
  factor?: number;
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function retryWithDelay<T>(
  fn: () => Promise<T>,
  options: RetryWithDelayOptions = {}
): Promise<T> {
  const { retries = 3, delay = 100, factor = 1 } = options;

  let attempt = 0;
  let nextDelay = Math.max(0, delay);

  while (true) {
    try {
      return await fn();
    } catch (error) {
      attempt++;

      if (attempt >= Math.max(1, retries)) {
        throw error;
      }

      if (nextDelay > 0) {
        await wait(nextDelay);
      }

      nextDelay *= factor;
    }
  }
}
