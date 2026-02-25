interface WithTimeoutOptions<T> {
  message?: string;
  fallback?: () => T | Promise<T>;
}

export default async function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  options: WithTimeoutOptions<T> = {}
): Promise<T> {
  const { message = `Operation timed out after ${ms}ms`, fallback } = options;

  let timer: ReturnType<typeof setTimeout>;

  const timeoutPromise = new Promise<T>((resolve, reject) => {
    timer = setTimeout(async () => {
      if (fallback) {
        try {
          resolve(await fallback());
          return;
        } catch (error) {
          reject(error);
          return;
        }
      }

      reject(new Error(message));
    }, Math.max(0, ms));
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    clearTimeout(timer!);
  }
}
