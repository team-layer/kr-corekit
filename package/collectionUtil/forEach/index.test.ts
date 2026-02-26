import { describe, expect, test } from "vitest";
import forEach from ".";

describe("collection forEach 유틸 함수 테스트", () => {
  test("배열 순회가 가능하다.", () => {
    const result: number[] = [];
    forEach([1, 2, 3], (value) => result.push(value * 2));
    expect(result).toEqual([2, 4, 6]);
  });

  test("객체 순회가 가능하다.", () => {
    const result: string[] = [];
    forEach({ a: 1, b: 2 }, (value, key) => result.push(`${key}:${value}`));
    expect(result).toEqual(["a:1", "b:2"]);
  });
});
