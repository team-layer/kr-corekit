import { describe, expect, test, vi } from "vitest";
import retry from ".";

describe("retry 유틸 함수 테스트", () => {
  test("정상적으로 실행되는 함수는 한번만 실행한다.", async () => {
    const fn = vi.fn().mockResolvedValue("success!");

    const result = await retry(fn, 3);

    expect(result).toBe("success!");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("함수를 실행하며 오류가 발생하면 재시도한다.", async () => {
    const fn = vi
      .fn()
      .mockRejectedValueOnce(new Error("fail 1"))
      .mockRejectedValueOnce(new Error("fail 2"))
      .mockResolvedValue("success!");

    const result = await retry(fn, 3);

    expect(result).toBe("success!");
    expect(fn).toHaveBeenCalledTimes(3);
  });

  test("재시도 한도를 초과하면 마지막 에러를 던진다.", async () => {
    const error = new Error("always fail");
    const fn = vi.fn().mockRejectedValue(error);

    await expect(retry(fn, 2)).rejects.toThrow("always fail");
    expect(fn).toHaveBeenCalledTimes(3);
  });

  test("기본 재시도 횟수는 3번이다.", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("fail"));

    await expect(retry(fn)).rejects.toThrow("fail");
    expect(fn).toHaveBeenCalledTimes(4);
  });

  test("타입 안전성: 반환 타입이 올바르게 추론된다.", async () => {
    const stringFn = vi.fn().mockResolvedValue("hello");
    const numberFn = vi.fn().mockResolvedValue(42);
    const objectFn = vi.fn().mockResolvedValue({ id: 1 });

    const stringResult = await retry(stringFn);
    const numberResult = await retry(numberFn);
    const objectResult = await retry(objectFn);

    expect(typeof stringResult).toBe("string");
    expect(typeof numberResult).toBe("number");
    expect(typeof objectResult).toBe("object");

    expect(stringResult).toBe("hello");
    expect(numberResult).toBe(42);
    expect(objectResult).toEqual({ id: 1 });
  });

  test("0번 재시도 시 한 번만 실행한다.", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("fail"));

    await expect(retry(fn, 0)).rejects.toThrow("fail");
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
