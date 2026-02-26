import { describe, expect, test } from "vitest";
import clamp from ".";

describe("clamp 유틸 함수 테스트", () => {
  test("범위를 벗어난 값을 경계값으로 제한한다.", () => {
    expect(clamp(10, 0, 5)).toBe(5);
    expect(clamp(-1, 0, 5)).toBe(0);
  });

  test("범위 안의 값은 그대로 반환한다.", () => {
    expect(clamp(3, 0, 5)).toBe(3);
  });
});
