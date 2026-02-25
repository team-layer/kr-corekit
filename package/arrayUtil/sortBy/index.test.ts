import { describe, expect, test } from "vitest";
import sortBy from ".";

describe("sortBy 유틸 함수 테스트", () => {
  test("기준 값을 기준으로 오름차순 정렬한다.", () => {
    const users = [
      { id: 3, name: "Charlie" },
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];

    expect(sortBy(users, (user) => user.id)).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ]);
  });

  test("원본 배열은 변경하지 않는다.", () => {
    const values = [3, 1, 2];

    const result = sortBy(values, (value) => value);

    expect(values).toEqual([3, 1, 2]);
    expect(result).toEqual([1, 2, 3]);
  });
});
