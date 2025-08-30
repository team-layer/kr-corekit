/**
 * 지정된 시간(ms)만큼 코드 실행을 지연시키는 Promise를 반환합니다.
 * 음수 방지
 * @param ms 지연시킬 시간 (밀리초 단위)
 * @returns {Promise<void>} 시간이 지나면 resolve되는 Promise
 */
export function sleep(ms: number): Promise<void> {
  const delay = Math.max(0, ms | 0);
  return new Promise((resolve) => setTimeout(resolve, delay));
}
