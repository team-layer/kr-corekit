import { describe, expect, test } from "vitest";
import isBoolean from ".";

describe("isBoolean 유틸 함수 테스트", () => {
  test("불리언이면 true를 반환한다.", () => {
    expect(isBoolean(true)).toBe(true);
  });

  test("불리언이 아니면 false를 반환한다.", () => {
    expect(isBoolean(0)).toBe(false);
  });
});
