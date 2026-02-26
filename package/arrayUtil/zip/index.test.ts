import { describe, expect, test } from "vitest";
import zip from ".";

describe("zip 유틸 함수 테스트", () => {
  test("같은 인덱스끼리 묶는다.", () => {
    expect(zip(["a", "b"], [1, 2], [true, false])).toEqual([
      ["a", 1, true],
      ["b", 2, false],
    ]);
  });

  test("길이가 다르면 undefined로 채운다.", () => {
    expect(zip([1], [2, 3])).toEqual([[1, 2], [undefined, 3]]);
  });
});
