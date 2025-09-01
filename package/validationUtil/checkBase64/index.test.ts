import { describe, expect, it } from "vitest";
import checkBase64 from ".";

describe("checkBase64 유틸 함수 테스트", () => {
  it("유효한 base64 문자열에 대해 true를 반환해야 합니다.", () => {
    expect(checkBase64("U29tZSB2YWxpZCBiYXNlNjQgc3RyaW5n")).toBe(true);
    expect(checkBase64("SGVsbG8gd29ybGQ=")).toBe(true);
  });

  it("유효하지 않은 base64 문자열에 대해 false를 반환해야 합니다.", () => {
    expect(checkBase64("bfdbfdbsba")).toBe(false);
    expect(checkBase64("U29tZSB2YWxpZCBiYXNlNjQgc3RyaW5n===")).toBe(false);
  });
});
