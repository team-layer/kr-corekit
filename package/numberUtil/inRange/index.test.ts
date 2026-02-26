import { describe, expect, test } from "vitest";
import inRange from ".";

describe("inRange 유틸 함수 테스트", () => {
  test("범위 내부면 true를 반환한다.", () => {
    expect(inRange(3, 2, 5)).toBe(true);
  });

  test("상한값은 포함하지 않는다.", () => {
    expect(inRange(5, 2, 5)).toBe(false);
  });

  test("end 생략 시 0부터 start까지로 처리한다.", () => {
    expect(inRange(2, 5)).toBe(true);
  });
});
