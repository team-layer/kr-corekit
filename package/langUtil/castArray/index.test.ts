import { describe, expect, test } from "vitest";
import castArray from ".";

describe("lang castArray 유틸 함수 테스트", () => {
  test("단일 값을 배열로 감싼다.", () => {
    expect(castArray(1)).toEqual([1]);
  });

  test("배열 값은 복사본을 반환한다.", () => {
    expect(castArray([1, 2])).toEqual([1, 2]);
  });
});
