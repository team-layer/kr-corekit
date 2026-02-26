import { describe, expect, test, vi } from "vitest";
import shuffle from ".";

describe("shuffle 유틸 함수 테스트", () => {
  test("배열 요소를 섞어 반환한다.", () => {
    vi.spyOn(Math, "random")
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.8);

    expect(shuffle([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);

    vi.restoreAllMocks();
  });

  test("원본 배열은 변경하지 않는다.", () => {
    const source = [1, 2, 3];

    shuffle(source);

    expect(source).toEqual([1, 2, 3]);
  });
});
