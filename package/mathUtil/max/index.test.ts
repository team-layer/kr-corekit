import { describe, expect, test } from "vitest";
import max from ".";

describe("math max 유틸 함수 테스트", () => {
  test("최댓값을 반환한다.", () => {
    expect(max([3, 1, 5])).toBe(5);
  });

  test("빈 배열이면 undefined를 반환한다.", () => {
    expect(max([])).toBeUndefined();
  });
});
