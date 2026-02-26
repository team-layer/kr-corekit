import { describe, expect, test } from "vitest";
import intersection from ".";

describe("intersection 유틸 함수 테스트", () => {
  test("교집합 값을 반환한다.", () => {
    expect(intersection([1, 2, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test("교집합이 없으면 빈 배열을 반환한다.", () => {
    expect(intersection([1, 2], [3, 4])).toEqual([]);
  });
});
