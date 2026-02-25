import { describe, expect, test } from "vitest";
import every from ".";

describe("collection every 유틸 함수 테스트", () => {
  test("모든 값이 조건을 만족하면 true다.", () => {
    expect(every([2, 4, 6], (value) => value % 2 === 0)).toBe(true);
  });

  test("하나라도 조건을 만족하지 않으면 false다.", () => {
    expect(every({ a: 1, b: 2 }, (value) => value > 1)).toBe(false);
  });
});
