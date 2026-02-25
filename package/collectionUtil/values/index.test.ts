import { describe, expect, test } from "vitest";
import values from ".";

describe("collection values 유틸 함수 테스트", () => {
  test("값 배열을 반환한다.", () => {
    expect(values({ a: 1, b: 2 })).toEqual([1, 2]);
  });

  test("배열은 복사본을 반환한다.", () => {
    expect(values([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
