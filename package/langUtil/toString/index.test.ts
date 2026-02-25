import { describe, expect, test } from "vitest";
import toString from ".";

describe("lang toString 유틸 함수 테스트", () => {
  test("null/undefined는 빈 문자열로 변환한다.", () => {
    expect(toString(null)).toBe("");
    expect(toString(undefined)).toBe("");
  });

  test("다른 값은 문자열로 변환한다.", () => {
    expect(toString(123)).toBe("123");
  });
});
