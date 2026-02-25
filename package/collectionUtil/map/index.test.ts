import { describe, expect, test } from "vitest";
import map from ".";

describe("collection map 유틸 함수 테스트", () => {
  test("배열을 변환한다.", () => {
    expect(map([1, 2, 3], (value) => value * 2)).toEqual([2, 4, 6]);
  });

  test("객체를 변환한다.", () => {
    expect(map({ a: 1, b: 2 }, (value, key) => `${key}:${value}`)).toEqual([
      "a:1",
      "b:2",
    ]);
  });
});
