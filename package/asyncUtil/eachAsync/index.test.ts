import { describe, expect, test } from "vitest";
import eachAsync from ".";

describe("async eachAsync 유틸 함수 테스트", () => {
  test("모든 요소를 순회한다.", async () => {
    const result: number[] = [];

    await eachAsync([1, 2, 3], async (value) => {
      result.push(value * 2);
    });

    expect(result).toEqual([2, 4, 6]);
  });
});
