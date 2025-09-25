import { describe, expect, test } from "vitest";
import unescapeHtml from ".";

test("HTML 특수 문자를 언이스케이프한다.", () => {
  const input = "&lt;span&gt; 안녕하세요 &lt;/span&gt;";
  const output = unescapeHtml(input);
  expect(output).toBe("<span> 안녕하세요 </span>");
});

describe("unescapeHtml 유틸 함수 테스트", () => {
  test("여러 HTML 특수 문자를 포함한 문자열을 올바르게 언이스케이프한다", () => {
    const input =
      "Tom &amp; Jerry &lt;3 &quot;Best Friends&quot; &#39;Forever&#39; &#x2F; Fun";
    const output = unescapeHtml(input);
    expect(output).toBe("Tom & Jerry <3 \"Best Friends\" 'Forever' / Fun");
  });

  test("HTML 특수 문자가 없는 문자열은 그대로 반환한다", () => {
    const input = "Hello World!";
    const output = unescapeHtml(input);
    expect(output).toBe("Hello World!");
  });

  test("빈 문자열을 입력하면 빈 문자열을 반환한다", () => {
    const input = "";
    const output = unescapeHtml(input);
    expect(output).toBe("");
  });

  test("null 또는 undefined를 입력하면 그대로 반환한다", () => {
    // @ts-ignore
    expect(unescapeHtml(null)).toBe(null);
    // @ts-ignore
    expect(unescapeHtml(undefined)).toBe(undefined);
  });
});
