import { describe, expect, test } from "vitest";
import includes from ".";

describe("collection includes 유틸 함수 테스트", () => {
  test("배열/객체 값 포함 여부를 확인한다.", () => {
    expect(includes([1, 2, 3], 2)).toBe(true);
    expect(includes({ a: "x", b: "y" }, "z")).toBe(false);
  });

  test("문자열 포함 여부를 확인한다.", () => {
    expect(includes("hello world", "world")).toBe(true);
  });
});
