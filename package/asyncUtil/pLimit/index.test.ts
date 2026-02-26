import { describe, expect, test } from "vitest";
import pLimit from ".";

describe("async pLimit 유틸 함수 테스트", () => {
  test("동시 실행 수를 제한한다.", async () => {
    const limit = pLimit(2);

    let running = 0;
    let maxRunning = 0;

    const createTask = (delay: number) =>
      limit(async () => {
        running++;
        maxRunning = Math.max(maxRunning, running);

        await new Promise((resolve) => setTimeout(resolve, delay));

        running--;
        return delay;
      });

    const results = await Promise.all([
      createTask(30),
      createTask(30),
      createTask(30),
      createTask(30),
    ]);

    expect(results).toEqual([30, 30, 30, 30]);
    expect(maxRunning).toBeLessThanOrEqual(2);
  });
});
