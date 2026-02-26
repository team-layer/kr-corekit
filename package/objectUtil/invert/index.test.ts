import { describe, expect, test } from "vitest";
import invert from ".";

describe("invert 유틸 함수 테스트", () => {
  test("key와 value를 뒤집는다.", () => {
    expect(invert({ a: "x", b: "y" })).toEqual({ x: "a", y: "b" });
  });

  test("중복 value가 있으면 마지막 key가 남는다.", () => {
    expect(invert({ a: "x", b: "x" })).toEqual({ x: "b" });
  });
});
