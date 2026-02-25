import { describe, expect, test } from "vitest";
import mapAsync from ".";

describe("async mapAsync 유틸 함수 테스트", () => {
  test("비동기 iteratee 결과를 매핑한다.", async () => {
    const result = await mapAsync([1, 2, 3], async (value) => value * 2);

    expect(result).toEqual([2, 4, 6]);
  });

  test("concurrency 옵션을 적용한다.", async () => {
    let running = 0;
    let maxRunning = 0;

    const result = await mapAsync(
      [1, 2, 3, 4],
      async (value) => {
        running++;
        maxRunning = Math.max(maxRunning, running);
        await new Promise((resolve) => setTimeout(resolve, 20));
        running--;
        return value;
      },
      { concurrency: 2 }
    );

    expect(result).toEqual([1, 2, 3, 4]);
    expect(maxRunning).toBeLessThanOrEqual(2);
  });
});
