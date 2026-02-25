import { describe, expect, test } from "vitest";
import keys from ".";

describe("collection keys 유틸 함수 테스트", () => {
  test("키 배열을 반환한다.", () => {
    expect(keys({ a: 1, b: 2 })).toEqual(["a", "b"]);
  });

  test("배열은 인덱스 키를 반환한다.", () => {
    expect(keys([10, 20])).toEqual(["0", "1"]);
  });
});
