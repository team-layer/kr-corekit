import { describe, expect, test } from "vitest";
import difference from ".";

describe("difference 유틸 함수 테스트", () => {
  test("두 번째 배열에 없는 값만 반환한다.", () => {
    expect(difference([1, 2, 3, 4], [2, 4])).toEqual([1, 3]);
  });

  test("제외 배열이 비어 있으면 원본 복사본을 반환한다.", () => {
    expect(difference([1, 2], [])).toEqual([1, 2]);
  });
});
