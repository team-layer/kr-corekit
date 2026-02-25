import { describe, expect, test } from "vitest";
import isAfter from ".";

describe("date isAfter 유틸 함수 테스트", () => {
  test("뒤 시각이면 true를 반환한다.", () => {
    expect(isAfter("2025-01-03", "2025-01-02")).toBe(true);
  });
});
