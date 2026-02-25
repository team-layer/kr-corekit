import { describe, expect, test } from "vitest";
import deepClone from ".";

describe("deepClone 유틸 함수 테스트", () => {
  test("중첩 객체를 깊은 복사한다.", () => {
    const source = { user: { name: "Kim" }, list: [1, 2, 3] };
    const cloned = deepClone(source);

    expect(cloned).toEqual(source);
    expect(cloned).not.toBe(source);
    expect(cloned.user).not.toBe(source.user);
    expect(cloned.list).not.toBe(source.list);
  });

  test("Date와 Map 타입을 복사한다.", () => {
    const now = new Date();
    const source = {
      createdAt: now,
      metadata: new Map([["role", "admin"]]),
    };

    const cloned = deepClone(source);

    expect(cloned.createdAt).toEqual(now);
    expect(cloned.createdAt).not.toBe(now);
    expect(cloned.metadata).toEqual(source.metadata);
    expect(cloned.metadata).not.toBe(source.metadata);
  });

  test("순환 참조 객체를 복사할 수 있다.", () => {
    const source: { name: string; self?: unknown } = { name: "loop" };
    source.self = source;

    const cloned = deepClone(source);

    expect(cloned).not.toBe(source);
    expect(cloned.self).toBe(cloned);
  });
});
