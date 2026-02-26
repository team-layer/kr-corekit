import { describe, expect, test } from "vitest";
import pascalCase from ".";

describe("pascalCase 유틸 함수 테스트", () => {
  test("문장을 PascalCase로 변환한다.", () => {
    expect(pascalCase("hello world")).toBe("HelloWorld");
  });

  test("기존 구분자를 제거하고 변환한다.", () => {
    expect(pascalCase("hello_world-test")).toBe("HelloWorldTest");
  });
});
