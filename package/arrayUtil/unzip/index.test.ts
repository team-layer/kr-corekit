import { describe, expect, test } from "vitest";
import unzip from ".";

describe("unzip 유틸 함수 테스트", () => {
  test("zip된 배열을 원래 형태로 되돌린다.", () => {
    expect(
      unzip([
        ["a", 1],
        ["b", 2],
      ])
    ).toEqual([
      ["a", "b"],
      [1, 2],
    ]);
  });

  test("빈 배열은 빈 배열을 반환한다.", () => {
    expect(unzip([])).toEqual([]);
  });
});
