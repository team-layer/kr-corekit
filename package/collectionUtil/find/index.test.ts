import { describe, expect, test } from "vitest";
import find from ".";

describe("collection find 유틸 함수 테스트", () => {
  test("조건을 만족하는 첫 값을 반환한다.", () => {
    expect(find([1, 2, 3], (value) => value > 1)).toBe(2);
  });

  test("값이 없으면 undefined를 반환한다.", () => {
    expect(find({ a: 1 }, (value) => value > 10)).toBeUndefined();
  });
});
