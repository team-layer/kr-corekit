import { describe, expect, test } from "vitest";
import omit from ".";

describe("omit 유틸 함수 테스트", () => {
  test("지정한 키를 제거한 새 객체를 반환한다.", () => {
    const user = { id: 1, name: "Kim", age: 29 };

    expect(omit(user, ["age"])).toEqual({ id: 1, name: "Kim" });
  });

  test("원본 객체는 변경하지 않는다.", () => {
    const user = { id: 1, name: "Kim", age: 29 };

    omit(user, ["name"]);

    expect(user).toEqual({ id: 1, name: "Kim", age: 29 });
  });
});
