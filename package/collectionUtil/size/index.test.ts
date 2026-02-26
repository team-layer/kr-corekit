import { describe, expect, test } from "vitest";
import size from ".";

describe("collection size 유틸 함수 테스트", () => {
  test("배열/객체/문자열 크기를 반환한다.", () => {
    expect(size([1, 2, 3])).toBe(3);
    expect(size({ a: 1, b: 2 })).toBe(2);
    expect(size("abc")).toBe(3);
  });

  test("Map/Set 크기를 반환한다.", () => {
    expect(size(new Map([["a", 1]]))).toBe(1);
    expect(size(new Set([1, 2]))).toBe(2);
  });
});
