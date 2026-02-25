import { describe, expect, test } from "vitest";
import median from ".";

describe("math median 유틸 함수 테스트", () => {
  test("홀수 길이 배열의 중앙값을 반환한다.", () => {
    expect(median([3, 1, 2])).toBe(2);
  });

  test("짝수 길이 배열의 중앙값 평균을 반환한다.", () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
  });
});
