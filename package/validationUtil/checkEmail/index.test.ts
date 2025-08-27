import { expect, test } from "vitest";
import checkEmail from ".";

test("올바른 이메일인 경우 true 값을 리턴합니다.", () => {
  const email = "test@example.com";
  const result = checkEmail(email);
  expect(result).toBe(true);
});

test("올바르지 않은 이메일인 경우 false 값을 리턴합니다.", () => {
  const email = "vdsavdsavsavdsa";
  const result = checkEmail(email);
  expect(result).toBe(false);
});
