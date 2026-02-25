import { describe, expect, test, vi } from "vitest";
import once from ".";

describe("once 유틸 함수 테스트", () => {
  test("첫 호출 결과를 캐시하고 이후에는 재실행하지 않는다.", () => {
    const fn = vi.fn((value: number) => value * 2);
    const wrapped = once(fn);

    expect(wrapped(2)).toBe(4);
    expect(wrapped(3)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
