import { describe, expect, test } from "vitest";
import isNil from ".";

describe("isNil 유틸 함수 테스트", () => {
  test("null과 undefined는 true를 반환한다.", () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });

  test("그 외 값은 false를 반환한다.", () => {
    expect(isNil(0)).toBe(false);
  });
});
