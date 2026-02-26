import { describe, expect, test } from "vitest";
import isString from ".";

describe("isString 유틸 함수 테스트", () => {
  test("문자열이면 true를 반환한다.", () => {
    expect(isString("hello")).toBe(true);
  });

  test("문자열이 아니면 false를 반환한다.", () => {
    expect(isString(1)).toBe(false);
  });
});
