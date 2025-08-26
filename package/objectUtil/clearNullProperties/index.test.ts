import { expect, test } from "vitest";
import clearNullProperties from ".";

test("만약 Null이 객체에 존재한다면, Null이 없는 객체가 반환된다.", () => {
  const obj = { a: 1, b: 2, c: null };
  const result = clearNullProperties(obj);
  expect(result).toEqual({ a: 1, b: 2 });
});
