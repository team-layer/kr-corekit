import { describe, expect, test, vi } from "vitest";
import sample from ".";

describe("sample 유틸 함수 테스트", () => {
  test("랜덤 요소 하나를 반환한다.", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.6);

    expect(sample([10, 20, 30])).toBe(20);

    vi.restoreAllMocks();
  });

  test("빈 배열은 undefined를 반환한다.", () => {
    expect(sample([])).toBeUndefined();
  });
});
