import { describe, expect, test } from "vitest";
import ceil from ".";

describe("ceil 유틸 함수 테스트", () => {
  test("소수점 올림을 지원한다.", () => {
    expect(ceil(3.14159, 2)).toBe(3.15);
  });

  test("음수 precision도 지원한다.", () => {
    expect(ceil(1231, -2)).toBe(1300);
  });
});
