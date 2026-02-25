import { describe, expect, test } from "vitest";
import merge from ".";

describe("merge 유틸 함수 테스트", () => {
  test("여러 객체를 깊게 병합한다.", () => {
    const target = { a: { b: 1 } };

    const result = merge(target, { a: { c: 2 } }, { d: 3 });

    expect(result).toEqual({ a: { b: 1, c: 2 }, d: 3 });
    expect(result).toBe(target);
  });

  test("배열은 새 배열로 덮어쓴다.", () => {
    const result = merge({ a: [1, 2] }, { a: [3] });

    expect(result).toEqual({ a: [3] });
  });
});
