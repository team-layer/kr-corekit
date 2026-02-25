import { describe, expect, test, vi } from "vitest";
import memoize from ".";

describe("memoize 유틸 함수 테스트", () => {
  test("같은 키는 캐시된 결과를 반환한다.", () => {
    const fn = vi.fn((value: number) => value * 2);
    const memoized = memoize(fn);

    expect(memoized(2)).toBe(4);
    expect(memoized(2)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("resolver를 사용해 커스텀 캐시 키를 만들 수 있다.", () => {
    const fn = vi.fn((a: number, b: number) => a + b);
    const memoized = memoize(fn, (a, b) => `${a}:${b}`);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
