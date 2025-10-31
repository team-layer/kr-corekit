import { describe, expect, test } from "vitest";
import slugify from ".";

describe("slugify", () => {
  test("문자열을 slug 형태로 변환한다.", () => {
    const input = " Hello World! This is a Test. ";
    const output = slugify(input);
    expect(output).toBe("hello-world-this-is-a-test");
  });

  test("특수 문자가 포함된 문자열을 올바르게 변환한다.", () => {
    const input = "Café & Restaurant @ Downtown #1";
    const output = slugify(input);
    expect(output).toBe("caf-restaurant-downtown-1");
  });

  test("여러 공백과 대시가 포함된 문자열을 올바르게 변환한다.", () => {
    const input = "This   is---a    test---string";
    const output = slugify(input);
    expect(output).toBe("this-is-a-test-string");
  });

  test("빈 문자열을 처리한다.", () => {
    expect(slugify("")).toBe("");
    expect(slugify("   ")).toBe("");
  });

  test("숫자가 포함된 문자열을 올바르게 변환한다.", () => {
    const input = "Product 123 - Version 2.0";
    const output = slugify(input);
    expect(output).toBe("product-123-version-20");
  });

  test("특수 문자만 있는 경우를 처리한다.", () => {
    const input = "!@#$%^&*()";
    const output = slugify(input);
    expect(output).toBe("");
  });

  test("한글이 포함된 문자열을 처리한다.", () => {
    expect(slugify("안녕하세요")).toBe("안녕하세요");
    expect(slugify("한글 테스트")).toBe("한글-테스트");
    expect(slugify("안녕하세요 Hello World")).toBe("안녕하세요-hello-world");
    expect(slugify("프로젝트 개발")).toBe("프로젝트-개발");
  });

  test("slug 형태의 문자열은 그대로 slug 형태로 반환한다.", () => {
    const input = "Hello-World";
    const output = slugify(input);
    expect(output).toBe("hello-world");
  });
});
