import { describe, expect, test } from "vitest";
import isArray from ".";

describe("isArray 유틸 함수 테스트", () => {
  test("배열이면 true를 반환한다.", () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  test("배열이 아니면 false를 반환한다.", () => {
    expect(isArray("array")).toBe(false);
  });
});
