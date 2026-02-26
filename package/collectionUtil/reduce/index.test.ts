import { describe, expect, test } from "vitest";
import reduce from ".";

describe("collection reduce 유틸 함수 테스트", () => {
  test("누적 계산을 수행한다.", () => {
    expect(reduce([1, 2, 3], (acc, value) => acc + value, 0)).toBe(6);
  });

  test("객체에서도 누적 계산을 수행한다.", () => {
    expect(reduce({ a: 1, b: 2 }, (acc, value, key) => ({ ...acc, [key]: value * 2 }), {} as Record<string, number>)).toEqual({ a: 2, b: 4 });
  });
});
