import { describe, expect, test } from "vitest";
import meanBy from ".";

describe("math meanBy 유틸 함수 테스트", () => {
  test("iteratee 기준 평균값을 반환한다.", () => {
    expect(meanBy([{ v: 3 }, { v: 5 }], (item) => item.v)).toBe(4);
  });
});
