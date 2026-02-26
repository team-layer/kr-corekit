import { describe, expect, test, vi } from "vitest";
import random from ".";

describe("random 유틸 함수 테스트", () => {
  test("정수 랜덤 값을 반환한다.", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    expect(random(1, 3)).toBe(2);

    vi.restoreAllMocks();
  });

  test("floating=true면 실수를 반환한다.", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    expect(random(1, 3, true)).toBe(2);

    vi.restoreAllMocks();
  });

  test("인자 하나면 0부터 upper 범위로 동작한다.", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    expect(random(4)).toBe(2);

    vi.restoreAllMocks();
  });
});
