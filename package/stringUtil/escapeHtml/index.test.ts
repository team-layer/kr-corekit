import { expect, test } from "vitest";
import escapeHtml from ".";

test("HTML 특수 문자를 이스케이프한다.", () => {
  const input = "<span> 안녕하세요 </span>";
  const output = escapeHtml(input);
  expect(output).toBe("&lt;span&gt; 안녕하세요 &lt;/span&gt;");
});
