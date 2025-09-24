import { expect, test } from "vitest";
import clearNullProperties from ".";

test("만약 Null이 객체에 존재한다면, Null이 없는 객체가 반환된다.", () => {
  const obj = { a: 1, b: 2, c: null };
  const result = clearNullProperties(obj);
  expect(result).toEqual({ a: 1, b: 2 });
});

test("만약 배열이 포함된 객체가 존재한다면, 그대로 반환된다.", () => {
  const obj = { a: 1, b: [1, 2, 3], c: null };
  const result = clearNullProperties(obj);
  expect(result).toEqual({ a: 1, b: [1, 2, 3] });
});

test("만약 중첩된 객체가 존재한다면, 중첩된 객체의 Null도 제거된다.", () => {
  const obj = { a: 1, b: { c: null, d: 4 }, e: null };
  const result = clearNullProperties(obj);
  expect(result).toEqual({ a: 1, b: { d: 4 } });
});

test("만약 모든 속성이 Null이라면, 빈 객체가 반환된다.", () => {
  const obj = { a: null, b: null };
  const result = clearNullProperties(obj);
  expect(result).toEqual({});
});

test("만약 속성에 false 값이 존재한다면, false 값은 유지된다.", () => {
  const obj = { a: false, b: null };
  const result = clearNullProperties(obj);
  expect(result).toEqual({ a: false });
});
