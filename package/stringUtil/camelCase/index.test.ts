import { describe, expect, test } from "vitest";
import camelCase from ".";

describe("camelCase 유틸 함수 테스트", () => {
  test("문장을 camelCase로 변환한다.", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
  });

  test("구분자가 섞여 있어도 정상 동작한다.", () => {
    expect(camelCase("hello_world-test Value")).toBe("helloWorldTestValue");
  });
});
