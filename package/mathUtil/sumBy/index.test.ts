import { describe, expect, test } from "vitest";
import sumBy from ".";

describe("math sumBy 유틸 함수 테스트", () => {
  test("iteratee 결과를 합산한다.", () => {
    expect(sumBy([{ score: 10 }, { score: 15 }], (item) => item.score)).toBe(25);
  });
});
