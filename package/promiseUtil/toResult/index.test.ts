import { describe, expect, test } from "vitest";
import toResult from ".";

describe("promise toResult 유틸 함수 테스트", () => {
  test("성공 시 data를 반환한다.", async () => {
    const result = await toResult(Promise.resolve(10));

    expect(result).toEqual({ data: 10, error: null });
  });

  test("실패 시 error를 반환한다.", async () => {
    const result = await toResult(Promise.reject(new Error("fail")));

    expect(result.data).toBeNull();
    expect(result.error).toBeInstanceOf(Error);
  });
});
