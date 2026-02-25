import { describe, expect, test } from "vitest";
import isDate from ".";

describe("isDate 유틸 함수 테스트", () => {
  test("유효한 Date면 true를 반환한다.", () => {
    expect(isDate(new Date())).toBe(true);
  });

  test("Invalid Date는 false를 반환한다.", () => {
    expect(isDate(new Date("invalid"))).toBe(false);
  });
});
