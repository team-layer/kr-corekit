import { describe, expect, test } from "vitest";
import defer from ".";

describe("promise defer 유틸 함수 테스트", () => {
  test("resolve로 Promise를 완료할 수 있다.", async () => {
    const d = defer<number>();
    d.resolve(10);

    await expect(d.promise).resolves.toBe(10);
  });

  test("reject로 Promise를 실패시킬 수 있다.", async () => {
    const d = defer<number>();
    d.reject(new Error("fail"));

    await expect(d.promise).rejects.toThrow("fail");
  });
});
