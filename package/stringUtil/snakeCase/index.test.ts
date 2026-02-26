import { describe, expect, test } from "vitest";
import snakeCase from ".";

describe("snakeCase 유틸 함수 테스트", () => {
  test("문장을 snake_case로 변환한다.", () => {
    expect(snakeCase("Hello World")).toBe("hello_world");
  });

  test("kebab-case 문자열도 변환한다.", () => {
    expect(snakeCase("hello-world")).toBe("hello_world");
  });
});
