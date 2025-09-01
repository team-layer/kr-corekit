import { describe, test, expect } from "vitest";
import multiply from ".";

describe("multiply", () => {
  describe("기본 케이스", () => {
    test("두 양수를 올바르게 곱한다", () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test("여러 숫자를 올바르게 곱한다", () => {
      expect(multiply(2, 3, 4)).toBe(24);
    });

    test("인수 중 0이 포함되면 0을 반환한다", () => {
      expect(multiply(5, 10, 0, 20)).toBe(0);
    });

    test("음수를 올바르게 처리한다", () => {
      expect(multiply(-5, 10)).toBe(-50);
      expect(multiply(-5, -10)).toBe(50);
    });

    test("부동소수점을 올바르게 처리한다", () => {
      expect(multiply(0.5, 10)).toBe(5);
    });
  });

  describe("엣지 케이스", () => {
    test("인수가 없을 때 1을 반환한다", () => {
      expect(multiply()).toBe(1);
    });

    test("인수가 하나일 때 해당 숫자 자신을 반환한다", () => {
      expect(multiply(7)).toBe(7);
      expect(multiply(-100)).toBe(-100);
    });

    test("인수 중 NaN이 포함되면 NaN을 반환한다", () => {
      expect(multiply(NaN)).toBeNaN();
      expect(multiply(NaN, 7)).toBeNaN();
      expect(multiply(5, NaN, 10)).toBeNaN();
    });

    test("Infinity(무한대)를 올바르게 처리한다", () => {
      expect(multiply(Infinity, 2)).toBe(Infinity);
      expect(multiply(Infinity, -2)).toBe(-Infinity);
      expect(multiply(Infinity, 0)).toBeNaN();
    });
  });
});
