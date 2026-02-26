import { describe, expect, test } from "vitest";
import noop from ".";

describe("noop 유틸 함수 테스트", () => {
  test("항상 undefined를 반환한다.", () => {
    expect(noop(1, 2, 3)).toBeUndefined();
  });
});
