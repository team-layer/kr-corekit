import { describe, expect, test } from "vitest";
import escapeHtml from ".";

describe("escapeHtml 유틸 함수 테스트", () => {
  test("HTML 특수 문자를 올바르게 이스케이프한다", () => {
    const input = "<span> 안녕하세요 </span>";
    const output = escapeHtml(input);
    expect(output).toBe("&lt;span&gt; 안녕하세요 &lt;/span&gt;");
  });

  test("여러 HTML 특수 문자를 포함한 문자열을 올바르게 이스케이프한다", () => {
    const input = "Tom & Jerry <3 \"Best Friends\" 'Forever' / Fun";
    const output = escapeHtml(input);
    expect(output).toBe(
      "Tom &amp; Jerry &lt;3 &quot;Best Friends&quot; &#39;Forever&#39; / Fun"
    );
  });

  test("HTML 특수 문자가 없는 문자열은 그대로 반환한다", () => {
    const input = "Hello World!";
    const output = escapeHtml(input);
    expect(output).toBe("Hello World!");
  });

  test("빈 문자열을 입력하면 빈 문자열을 반환한다", () => {
    const input = "";
    const output = escapeHtml(input);
    expect(output).toBe("");
  });

  test("null 또는 undefined를 입력하면 그대로 반환한다", () => {
    // @ts-ignore
    expect(escapeHtml(null)).toBe(null);
    // @ts-ignore
    expect(escapeHtml(undefined)).toBe(undefined);
  });
});
