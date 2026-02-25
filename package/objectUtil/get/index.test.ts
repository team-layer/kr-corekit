import { describe, expect, test } from "vitest";
import get from ".";

describe("get 유틸 함수 테스트", () => {
  test("경로로 중첩 값을 조회한다.", () => {
    const data = { user: { profile: { name: "Kim" } } };

    expect(get(data, "user.profile.name")).toBe("Kim");
  });

  test("값이 없으면 기본값을 반환한다.", () => {
    const data = { user: {} };

    expect(get(data, "user.profile.name", "guest")).toBe("guest");
  });

  test("배열 경로도 조회할 수 있다.", () => {
    const data = { users: [{ name: "Kim" }] };

    expect(get(data, "users[0].name")).toBe("Kim");
  });
});
