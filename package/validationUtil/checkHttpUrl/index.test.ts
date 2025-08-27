import { describe, expect, it } from "vitest";
import checkHttpUrl from ".";

describe("URL 유효성 검사", () => {
  describe("유효한 HTTP/HTTPS URL 문자열이 주어졌을 때", () => {
    const validUrls = [
      "http://example.com",
      "https://example.com",
      "https://www.example.com",
      "http://example.com/path/to/resource",
      "https://example.com?query=123&key=value",
      "http://localhost:3000",
      "https://sub.domain.co.uk/page#section",
    ];

    // it: 테스트하는 개별 동작을 명확히 서술
    it.each(validUrls)("'%s'에 대해 true를 반환한다", (url) => {
      expect(checkHttpUrl(url)).toBe(true);
    });
  });

  describe("유효하지 않은 URL 문자열이 주어졌을 때", () => {
    const invalidUrls = [
      "www.example.com", // 프로토콜 없음
      "example.com", // 프로토콜 없음
      "/relative/path", // 상대 경로
      "ftp://example.com", // 다른 프로토콜
      "mailto:test@example.com", // 다른 프로토콜
      "http:// example.com", // 공백 포함
      "https://", // 프로토콜만 있음
      "just a random string", // 일반 문자열
      "", // 빈 문자열
    ];

    it.each(invalidUrls)("'%s'에 대해 false를 반환한다", (url) => {
      expect(checkHttpUrl(url)).toBe(false);
    });
  });
});
