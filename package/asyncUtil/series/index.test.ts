import { describe, expect, test } from "vitest";
import series from ".";

describe("async series 유틸 함수 테스트", () => {
  test("작업을 순차적으로 실행한다.", async () => {
    const order: number[] = [];

    const result = await series([
      async () => {
        order.push(1);
        return 1;
      },
      async () => {
        order.push(2);
        return 2;
      },
    ]);

    expect(order).toEqual([1, 2]);
    expect(result).toEqual([1, 2]);
  });
});
