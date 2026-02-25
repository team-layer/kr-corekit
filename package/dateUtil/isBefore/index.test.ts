import { describe, expect, test } from "vitest";
import isBefore from ".";

describe("date isBefore 유틸 함수 테스트", () => {
  test("앞선 시각이면 true를 반환한다.", () => {
    expect(isBefore("2025-01-01", "2025-01-02")).toBe(true);
  });
});
