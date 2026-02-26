import { describe, expect, test } from "vitest";
import partition from ".";

describe("partition 유틸 함수 테스트", () => {
  test("조건에 따라 배열을 두 그룹으로 분리한다.", () => {
    expect(partition([1, 2, 3, 4], (value) => value % 2 === 0)).toEqual([
      [2, 4],
      [1, 3],
    ]);
  });

  test("모든 값이 참이면 두 번째 배열은 비어 있다.", () => {
    expect(partition([1, 2], () => true)).toEqual([[1, 2], []]);
  });
});
