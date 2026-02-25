import { describe, expect, test } from "vitest";
import isNumber from ".";

describe("isNumber 유틸 함수 테스트", () => {
  test("유효한 숫자면 true를 반환한다.", () => {
    expect(isNumber(1)).toBe(true);
  });

  test("NaN은 false를 반환한다.", () => {
    expect(isNumber(Number.NaN)).toBe(false);
  });
});
