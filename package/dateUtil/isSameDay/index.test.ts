import { describe, expect, test } from "vitest";
import isSameDay from ".";

describe("date isSameDay 유틸 함수 테스트", () => {
  test("같은 날짜면 true를 반환한다.", () => {
    expect(
      isSameDay(new Date(2025, 0, 1, 0, 0, 0), new Date(2025, 0, 1, 23, 59, 59))
    ).toBe(true);
  });

  test("다른 날짜면 false를 반환한다.", () => {
    expect(isSameDay("2025-01-01", "2025-01-02")).toBe(false);
  });
});
