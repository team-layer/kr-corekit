import { describe, expect, test } from "vitest";
import defaults from ".";

describe("defaults 유틸 함수 테스트", () => {
  test("undefined인 값에만 기본값을 채운다.", () => {
    expect(defaults({ a: 1, b: undefined }, { b: 2, c: 3 })).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  test("기존 값은 덮어쓰지 않는다.", () => {
    expect(defaults({ a: 1 }, { a: 2 })).toEqual({ a: 1 });
  });
});
