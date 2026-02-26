import { describe, expect, test } from "vitest";
import first from ".";

describe("first 유틸 함수 테스트", () => {
  test("첫 번째 값을 반환한다.", () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  test("빈 배열은 undefined를 반환한다.", () => {
    expect(first([])).toBeUndefined();
  });
});
