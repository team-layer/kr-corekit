import { describe, expect, test } from "vitest";
import subHours from ".";

describe("date subHours 유틸 함수 테스트", () => {
  test("시간을 뺀 Date를 반환한다.", () => {
    const result = subHours(new Date("2025-01-01T05:00:00.000Z"), 5);
    expect(result.toISOString()).toBe("2025-01-01T00:00:00.000Z");
  });
});
