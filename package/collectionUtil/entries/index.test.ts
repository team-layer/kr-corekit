import { describe, expect, test } from "vitest";
import entries from ".";

describe("collection entries 유틸 함수 테스트", () => {
  test("키-값 쌍 배열을 반환한다.", () => {
    expect(entries({ a: 1 })).toEqual([["a", 1]]);
  });

  test("배열은 인덱스 기준 엔트리를 반환한다.", () => {
    expect(entries(["x", "y"])).toEqual([
      ["0", "x"],
      ["1", "y"],
    ]);
  });
});
