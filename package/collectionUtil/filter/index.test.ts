import { describe, expect, test } from "vitest";
import filter from ".";

describe("collection filter 유틸 함수 테스트", () => {
  test("조건에 맞는 값만 반환한다.", () => {
    expect(filter([1, 2, 3, 4], (value) => value % 2 === 0)).toEqual([2, 4]);
  });

  test("객체에서도 동작한다.", () => {
    expect(filter({ a: 1, b: 2, c: 3 }, (value) => value > 1)).toEqual([2, 3]);
  });
});
