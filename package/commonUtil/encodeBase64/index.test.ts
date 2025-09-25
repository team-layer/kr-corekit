import { describe, expect, test } from "vitest";
import encodeBase64 from ".";

describe("encodeBase64 유틸 함수 테스트", () => {
  test("정상적인 문자열을 Base64로 인코딩해야 한다", () => {
    const result = encodeBase64("Hello, World!");
    expect(result).toBe("SGVsbG8lMkMlMjBXb3JsZCE=");
  });
  test("빈 문자열을 인코딩하면 빈 문자열을 반환해야 한다", () => {
    const result = encodeBase64("");
    expect(result).toBe("");
  });
  test("특수 문자가 포함된 문자열을 올바르게 인코딩해야 한다", () => {
    const result = encodeBase64("!@#$%^&*()_+");
    expect(result).toBe("ISU0MCUyMyUyNCUyNSU1RSUyNiooKV8lMkI=");
  });
  test("유니코드 문자가 포함된 문자열을 올바르게 인코딩해야 한다", () => {
    const result = encodeBase64("こんにちは");
    expect(result).toBe(
      "JUUzJTgxJTkzJUUzJTgyJTkzJUUzJTgxJUFCJUUzJTgxJUExJUUzJTgxJUFG"
    );
  });
  test("null 또는 undefined를 인코딩하면 그대로 반환해야 한다", () => {
    // @ts-ignore
    expect(encodeBase64(null)).toBe(null);
    // @ts-ignore
    expect(encodeBase64(undefined)).toBe(undefined);
  });
  test("한글이 들어오면 올바르게 인코딩해야 한다", () => {
    const result = encodeBase64("안녕하세요");
    expect(result).toBe(
      "JUVDJTk1JTg4JUVCJTg1JTk1JUVEJTk1JTk4JUVDJTg0JUI4JUVDJTlBJTk0"
    );
  });
});
