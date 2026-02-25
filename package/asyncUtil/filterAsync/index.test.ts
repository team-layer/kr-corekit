import { describe, expect, test } from "vitest";
import filterAsync from ".";

describe("async filterAsync 유틸 함수 테스트", () => {
  test("비동기 predicate로 필터링한다.", async () => {
    const result = await filterAsync([1, 2, 3, 4], async (value) => value % 2 === 0);

    expect(result).toEqual([2, 4]);
  });
});
