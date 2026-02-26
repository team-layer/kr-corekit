import { describe, expect, test, vi } from "vitest";
import retryWithDelay from ".";

describe("promise retryWithDelay 유틸 함수 테스트", () => {
  test("실패 시 재시도 후 성공하면 결과를 반환한다.", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("fail 1"))
      .mockRejectedValueOnce(new Error("fail 2"))
      .mockResolvedValue("ok");

    const result = await retryWithDelay(fn, { retries: 5, delay: 0 });

    expect(result).toBe("ok");
    expect(fn).toHaveBeenCalledTimes(3);
  });

  test("재시도 한도 초과 시 에러를 던진다.", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("always fail"));

    await expect(retryWithDelay(fn, { retries: 2, delay: 0 })).rejects.toThrow(
      "always fail"
    );

    expect(fn).toHaveBeenCalledTimes(2);
  });
});
