import { describe, expect, test } from "vitest";
import parallel from ".";

describe("async parallel 유틸 함수 테스트", () => {
  test("작업을 병렬로 실행한다.", async () => {
    const result = await parallel([
      async () => 1,
      async () => 2,
      async () => 3,
    ]);

    expect(result).toEqual([1, 2, 3]);
  });
});
