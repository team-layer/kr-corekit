import { describe, expect, test } from "vitest";
import { formatPhoneNumber } from "."; // 실제 함수 경로에 맞게 수정해주세요.

describe("formatPhoneNumber", () => {
  describe("휴대폰 번호", () => {
    test("11자리 휴대폰 번호에 하이픈을 올바르게 추가한다 (010)", () => {
      expect(formatPhoneNumber("01012345678")).toBe("010-1234-5678");
    });

    test("11자리 휴대폰 번호에 하이픈을 올바르게 추가한다 (011)", () => {
      expect(formatPhoneNumber("01198765432")).toBe("011-9876-5432");
    });

    test("중간에 공백이나 하이픈이 있어도 숫자를 제외하고 올바르게 처리한다", () => {
      expect(formatPhoneNumber("010-1234 5678")).toBe("010-1234-5678");
    });
  });

  describe("지역번호", () => {
    test("서울 지역번호(02) 9자리에 하이픈을 올바르게 추가한다", () => {
      expect(formatPhoneNumber("021234567")).toBe("02-123-4567");
    });

    test("서울 지역번호(02) 10자리에 하이픈을 올바르게 추가한다", () => {
      expect(formatPhoneNumber("0212345678")).toBe("02-1234-5678");
    });

    test("서울 외 지역번호(031) 10자리에 하이픈을 올바르게 추가한다", () => {
      expect(formatPhoneNumber("0311234567")).toBe("031-123-4567");
    });

    test("서울 외 지역번호(054) 10자리에 하이픈을 올바르게 추가한다", () => {
      expect(formatPhoneNumber("0541234567")).toBe("054-123-4567");
    });
  });

  describe("대표번호", () => {
    test("8자리 대표번호(1588)에 하이픈을 올바르게 추가한다", () => {
      expect(formatPhoneNumber("15881234")).toBe("1588-1234");
    });

    test("8자리 대표번호(1670)에 하이픈을 올바르게 추가한다", () => {
      expect(formatPhoneNumber("16709876")).toBe("1670-9876");
    });
  });

  describe("예외 케이스", () => {
    test("빈 문자열을 입력하면 빈 문자열을 반환한다", () => {
      expect(formatPhoneNumber("")).toBe("");
    });

    test("null 또는 undefined를 입력하면 빈 문자열을 반환한다", () => {
      // @ts-ignore
      expect(formatPhoneNumber(null)).toBe("");
      // @ts-ignore
      expect(formatPhoneNumber(undefined)).toBe("");
    });

    test("숫자가 아닌 문자가 포함된 경우, 해당 문자를 제거하고 포맷팅한다", () => {
      expect(formatPhoneNumber("010-abcd-1234-efg-5678")).toBe("010-1234-5678");
    });

    test("어떤 형식에도 맞지 않는 짧은 길이라면 숫자만 반환한다", () => {
      expect(formatPhoneNumber("12345")).toBe("12345");
    });

    test("어떤 형식에도 맞지 않는 긴 길이라면 숫자만 반환한다", () => {
      expect(formatPhoneNumber("0101234567890")).toBe("0101234567890");
    });
  });
});
