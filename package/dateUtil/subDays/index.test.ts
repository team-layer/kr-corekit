import { describe, expect, test } from "vitest";
import subDays from ".";

describe("date subDays 유틸 함수 테스트", () => {
  test("일수를 뺀 Date를 반환한다.", () => {
    const result = subDays(new Date("2025-01-03T00:00:00.000Z"), 2);
    expect(result.toISOString()).toBe("2025-01-01T00:00:00.000Z");
  });
});
