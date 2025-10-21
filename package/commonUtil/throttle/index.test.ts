import { afterEach, describe, expect, test, vi } from "vitest";
import throttle from ".";

describe("throttle 유틸 함수 테스트", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });
  test("함수가 지정된 시간 (300ms) 간격으로만 실행되어야 한다.", () => {
    const fn = vi.fn();
    vi.useFakeTimers();
    const throttleFn = throttle(fn, 300);

    throttleFn();
    expect(fn).toHaveBeenCalledTimes(1);

    throttleFn();
    vi.advanceTimersByTime(299);
    throttleFn();
    expect(fn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(1);
    throttleFn();
    expect(fn).toHaveBeenCalledTimes(2);
  });
  test("여러 번 호출했을 경우에는 지정된 시간 간격으로만 이벤트가 실행되어야 한다.", () => {
    const fn = vi.fn();
    vi.useFakeTimers();
    const throttled = throttle(fn, 300);

    throttled({ name: "현우" });
    vi.advanceTimersByTime(100);
    throttled({ name: "승준" });
    vi.advanceTimersByTime(100);
    throttled({ name: "철수" });

    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenNthCalledWith(1, { name: "현우" });
  });
});
