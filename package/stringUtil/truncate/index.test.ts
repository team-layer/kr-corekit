import { describe, expect, test } from "vitest";
import truncate from ".";

describe("truncate 유틸 함수 테스트", () => {
  test("기본 길이로 문자열을 자른다.", () => {
    expect(truncate("abcdefghijklmnopqrstuvwxyz", { length: 10 })).toBe("abcdefg...");
  });

  test("길이가 충분하면 원문을 그대로 반환한다.", () => {
    expect(truncate("short", { length: 10 })).toBe("short");
  });

  test("커스텀 omission을 지원한다.", () => {
    expect(truncate("abcdefghij", { length: 8, omission: "~~" })).toBe("abcdef~~");
  });
});
