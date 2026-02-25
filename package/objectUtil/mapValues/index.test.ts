import { describe, expect, test } from "vitest";
import mapValues from ".";

describe("mapValues 유틸 함수 테스트", () => {
  test("객체의 값을 변환한다.", () => {
    expect(mapValues({ a: 1, b: 2 }, (value) => value * 2)).toEqual({
      a: 2,
      b: 4,
    });
  });

  test("key를 활용해서 값을 변환할 수 있다.", () => {
    expect(mapValues({ a: 1 }, (value, key) => `${String(key)}:${value}`)).toEqual({
      a: "a:1",
    });
  });
});
