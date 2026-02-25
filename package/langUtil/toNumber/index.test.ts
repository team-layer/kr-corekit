import { describe, expect, test } from "vitest";
import toNumber from ".";

describe("lang toNumber 유틸 함수 테스트", () => {
  test("숫자로 변환한다.", () => {
    expect(toNumber("42")).toBe(42);
  });

  test("변환 실패 시 기본값을 반환한다.", () => {
    expect(toNumber("x", 0)).toBe(0);
  });
});
