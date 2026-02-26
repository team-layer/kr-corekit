import { describe, expect, test } from "vitest";
import set from ".";

describe("set 유틸 함수 테스트", () => {
  test("중첩 경로에 값을 설정한다.", () => {
    const target = { a: {} };

    set(target, "a.b.c", 1);

    expect(target).toEqual({ a: { b: { c: 1 } } });
  });

  test("배열 경로를 생성하며 값을 설정한다.", () => {
    const target = {} as Record<string, unknown>;

    set(target, "users[0].name", "Kim");

    expect(target).toEqual({ users: [{ name: "Kim" }] });
  });
});
