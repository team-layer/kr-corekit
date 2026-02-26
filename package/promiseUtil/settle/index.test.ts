import { describe, expect, test } from "vitest";
import settle from ".";

describe("promise settle 유틸 함수 테스트", () => {
  test("성공/실패를 분리해 반환한다.", async () => {
    const result = await settle([
      Promise.resolve(1),
      Promise.reject(new Error("fail")),
      Promise.resolve(2),
    ]);

    expect(result.fulfilled).toEqual([1, 2]);
    expect(result.rejected).toHaveLength(1);
  });
});
