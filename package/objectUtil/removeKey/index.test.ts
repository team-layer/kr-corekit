import { describe, expect, test } from "vitest";
import removeKey from ".";

describe("removeKey 유틸 함수 테스트", () => {
  test("객체와 키를 입력했을 때, 정상적으로 객체에서 속성이 제거되어야한다.", () => {
    expect(removeKey("b", { a: 1, b: 2, c: 3 })).toEqual({ a: 1, c: 3 });
  });
  test("객체와 키를 입력했을 때, 제거할 키가 객체에 없으면 원본 객체가 반환되어야한다.", () => {
    expect(removeKey("d", { a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2, c: 3 });
  });
  test("빈 객체와 키를 입력했을 때, 빈 객체가 반환되어야한다.", () => {
    expect(removeKey("d", {})).toEqual({});
  });
});
