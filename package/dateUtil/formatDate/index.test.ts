import { describe, expect, test } from "vitest";
import formatDate from ".";

describe("date formatDate 유틸 함수 테스트", () => {
  test("기본 포맷으로 날짜를 변환한다.", () => {
    expect(formatDate(new Date(2025, 0, 2, 3, 4, 5))).toBe("2025-01-02");
  });

  test("사용자 지정 포맷을 지원한다.", () => {
    expect(formatDate(new Date(2025, 0, 2, 3, 4, 5), "YYYY/MM/DD HH:mm:ss")).toBe(
      "2025/01/02 03:04:05"
    );
  });
});
