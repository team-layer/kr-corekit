import { describe, expect, test } from "vitest";
import compact from ".";

describe("compact 유틸 함수 테스트", () => {
  test("falsy 값을 제거한다.", () => {
    expect(compact([0, 1, false, 2, "", 3, null, undefined])).toEqual([1, 2, 3]);
  });

  test("truthy 값은 유지한다.", () => {
    expect(compact(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });
});
