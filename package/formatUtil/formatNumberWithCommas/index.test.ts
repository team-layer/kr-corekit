import { describe, expect, test } from "vitest";
import formatNumberWithCommas from ".";

describe("formatNumberWithCommas", () => {
  test("네 자리 정수를 올바르게 포맷팅해야 합니다.", () => {
    expect(formatNumberWithCommas(1234)).toBe("1,234");
  });

  test("세 자리 정수는 콤마 없이 그대로 반환해야 합니다.", () => {
    expect(formatNumberWithCommas(999)).toBe("999");
  });

  test('숫자 0을 올바르게 "0"으로 반환해야 합니다.', () => {
    expect(formatNumberWithCommas(0)).toBe("0");
  });

  test("숫자 입력 시 3자리마다 콤마가 포함된 문자열을 반환한다", () => {
    expect(formatNumberWithCommas(1234567)).toBe("1,234,567");
    expect(formatNumberWithCommas(-12345.67)).toBe("-12,345.67");
  });

  test("null 입력 시 빈 문자열을 반환해야 합니다.", () => {
    expect(formatNumberWithCommas(null)).toBe("");
  });

  test("undefined 입력 시 빈 문자열을 반환해야 합니다.", () => {
    expect(formatNumberWithCommas(undefined)).toBe("");
  });

  test("빈 문자열 입력 시 빈 문자열을 반환해야 합니다.", () => {
    expect(formatNumberWithCommas("")).toBe("");
  });

  test("숫자로 변환할 수 없는 문자열은 그대로 반환해야 합니다.", () => {
    expect(formatNumberWithCommas("안녕하세요")).toBe("안녕하세요");
  });

  test("이미 콤마가 포함된 문자열은 (NaN으로 처리되어) 그대로 반환해야 합니다.", () => {
    expect(formatNumberWithCommas("12,345")).toBe("12,345");
  });

  test('NaN 값을 직접 입력하면 "NaN" 문자열을 반환해야 합니다.', () => {
    expect(formatNumberWithCommas(NaN)).toBe("NaN");
  });
});
