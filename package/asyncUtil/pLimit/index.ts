export type LimitTask<T> = () => Promise<T>;

export default function pLimit(concurrency: number = 1) {
  const normalizedConcurrency = Math.max(1, Math.floor(concurrency));

  let activeCount = 0;
  const queue: Array<() => void> = [];

  const runNext = () => {
    if (activeCount >= normalizedConcurrency || queue.length === 0) {
      return;
    }

    const nextTask = queue.shift();

    if (!nextTask) {
      return;
    }

    activeCount++;
    nextTask();
  };

  const schedule = <T>(task: LimitTask<T>): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      const runTask = () => {
        task()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            activeCount--;
            runNext();
          });
      };

      queue.push(runTask);
      runNext();
    });
  };

  return schedule;
}
