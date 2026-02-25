import { describe, expect, test } from "vitest";
import toBoolean from ".";

describe("lang toBoolean 유틸 함수 테스트", () => {
  test("문자열 boolean 값을 변환한다.", () => {
    expect(toBoolean("true")).toBe(true);
    expect(toBoolean("false")).toBe(false);
  });

  test("숫자 값을 변환한다.", () => {
    expect(toBoolean(1)).toBe(true);
    expect(toBoolean(0)).toBe(false);
  });
});
