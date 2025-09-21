/**
 * vitest가 JSDOM을 사용하여 브라우저 환경을 시뮬레이션하도록 설정합니다.
 * 이를 통해 테스트 환경에서 window, navigator 등의 객체를 사용할 수 있습니다.
 *
 * @vitest-environment jsdom
 */
import { describe, test, expect, afterEach } from "vitest";
import getDevice from ".";

describe("getDevice", () => {
  // userAgent를 테스트 케이스마다 다르게 설정하기 위한 헬퍼 함수
  const mockUserAgent = (userAgent: string) => {
    // JSDOM이 생성한 window.navigator 객체의 userAgent 속성을 덮어씁니다.
    Object.defineProperty(window.navigator, "userAgent", {
      value: userAgent,
      writable: true,
      configurable: true,
    });
  };

  // 각 테스트가 끝난 후, 다음 테스트에 영향을 주지 않도록 userAgent를 초기화합니다.
  afterEach(() => {
    mockUserAgent("");
  });

  describe("클라이언트 (브라우저) 환경", () => {
    describe("데스크톱", () => {
      test("Windows Chrome User Agent를 데스크톱으로 인식해야 합니다", () => {
        mockUserAgent(
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
        );
        const { isDesktop, isMobile, isTablet } = getDevice();
        expect(isDesktop).toBe(true);
        expect(isMobile).toBe(false);
        expect(isTablet).toBe(false);
      });
    });

    describe("모바일", () => {
      test("iPhone User Agent를 모바일 및 iOS로 인식해야 합니다", () => {
        mockUserAgent(
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
        );
        const { isMobile, isIOS, isDesktop } = getDevice();
        expect(isMobile).toBe(true);
        expect(isIOS).toBe(true);
        expect(isDesktop).toBe(false);
      });

      test("Android Phone User Agent를 모바일 및 Android로 인식해야 합니다", () => {
        mockUserAgent(
          "Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36"
        );
        const { isMobile, isAndroid, isTablet } = getDevice();
        expect(isMobile).toBe(true);
        expect(isAndroid).toBe(true);
        expect(isTablet).toBe(false);
      });
    });

    describe("태블릿", () => {
      test("iPad User Agent를 태블릿 및 iOS로 인식해야 합니다", () => {
        mockUserAgent(
          "Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1"
        );
        const { isTablet, isIOS, isMobile } = getDevice();
        expect(isTablet).toBe(true);
        expect(isIOS).toBe(true);
        expect(isMobile).toBe(false);
      });

      test("Android Tablet User Agent를 태블릿 및 Android로 인식해야 합니다", () => {
        mockUserAgent(
          "Mozilla/5.0 (Linux; Android 12; SM-X906C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.99 Safari/537.36"
        );
        const { isTablet, isAndroid, isMobile } = getDevice();
        expect(isTablet).toBe(true);
        expect(isAndroid).toBe(true);
        expect(isMobile).toBe(false);
      });
    });
  });
});
