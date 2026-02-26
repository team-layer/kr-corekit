import { describe, expect, test } from "vitest";
import pick from ".";

describe("pick 유틸 함수 테스트", () => {
  test("지정한 키만 포함한 새 객체를 반환한다.", () => {
    const user = { id: 1, name: "Kim", age: 29 };

    expect(pick(user, ["id", "name"])).toEqual({ id: 1, name: "Kim" });
  });

  test("존재하지 않는 키는 무시한다.", () => {
    const user = { id: 1, name: "Kim" };

    expect(pick(user, ["id", "email" as keyof typeof user])).toEqual({ id: 1 });
  });
});
