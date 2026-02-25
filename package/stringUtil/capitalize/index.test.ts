import { describe, expect, test } from "vitest";
import capitalize from ".";

describe("capitalize 유틸 함수 테스트", () => {
  test("첫 글자를 대문자로 변환한다.", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("나머지 글자는 소문자로 변환한다.", () => {
    expect(capitalize("hELLO")).toBe("Hello");
  });
});
