import { describe, expect, test } from "vitest";
import checkPassword from ".";

describe("checkPassword 유틸 함수 테스트", () => {
  describe("유효한 비밀번호에 대해 true를 반환해야 합니다.", () => {
    test("기본 상태는 아무 옵션도 설정되어있지 않기 때문에 true를 반환해야 합니다.", () => {
      expect(checkPassword("Valid123!", {})).toBe(true);
    });
    test("특수 문자가 필요한 경우 true를 반환해야 합니다.", () => {
      expect(checkPassword("vsdvdsvsdvs1!", { requireSpecialChar: true })).toBe(
        true
      );
    });
    test("대문자가 필요한 경우 true를 반환해야 합니다.", () => {
      expect(checkPassword("Vsdvd", { requireUppercase: true })).toBe(true);
    });
    test("최소 3자, 최대 5자의 길이를 가져야 하는 경우 true를 반환해야 합니다.", () => {
      expect(checkPassword("Vsd", { minLength: 3, maxLength: 5 })).toBe(true);
    });
  });

  describe("유효하지 않은 비밀번호에 대해 false를 반환해야 합니다.", () => {
    test("길이가 유효하지 않은 경우 false를 반환해야 합니다.", () => {
      expect(checkPassword("invalid", { minLength: 3, maxLength: 5 })).toBe(
        false
      );
    });
    test("특수 문자가 없는 경우 false를 반환해야 합니다.", () => {
      expect(checkPassword("dffadsfas", { requireSpecialChar: true })).toBe(
        false
      );
    });
  });
});
