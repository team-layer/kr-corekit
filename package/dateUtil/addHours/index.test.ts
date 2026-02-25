import { describe, expect, test } from "vitest";
import addHours from ".";

describe("date addHours 유틸 함수 테스트", () => {
  test("시간을 더한 Date를 반환한다.", () => {
    const result = addHours(new Date("2025-01-01T00:00:00.000Z"), 5);
    expect(result.toISOString()).toBe("2025-01-01T05:00:00.000Z");
  });
});
