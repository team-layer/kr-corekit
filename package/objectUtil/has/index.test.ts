import { describe, expect, test } from "vitest";
import has from ".";

describe("has 유틸 함수 테스트", () => {
  test("경로가 존재하면 true를 반환한다.", () => {
    expect(has({ a: { b: 1 } }, "a.b")).toBe(true);
  });

  test("경로가 없으면 false를 반환한다.", () => {
    expect(has({ a: { b: 1 } }, "a.c")).toBe(false);
  });

  test("배열 인덱스 경로를 지원한다.", () => {
    expect(has({ a: [{ b: 1 }] }, "a[0].b")).toBe(true);
  });
});
