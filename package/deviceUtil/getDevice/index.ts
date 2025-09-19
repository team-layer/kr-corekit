/**
 * @typedef {object} DeviceInfo
 * @property {boolean} isMobile - 모바일 디바이스 여부
 * @property {boolean} isTablet - 태블릿 디바이스 여부
 * @property {boolean} isDesktop - 데스크톱 디바이스 여부
 * @property {boolean} isIOS - iOS 운영체제 여부
 * @property {boolean} isAndroid - 안드로이드 운영체제 여부
 */

/**
 * 사용자의 디바이스 환경 정보를 반환합니다.
 * window.navigator.userAgent를 기반으로 분석하며, 클라이언트 사이드에서만 정확한 값을 반환합니다.
 * 서버 사이드 렌더링(SSR) 환경에서는 에러를 방지하기 위해 기본값으로 데스크톱 환경 정보를 반환합니다.
 *
 * @returns {DeviceInfo} 디바이스 환경 정보 객체
 */
export default function getDevice() {
  // * ----- SSR 환경일 경우, 기본값(데스크톱)을 반환하여 에러 방지 ----- * //
  if (typeof window === "undefined" || !window.navigator) {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isIOS: false,
      isAndroid: false,
    };
  }

  // * ----- 클라이언트 환경일 경우, 실행 ----- * //
  const userAgent = window.navigator.userAgent;

  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

  const isAndroid = /Android/i.test(userAgent);

  const isTablet = /(iPad)|(tablet)|(android(?!.*mobi))/i.test(userAgent);

  const isMobile =
    !isTablet &&
    /Mobi|iP(hone|od)|Android|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  const isDesktop = !isMobile && !isTablet;

  return { isMobile, isTablet, isDesktop, isIOS, isAndroid };
}
