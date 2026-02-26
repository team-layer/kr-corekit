import { describe, expect, test } from "vitest";
import defaultTo from ".";

describe("lang defaultTo 유틸 함수 테스트", () => {
  test("nullish 값이면 기본값을 반환한다.", () => {
    expect(defaultTo(null, "fallback")).toBe("fallback");
    expect(defaultTo(undefined, "fallback")).toBe("fallback");
  });

  test("유효한 값이면 원래 값을 반환한다.", () => {
    expect(defaultTo("value", "fallback")).toBe("value");
  });
});
