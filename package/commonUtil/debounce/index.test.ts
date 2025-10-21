import { describe } from "node:test";
import { afterEach, expect, test, vi } from "vitest";
import debounce from "./index";

describe("debounce 유틸 함수 테스트", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  test("함수가 지정된 시간 (300ms) 후에 실행되어야 한다.", () => {
    const fn = vi.fn();
    vi.useFakeTimers();
    const debounceFn = debounce(fn, 300);
    debounceFn();

    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(299);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("여러 번 호출했을 경우에는 일정 시간 후 하나의 이벤트만 실행되어야 한다.", () => {
    const fn = vi.fn();
    vi.useFakeTimers();
    const debounced = debounce(fn, 300);

    debounced({ name: "현우" });
    vi.advanceTimersByTime(100);
    debounced({ name: "승준" });
    vi.advanceTimersByTime(100);
    debounced({ name: "철수" });

    vi.advanceTimersByTime(300);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith({ name: "철수" });
  });
});
