import { expect, test } from "vitest";
import deepFreeze from ".";

test("객체의 불변성이 유지된다.", () => {
  const obj = { a: 1, b: 2, c: { d: 4 } };
  const frozen = deepFreeze(obj);
  expect(Object.isFrozen(frozen)).toBe(true);
  expect(Object.isFrozen(frozen.c)).toBe(true);
});
