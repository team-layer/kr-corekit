import { describe, expect, test } from "vitest";
import decodeBase64 from ".";

describe("decodeBase64 유틸 함수 테스트", () => {
  test("정상적인 Base64 문자열을 디코딩해야 한다", () => {
    const result = decodeBase64("SGVsbG8sJTIwV29ybGQh");
    expect(result).toBe("Hello, World!");
  });
  test("빈 문자열을 디코딩하면 빈 문자열을 반환해야 한다", () => {
    const result = decodeBase64("");
    expect(result).toBe("");
  });
  test("특수 문자가 포함된 Base64 문자열을 올바르게 디코딩해야 한다", () => {
    const result = decodeBase64(
      "ISU0MCUyMyUyNCUyNSU1RSUyNiooKV8lMkIlMkYlM0IlMkMlM0YlM0ElNDAlMjY="
    );
    expect(result).toBe("!@#$%^&*()_+/;,?:@&");
  });
  test("유니코드 문자가 포함된 Base64 문자열을 올바르게 디코딩해야 한다", () => {
    const result = decodeBase64(
      "JUUzJTgxJTkzJUUzJTgyJTkzJUUzJTgxJUFCJUUzJTgxJUExJUUzJTgxJUFG"
    );
    expect(result).toBe("こんにちは");
  });
  test("null 또는 undefined를 디코딩하면 그대로 반환해야 한다", () => {
    // @ts-ignore
    expect(decodeBase64(null)).toBe(null);
    // @ts-ignore
    expect(decodeBase64(undefined)).toBe(undefined);
  });
  test("한글이 들어오면 올바르게 디코딩해야 한다", () => {
    const result = decodeBase64(
      "JUVDJTk1JTg4JUVCJTg1JTk1JUVEJTk1JTk4JUVDJTg0JUI4JUVDJTlBJTk0"
    );
    expect(result).toBe("안녕하세요");
  });
});
