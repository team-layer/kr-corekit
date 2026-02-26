import { describe, expect, test } from "vitest";
import kebabCase from ".";

describe("kebabCase 유틸 함수 테스트", () => {
  test("문장을 kebab-case로 변환한다.", () => {
    expect(kebabCase("Hello World")).toBe("hello-world");
  });

  test("camelCase 문자열도 변환한다.", () => {
    expect(kebabCase("helloWorld")).toBe("hello-world");
  });
});
