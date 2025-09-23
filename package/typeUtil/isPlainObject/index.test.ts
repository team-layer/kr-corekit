import { describe, expect, test } from "vitest";
import isPlainObject from ".";

describe("isPlainObject 유틸 함수 테스트", () => {
  test("일반 객체는 true를 반환한다", () => {
    const obj = { a: 1, b: 2 };
    expect(isPlainObject(obj)).toBe(true);
  });

  test("배열은 false를 반환한다", () => {
    const arr = [1, 2, 3];
    expect(isPlainObject(arr)).toBe(false);
  });

  test("null은 false를 반환한다", () => {
    expect(isPlainObject(null)).toBe(false);
  });

  test("날짜 객체는 false를 반환한다", () => {
    const date = new Date();
    expect(isPlainObject(date)).toBe(false);
  });

  test("커스텀 프로토타입을 가진 객체는 false를 반환한다", () => {
    const obj = Object.create({ a: 1 });
    expect(isPlainObject(obj)).toBe(false);
  });
});
