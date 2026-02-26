import { describe, expect, test } from "vitest";
import mean from ".";

describe("math mean 유틸 함수 테스트", () => {
  test("평균값을 반환한다.", () => {
    expect(mean([2, 4, 6])).toBe(4);
  });

  test("빈 배열이면 NaN을 반환한다.", () => {
    expect(Number.isNaN(mean([]))).toBe(true);
  });
});
