import { describe, expect, test } from "vitest";
import identity from ".";

describe("identity 유틸 함수 테스트", () => {
  test("입력값을 그대로 반환한다.", () => {
    const obj = { a: 1 };

    expect(identity(obj)).toBe(obj);
    expect(identity(123)).toBe(123);
  });
});
