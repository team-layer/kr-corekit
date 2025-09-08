import { describe, expect, test } from "vitest";
import parseQueryString from ".";

describe("parseQueryString", () => {
  test("빈 문자열에 대해 빈 객체를 반환한다", () => {
    expect(parseQueryString("")).toEqual({});
    expect(parseQueryString("?")).toEqual({});
  });

  test("단일 키-값 쌍을 파싱한다", () => {
    expect(parseQueryString("key=value")).toEqual({ key: "value" });
    expect(parseQueryString("?key=value")).toEqual({ key: "value" });
  });

  test("여러 키-값 쌍을 파싱한다", () => {
    expect(parseQueryString("key1=value1&key2=value2")).toEqual({
      key1: "value1",
      key2: "value2"
    });
  });

  test("값이 없는 키를 처리한다", () => {
    expect(parseQueryString("key1&key2=value2")).toEqual({
      key1: "",
      key2: "value2"
    });
  });

  test("동일한 키에 대한 여러 값을 배열로 처리한다", () => {
    expect(parseQueryString("key=value1&key=value2")).toEqual({
      key: ["value1", "value2"]
    });
  });

  test("URL 인코딩된 문자를 디코딩한다", () => {
    expect(parseQueryString("name=John%20Doe&city=New%20York")).toEqual({
      name: "John Doe",
      city: "New York"
    });
  });

  test("잘못된 입력에 대해 빈 객체를 반환한다", () => {
    expect(parseQueryString(null as any)).toEqual({});
    expect(parseQueryString(undefined as any)).toEqual({});
    expect(parseQueryString(123 as any)).toEqual({});
  });
});