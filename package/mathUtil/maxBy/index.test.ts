import { describe, expect, test } from "vitest";
import maxBy from ".";

describe("math maxBy 유틸 함수 테스트", () => {
  test("iteratee 기준 최댓값 요소를 반환한다.", () => {
    expect(maxBy([{ score: 10 }, { score: 5 }], (item) => item.score)).toEqual({
      score: 10,
    });
  });
});
