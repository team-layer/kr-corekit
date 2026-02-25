import { describe, expect, test } from "vitest";
import round from ".";

describe("round 유틸 함수 테스트", () => {
  test("소수점 자릿수 반올림을 지원한다.", () => {
    expect(round(3.14159, 2)).toBe(3.14);
  });

  test("음수 precision도 지원한다.", () => {
    expect(round(1234, -2)).toBe(1200);
  });
});
