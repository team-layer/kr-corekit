import { describe, expect, test } from "vitest";
import endOfDay from ".";

describe("date endOfDay 유틸 함수 테스트", () => {
  test("해당 날짜의 종료 시각을 반환한다.", () => {
    const result = endOfDay(new Date(2025, 0, 1, 12, 34, 56, 789));
    expect(result.getFullYear()).toBe(2025);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(1);
    expect(result.getHours()).toBe(23);
    expect(result.getMinutes()).toBe(59);
    expect(result.getSeconds()).toBe(59);
    expect(result.getMilliseconds()).toBe(999);
  });
});
