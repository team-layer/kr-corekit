import { describe, expect, test } from "vitest";
import startOfDay from ".";

describe("date startOfDay 유틸 함수 테스트", () => {
  test("해당 날짜의 시작 시각을 반환한다.", () => {
    const result = startOfDay(new Date(2025, 0, 1, 12, 34, 56, 789));
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(1);
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });
});
