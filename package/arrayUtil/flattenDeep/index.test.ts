import { describe, expect, test } from "vitest";
import flattenDeep from ".";

describe("flattenDeep 유틸 함수 테스트", () => {
  test("모든 중첩 배열을 평탄화한다.", () => {
    expect(flattenDeep<number>([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  test("원시 값이 섞여 있어도 동작한다.", () => {
    expect(flattenDeep<string | number>(["a", [1, ["b"]]])).toEqual(["a", 1, "b"]);
  });
});
