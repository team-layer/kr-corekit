import { describe, expect, test } from "vitest";
import minBy from ".";

describe("math minBy 유틸 함수 테스트", () => {
  test("iteratee 기준 최솟값 요소를 반환한다.", () => {
    expect(minBy([{ score: 10 }, { score: 5 }], (item) => item.score)).toEqual({
      score: 5,
    });
  });
});
