import { describe, expect, test } from "vitest";
import isEqual from ".";

describe("lang isEqual 유틸 함수 테스트", () => {
  test("중첩 객체를 깊게 비교한다.", () => {
    expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
  });

  test("구조가 다르면 false를 반환한다.", () => {
    expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
  });

  test("순환 참조도 비교한다.", () => {
    const left: { self?: unknown } = {};
    const right: { self?: unknown } = {};
    left.self = left;
    right.self = right;

    expect(isEqual(left, right)).toBe(true);
  });
});
