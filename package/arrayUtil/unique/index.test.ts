import { describe, expect, test } from "vitest";
import unique from ".";

describe("unique 유틸 함수 테스트", () => {
  test("중복된 값을 제거한다.", () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
  });

  test("원래 순서를 유지한다.", () => {
    expect(unique(["b", "a", "b", "c", "a"])).toEqual(["b", "a", "c"]);
  });
});
