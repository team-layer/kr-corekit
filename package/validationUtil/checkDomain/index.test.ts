import { describe, expect, test } from "vitest";
import checkDomain from ".";

describe("checkDomain 유틸 함수 테스트", () => {
  test("유효한 도메인이 들어오는 경우 true를 반환한다.", () => {
    expect(checkDomain("example.com")).toBe(true);
    expect(checkDomain("sub.example.co.uk")).toBe(true);
    expect(checkDomain("www.my-site123.org")).toBe(true);
    expect(checkDomain("www.layerapp.io")).toBe(true);
  });
  test("유효하지 않은 도메인이 들어오는 경우 false를 반환한다.", () => {
    expect(checkDomain("")).toBe(false);
    expect(checkDomain("invalid_domain")).toBe(false);
    expect(checkDomain("https://layerapp.io")).toBe(false);
  });
});
