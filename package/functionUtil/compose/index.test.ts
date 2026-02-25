import { describe, expect, test } from "vitest";
import compose from ".";

describe("compose 유틸 함수 테스트", () => {
  test("오른쪽에서 왼쪽 순서로 함수를 합성한다.", () => {
    const fn = compose(
      (value) => Number(value) * 2,
      (value) => Number(value) + 1
    );

    expect(fn(3)).toBe(8);
  });
});
