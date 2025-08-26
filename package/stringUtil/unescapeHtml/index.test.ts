import { expect, test } from "vitest";
import unescapeHtml from ".";

test("HTML 특수 문자를 언이스케이프한다.", () => {
  const input = "&lt;span&gt; 안녕하세요 &lt;/span&gt;";
  const output = unescapeHtml(input);
  expect(output).toBe("<span> 안녕하세요 </span>");
});
