import { describe, expect, test } from "vitest";
import isFunction from ".";

describe("isFunction 유틸 함수 테스트", () => {
  test("함수면 true를 반환한다.", () => {
    expect(isFunction(() => null)).toBe(true);
  });

  test("함수가 아니면 false를 반환한다.", () => {
    expect(isFunction({})).toBe(false);
  });
});
