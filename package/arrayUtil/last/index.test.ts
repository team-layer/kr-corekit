import { describe, expect, test } from "vitest";
import last from ".";

describe("last 유틸 함수 테스트", () => {
  test("마지막 값을 반환한다.", () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  test("빈 배열은 undefined를 반환한다.", () => {
    expect(last([])).toBeUndefined();
  });
});
