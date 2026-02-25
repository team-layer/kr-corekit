import { describe, expect, test } from "vitest";
import keyBy from ".";

describe("keyBy 유틸 함수 테스트", () => {
  test("iteratee 결과를 key로 객체를 생성한다.", () => {
    const users = [
      { id: 1, name: "Kim" },
      { id: 2, name: "Lee" },
    ];

    expect(keyBy(users, (user) => user.id)).toEqual({
      1: { id: 1, name: "Kim" },
      2: { id: 2, name: "Lee" },
    });
  });

  test("같은 key가 있으면 마지막 값으로 덮어쓴다.", () => {
    const users = [
      { id: 1, name: "Kim" },
      { id: 1, name: "Park" },
    ];

    expect(keyBy(users, (user) => user.id)).toEqual({
      1: { id: 1, name: "Park" },
    });
  });
});
