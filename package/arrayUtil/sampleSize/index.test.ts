import { describe, expect, test, vi } from "vitest";
import sampleSize from ".";

describe("sampleSize 유틸 함수 테스트", () => {
  test("지정한 개수만큼 랜덤 샘플을 반환한다.", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.8);

    expect(sampleSize([1, 2, 3, 4], 2)).toEqual([4, 3]);

    vi.restoreAllMocks();
  });

  test("size가 음수면 빈 배열을 반환한다.", () => {
    expect(sampleSize([1, 2, 3], -1)).toEqual([]);
  });
});
