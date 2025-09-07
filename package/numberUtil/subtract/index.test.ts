import { describe, expect, test } from "vitest";
import subtract from ".";

describe("subtract", () => {
  describe("기본 케이스", () => {
    test("두 양수를 올바르게 뺀다", () => {
      expect(subtract(10, 3)).toBe(7);
    });

    test("여러 숫자를 순서대로 뺀다", () => {
      expect(subtract(100, 10, 20)).toBe(70);
    });

    test("음수를 포함한 뺄셈을 올바르게 처리한다", () => {
      expect(subtract(5, -10)).toBe(15);
      expect(subtract(-5, 10)).toBe(-15);
    });
  });

  describe("예외 케이스", () => {
    test("인수가 없을 때 0을 반환한다", () => {
      expect(subtract()).toBe(0);
    });

    test("인수가 하나일 때 해당 숫자 자신을 반환한다", () => {
      expect(subtract(10)).toBe(10);
      expect(subtract(-5)).toBe(-5);
    });

    test("0을 포함한 뺄셈을 올바르게 처리한다", () => {
      expect(subtract(10, 0)).toBe(10);
      expect(subtract(0, 10)).toBe(-10);
    });

    test("부동소수점을 올바르게 처리한다", () => {
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
    });

    test("인수 중 NaN이 포함되면 NaN을 반환한다", () => {
      expect(subtract(10, 5, NaN, 2)).toBeNaN();
    });
  });
});
