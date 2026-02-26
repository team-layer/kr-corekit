import { describe, expect, test } from "vitest";
import floor from ".";

describe("floor 유틸 함수 테스트", () => {
  test("소수점 내림을 지원한다.", () => {
    expect(floor(3.14159, 2)).toBe(3.14);
  });

  test("음수 precision도 지원한다.", () => {
    expect(floor(1299, -2)).toBe(1200);
  });
});
