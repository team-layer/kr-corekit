import { describe, expect, test } from "vitest";
import buildQueryString from ".";

describe("buildQueryString", () => {
  test("빈 객체에 대해 빈 문자열을 반환한다", () => {
    expect(buildQueryString({})).toBe("");
  });

  test("단일 키-값 쌍을 쿼리 문자열로 변환한다", () => {
    expect(buildQueryString({ key: "value" })).toBe("key=value");
  });

  test("여러 키-값 쌍을 쿼리 문자열로 변환한다", () => {
    expect(buildQueryString({ key1: "value1", key2: "value2" })).toBe("key1=value1&key2=value2");
  });

  test("숫자와 불린 값을 문자열로 변환한다", () => {
    expect(buildQueryString({ num: 123, bool: true })).toBe("num=123&bool=true");
  });

  test("배열 값을 여러 쿼리 파라미터로 변환한다", () => {
    expect(buildQueryString({ tags: ["tag1", "tag2", "tag3"] })).toBe("tags=tag1&tags=tag2&tags=tag3");
  });

  test("null과 undefined 값을 무시한다", () => {
    expect(buildQueryString({ key1: "value1", key2: null, key3: undefined })).toBe("key1=value1");
  });

  test("특수 문자를 URL 인코딩한다", () => {
    expect(buildQueryString({ name: "John Doe", city: "New York" })).toBe("name=John%20Doe&city=New%20York");
  });

  test("배열에서 null과 undefined 값을 무시한다", () => {
    expect(buildQueryString({ tags: ["tag1", null as any, "tag2", undefined as any] })).toBe("tags=tag1&tags=tag2");
  });

  test("잘못된 입력에 대해 빈 문자열을 반환한다", () => {
    expect(buildQueryString(null as any)).toBe("");
    expect(buildQueryString(undefined as any)).toBe("");
    expect(buildQueryString("string" as any)).toBe("");
  });
});