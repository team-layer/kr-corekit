import { describe, expect, test } from "vitest";
import min from ".";

describe("math min 유틸 함수 테스트", () => {
  test("최솟값을 반환한다.", () => {
    expect(min([3, 1, 5])).toBe(1);
  });

  test("빈 배열이면 undefined를 반환한다.", () => {
    expect(min([])).toBeUndefined();
  });
});
