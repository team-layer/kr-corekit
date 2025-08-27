import subtract from ".";
import { expect, test } from "vitest";

test("2 - 1은 1이다.", () => {
  expect(subtract(2, 1)).toBe(1);
});

test("5 - 10 - 15는 -20이다.", () => {
  expect(subtract(5, 10, 15)).toBe(-20);
});

test("-1 - (-2)는 1이다.", () => {
  expect(subtract(-1, -2)).toBe(1);
});
