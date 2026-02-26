import { describe, expect, test } from "vitest";
import flatten from ".";

describe("flatten 유틸 함수 테스트", () => {
  test("1단계 중첩 배열을 평탄화한다.", () => {
    expect(flatten([1, [2, 3], [4]])).toEqual([1, 2, 3, 4]);
  });

  test("빈 배열은 빈 배열을 반환한다.", () => {
    expect(flatten([])).toEqual([]);
  });
});
