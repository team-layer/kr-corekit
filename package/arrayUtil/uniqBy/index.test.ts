import { describe, expect, test } from "vitest";
import uniqBy from ".";

describe("uniqBy 유틸 함수 테스트", () => {
  test("기준 값이 중복되면 첫 번째 값만 유지한다.", () => {
    const users = [
      { id: 1, name: "Kim" },
      { id: 1, name: "Park" },
      { id: 2, name: "Lee" },
    ];

    expect(uniqBy(users, (user) => user.id)).toEqual([
      { id: 1, name: "Kim" },
      { id: 2, name: "Lee" },
    ]);
  });

  test("빈 배열은 빈 배열을 반환한다.", () => {
    expect(uniqBy([], (value) => value)).toEqual([]);
  });
});
