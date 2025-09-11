import { describe, expect, test, vi, afterEach } from "vitest";
import getAllQuery from ".";

describe("getAll 유틸 함수 테스트", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("여러 개의 동일한 키가 있는 쿼리 스트링을 올바르게 처리해야 함", () => {
    vi.stubGlobal("location", {
      search: "?key=value1&key=value2&key=value3",
    });

    const result = getAllQuery();
    expect(result).toEqual({ key: ["value1", "value2", "value3"] });
  });

  test("여러 키-값 쌍이 있는 쿼리 스트링을 올바르게 처리해야 함", () => {
    vi.stubGlobal("location", {
      search: "?name=John&age=30&city=NewYork",
    });

    const result = getAllQuery();
    expect(result).toEqual({ name: "John", age: "30", city: "NewYork" });
  });
});
