import { describe, expect, test } from "vitest";
import differenceInDays from ".";

describe("date differenceInDays 유틸 함수 테스트", () => {
  test("일수 차이를 반환한다.", () => {
    expect(differenceInDays("2025-01-03", "2025-01-01")).toBe(2);
  });

  test("역순이면 음수를 반환한다.", () => {
    expect(differenceInDays("2025-01-01", "2025-01-03")).toBe(-2);
  });
});
