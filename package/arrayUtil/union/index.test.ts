import { describe, expect, test } from "vitest";
import union from ".";

describe("union 유틸 함수 테스트", () => {
  test("배열들의 합집합을 순서대로 반환한다.", () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test("인자가 없으면 빈 배열을 반환한다.", () => {
    expect(union()).toEqual([]);
  });
});
