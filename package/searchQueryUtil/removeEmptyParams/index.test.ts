import { describe, expect, test } from "vitest";
import removeEmptyParams from ".";

describe("removeEmptyParams", () => {
  test("빈 객체에 대해 빈 객체를 반환한다", () => {
    expect(removeEmptyParams({})).toEqual({});
  });

  test("null, undefined, 빈 문자열 값을 제거한다", () => {
    expect(removeEmptyParams({
      key1: "value1",
      key2: null,
      key3: undefined,
      key4: "",
      key5: "value5"
    })).toEqual({
      key1: "value1",
      key5: "value5"
    });
  });

  test("빈 배열을 제거하고 배열에서 빈 값을 필터링한다", () => {
    expect(removeEmptyParams({
      arr1: [],
      arr2: ["value1", null, "", "value2", undefined],
      arr3: [null, undefined, ""]
    })).toEqual({
      arr2: ["value1", "value2"]
    });
  });

  test("중첩된 객체를 재귀적으로 정리한다", () => {
    expect(removeEmptyParams({
      nested: {
        key1: "value1",
        key2: null,
        deep: {
          key3: "",
          key4: "value4"
        }
      },
      key5: "value5"
    })).toEqual({
      nested: {
        key1: "value1",
        deep: {
          key4: "value4"
        }
      },
      key5: "value5"
    });
  });

  test("완전히 빈 중첩 객체를 제거한다", () => {
    expect(removeEmptyParams({
      key1: "value1",
      empty: {
        nested: {
          key2: null,
          key3: ""
        }
      }
    })).toEqual({
      key1: "value1"
    });
  });

  test("숫자 0과 불린 false를 유지한다", () => {
    expect(removeEmptyParams({
      zero: 0,
      false: false,
      empty: "",
      null: null
    })).toEqual({
      zero: 0,
      false: false
    });
  });

  test("잘못된 입력에 대해 빈 객체를 반환한다", () => {
    expect(removeEmptyParams(null as any)).toEqual({});
    expect(removeEmptyParams(undefined as any)).toEqual({});
    expect(removeEmptyParams("string" as any)).toEqual({});
  });
});