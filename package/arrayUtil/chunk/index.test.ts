import { describe, expect, test } from "vitest";
import chunk from ".";

describe("chunk 유틸 함수 테스트", () => {
  test("배열을 지정된 크기로 분할한다.", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test("size가 1보다 작거나 유효하지 않으면 1로 처리한다.", () => {
    expect(chunk([1, 2, 3], 0)).toEqual([[1], [2], [3]]);
    expect(chunk([1, 2, 3], Number.NaN)).toEqual([[1], [2], [3]]);
  });

  test("빈 배열은 빈 배열을 반환한다.", () => {
    expect(chunk([], 3)).toEqual([]);
  });
});
