import { describe, expect, test } from "vitest";
import normalizeQuery from ".";

describe("normalizeQuery", () => {
  test("기본 옵션으로 쿼리를 정규화한다", () => {
    expect(normalizeQuery({
      key1: "  value1  ",
      key2: "",
      key3: null,
      key4: "value4"
    })).toEqual({
      key1: "value1",
      key4: "value4"
    });
  });

  test("대소문자를 소문자로 변환한다", () => {
    expect(normalizeQuery({
      KEY1: "VALUE1",
      Key2: "Value2"
    }, { toLowerCase: true })).toEqual({
      key1: "value1",
      key2: "value2"
    });
  });

  test("값 앞뒤 공백을 제거한다", () => {
    expect(normalizeQuery({
      key1: "  value1  ",
      key2: "\tvalue2\n"
    }, { trimValues: true })).toEqual({
      key1: "value1",
      key2: "value2"
    });
  });

  test("빈 값 제거를 비활성화할 수 있다", () => {
    expect(normalizeQuery({
      key1: "value1",
      key2: "",
      key3: null
    }, { removeEmpty: false })).toEqual({
      key1: "value1",
      key2: "",
      key3: null
    });
  });

  test("키를 알파벳 순으로 정렬한다", () => {
    const result = normalizeQuery({
      z: "value1",
      a: "value2",
      m: "value3"
    }, { sortKeys: true });
    
    expect(Object.keys(result)).toEqual(["a", "m", "z"]);
    expect(result).toEqual({
      a: "value2",
      m: "value3",
      z: "value1"
    });
  });

  test("배열 값을 처리한다", () => {
    expect(normalizeQuery({
      tags: ["  TAG1  ", "TAG2", "  tag3  "]
    }, { toLowerCase: true, trimValues: true })).toEqual({
      tags: ["tag1", "tag2", "tag3"]
    });
  });

  test("모든 옵션을 조합해서 사용한다", () => {
    const result = normalizeQuery({
      NAME: "  John Doe  ",
      TAGS: ["  FRONTEND  ", "REACT", "  "],
      EMPTY: "",
      AGE: 25
    }, {
      toLowerCase: true,
      trimValues: true,
      removeEmpty: true,
      sortKeys: true
    });

    expect(result).toEqual({
      age: 25,
      name: "john doe",
      tags: ["frontend", "react", ""]
    });
  });

  test("잘못된 입력에 대해 빈 객체를 반환한다", () => {
    expect(normalizeQuery(null as any)).toEqual({});
    expect(normalizeQuery(undefined as any)).toEqual({});
    expect(normalizeQuery("string" as any)).toEqual({});
  });
});