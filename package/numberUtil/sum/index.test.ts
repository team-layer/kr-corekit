import sum from ".";
import { describe, expect, test } from "vitest";

describe("sum", () => {
  describe("기본 케이스", () => {
    test("1 + 2 + 3은 6이다.", () => {
      expect(sum(1, 2, 3)).toBe(6);
    });

    test("5 + 10 + 15는 30이다.", () => {
      expect(sum(5, 10, 15)).toBe(30);
    });
  });

  describe("예외 케이스", () => {
    test("인수가 없을 때 0을 반환한다", () => {
      expect(sum()).toBe(0);
    });

    test("인수가 하나일 때 해당 숫자 자신을 반환한다", () => {
      expect(sum(10)).toBe(10);
      expect(sum(-5)).toBe(-5);
    });

    test("음수를 포함한 덧셈을 올바르게 처리한다", () => {
      expect(sum(-1, -2, -3)).toBe(-6);
      expect(sum(5, -10)).toBe(-5);
    });

    test("부동소수점을 올바르게 처리한다", () => {
      expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test("인수 중 NaN이 포함되면 NaN을 반환한다", () => {
      expect(sum(1, 2, NaN, 4)).toBeNaN();
    });
  });
});
