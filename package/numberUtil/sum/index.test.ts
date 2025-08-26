import sum from ".";
import { expect, test } from "vitest";

test("1 + 2 + 3은 6이다.", () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test("5 + 10 + 15는 30이다.", () => {
  expect(sum(5, 10, 15)).toBe(30);
});
