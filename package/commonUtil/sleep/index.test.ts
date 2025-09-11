import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import sleep from ".";

describe("sleep", () => {
  // 각 'test'가 실행되기 전에 가짜 타이머를 활성화합니다.
  beforeEach(() => {
    // Vitest에게 setTimeout, setInterval 같은 타이머 함수들을
    // 직접 제어할 수 있는 가짜(Fake) 함수로 대체하도록 지시합니다.
    // 이렇게 하면 실제로 시간을 기다리지 않고 테스트할 수 있습니다.
    vi.useFakeTimers();
  });

  // 각 테스트가 끝난 후 실제 타이머로 복원하여 다른 테스트에 영향을 주지 않도록 합니다.
  afterEach(() => {
    // 가짜로 만들었던 타이머 함수들을 원래의 실제(Real) 함수로 되돌립니다.
    // 테스트 간의 독립성을 보장하기 위한 좋은 습관입니다.
    // useFakeTimers 사용 이후에 이 과정을 하지 않으면, 다른 테스트에도 영향을 줄 수 있습니다.
    vi.useRealTimers();
  });

  test("지정된 시간(ms) 이후에 resolve 되어야 한다", async () => {
    const promise = sleep(2000);

    // 가짜 시간을 2000ms (2초) 만큼 앞으로 '빨리 감기'합니다.
    // 이 시간 안에 실행되기로 예약된 setTimeout 콜백이 즉시 실행됩니다.
    // Async 버전은 이로 인해 resolve되는 Promise가 완료될 때까지 기다립니다.
    await vi.advanceTimersByTimeAsync(2000);

    // Promise가 성공적으로 완료되었는지 확인합니다.
    await expect(promise).resolves.toBeUndefined();
  });

  test("지정된 시간 이전에는 resolve 되면 안 된다", async () => {
    const onResolve = vi.fn();

    sleep(3000).then(onResolve);

    await vi.advanceTimersByTimeAsync(2999);

    // 이때 onResolve 함수는 아직 호출되지 않았어야 합니다.
    expect(onResolve).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1);

    // 이제 onResolve 함수가 정확히 1번 호출되었어야 합니다.
    expect(onResolve).toHaveBeenCalledTimes(1);
  });

  test("ms가 0일 때 다음 틱(tick)에 resolve 되어야 한다", async () => {
    const onResolve = vi.fn();

    const promise = sleep(0).then(onResolve);

    expect(onResolve).not.toHaveBeenCalled();

    // 시간을 특정 시간만큼 감는 대신, 현재 대기 중인 타이머만 즉시 실행합니다.
    // setTimeout(fn, 0)과 같은 코드를 테스트할 때 유용합니다.
    await vi.runOnlyPendingTimersAsync();

    expect(onResolve).toHaveBeenCalledTimes(1);

    await expect(promise).resolves.toBeUndefined();
  });

  test("음수 값은 0처럼 처리되어야 한다", async () => {
    const onResolve = vi.fn();
    const promise = sleep(-5).then(onResolve);

    // -5ms는 0ms처럼 처리되어 즉시(다음 tick)에 실행되어야 합니다.
    await vi.runOnlyPendingTimersAsync();

    expect(onResolve).toHaveBeenCalledTimes(1);

    await expect(promise).resolves.toBeUndefined();
  });
});
