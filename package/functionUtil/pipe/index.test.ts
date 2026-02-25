import { describe, expect, test } from "vitest";
import pipe from ".";

describe("pipe 유틸 함수 테스트", () => {
  test("왼쪽에서 오른쪽 순서로 함수를 합성한다.", () => {
    const fn = pipe(
      (value) => Number(value) + 1,
      (value) => Number(value) * 2
    );

    expect(fn(3)).toBe(8);
  });
});
