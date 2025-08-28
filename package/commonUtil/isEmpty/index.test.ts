import { describe, expect, test } from "vitest";
import isEmpty from ".";

describe("isEmpty 유틸 함수 테스트", () => {
  describe("비어있지 않은 값에 대해 false를 반환해야 함", () => {
    test("비어있지 않은 문자열에 대해 false를 반환한다", () => {
      expect(isEmpty("hello")).toBe(false);
      expect(isEmpty("world")).toBe(false);
      expect(isEmpty(" ")).toBe(false);
    });

    test("0이 아닌 숫자에 대해 false를 반환한다", () => {
      expect(isEmpty(123)).toBe(false);
      expect(isEmpty(-1)).toBe(false);
      expect(isEmpty(3.14)).toBe(false);
      expect(isEmpty(Infinity)).toBe(false);
      expect(isEmpty(-Infinity)).toBe(false);
    });

    test("비어있지 않은 배열에 대해 false를 반환한다", () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
      expect(isEmpty(["a"])).toBe(false);
      expect(isEmpty([null])).toBe(false);
      expect(isEmpty([undefined])).toBe(false);
    });

    test("비어있지 않은 객체에 대해 false를 반환한다", () => {
      expect(isEmpty({ a: 1 })).toBe(false);
      expect(isEmpty({ foo: "bar" })).toBe(false);
      expect(isEmpty({ nested: { value: true } })).toBe(false);
      expect(isEmpty({ null: null })).toBe(false);
    });

    test("불린 값에 대해 false를 반환한다", () => {
      expect(isEmpty(true)).toBe(false);
      expect(isEmpty(false)).toBe(false);
    });
  });

  describe("빈 값에 대해 true를 반환해야 함", () => {
    test("빈 문자열에 대해 true를 반환한다", () => {
      expect(isEmpty("")).toBe(true);
    });

    test("0에 대해 true를 반환한다", () => {
      expect(isEmpty(0)).toBe(true);
    });

    test("빈 배열에 대해 true를 반환한다", () => {
      expect(isEmpty([])).toBe(true);
    });

    test("빈 객체에 대해 true를 반환한다", () => {
      expect(isEmpty({})).toBe(true);
    });

    test("null과 undefined에 대해 true를 반환한다", () => {
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
    });
  });

  describe("엣지 케이스", () => {
    test("NaN을 처리한다", () => {
      expect(isEmpty(NaN)).toBe(true);
    });

    test("Date 객체를 처리한다", () => {
      const validDate = new Date();
      const invalidDate = new Date("invalid");

      expect(isEmpty(validDate)).toBe(false);
      expect(isEmpty(invalidDate)).toBe(true);
    });

    test("Set과 Map을 처리한다", () => {
      const emptySet = new Set();
      const nonEmptySet = new Set([1, 2, 3]);
      const emptyMap = new Map();
      const nonEmptyMap = new Map([["key", "value"]]);

      expect(isEmpty(emptySet)).toBe(true);
      expect(isEmpty(nonEmptySet)).toBe(false);
      expect(isEmpty(emptyMap)).toBe(true);
      expect(isEmpty(nonEmptyMap)).toBe(false);
    });

    test("함수를 처리한다", () => {
      const func = () => {};
      const namedFunc = function test() {};

      expect(isEmpty(func)).toBe(false);
      expect(isEmpty(namedFunc)).toBe(false);
    });

    test("심볼을 처리한다", () => {
      const symbol = Symbol("test");
      expect(isEmpty(symbol)).toBe(false);
    });

    test("빈 심볼의 경우 true를 반환한다", () => {
      const emptySymbol = Symbol();
      expect(isEmpty(emptySymbol)).toBe(true);
    });
  });
});
