import { describe, expect, test } from "vitest";
import groupBy from ".";

describe("groupBy 유틸 함수 테스트", () => {
  test("iteratee 결과 기준으로 그룹화한다.", () => {
    const users = [
      { id: 1, role: "admin" },
      { id: 2, role: "user" },
      { id: 3, role: "admin" },
    ];

    expect(groupBy(users, (user) => user.role)).toEqual({
      admin: [
        { id: 1, role: "admin" },
        { id: 3, role: "admin" },
      ],
      user: [{ id: 2, role: "user" }],
    });
  });

  test("빈 배열은 빈 객체를 반환한다.", () => {
    expect(groupBy([], (value) => value)).toEqual({});
  });
});
