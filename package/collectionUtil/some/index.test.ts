import { describe, expect, test } from "vitest";
import some from ".";

describe("collection some 유틸 함수 테스트", () => {
  test("하나라도 조건을 만족하면 true다.", () => {
    expect(some([1, 2, 3], (value) => value === 2)).toBe(true);
  });

  test("조건을 만족하지 않으면 false다.", () => {
    expect(some({ a: 1, b: 2 }, (value) => value > 10)).toBe(false);
  });
});
