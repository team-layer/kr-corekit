export default function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  limit: number = 300
) {
  let isThrottled: boolean;
  return (...args: Parameters<T>) => {
    if (!isThrottled) {
      fn(...args);
      isThrottled = true;
      setTimeout(() => (isThrottled = false), limit);
    }
  };
}
