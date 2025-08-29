import { describe, expect, test } from "vitest";
import isNull from ".";

describe("isNull 유틸 함수 테스트", () => {
  test("null이 들어오는 경우 true를 반환한다.", () => {
    expect(isNull(null)).toBe(true);
  });
  test("undefined이 들어오는 경우 false를 반환한다.", () => {
    expect(isNull(undefined)).toBe(false);
  });
  test("빈 문자열이 들어오는 경우 false를 반환한다.", () => {
    expect(isNull("")).toBe(false);
  });
  test("공백 문자열이 들어오는 경우 false를 반환한다.", () => {
    expect(isNull(" ")).toBe(false);
  });
  test("0이 들어오는 경우 false를 반환한다.", () => {
    expect(isNull(0)).toBe(false);
  });
});
