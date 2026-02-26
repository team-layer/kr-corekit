import { describe, expect, test } from "vitest";
import withTimeout from ".";

describe("promise withTimeout 유틸 함수 테스트", () => {
  test("시간 내 완료되면 원래 결과를 반환한다.", async () => {
    const result = await withTimeout(Promise.resolve("ok"), 50);
    expect(result).toBe("ok");
  });

  test("시간 초과 시 에러를 던진다.", async () => {
    await expect(
      withTimeout(new Promise((resolve) => setTimeout(() => resolve("late"), 30)), 5)
    ).rejects.toThrow("timed out");
  });

  test("fallback이 있으면 fallback 결과를 반환한다.", async () => {
    const result = await withTimeout(
      new Promise((resolve) => setTimeout(() => resolve("late"), 30)),
      5,
      { fallback: () => "fallback" }
    );

    expect(result).toBe("fallback");
  });
});
