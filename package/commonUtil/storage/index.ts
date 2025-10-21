/**
 * localStorage를 편리하게 사용할 수 있는 유틸리티 함수들을 제공합니다.
 *
 * * 객체나 배열도 저장 및 조회가 가능합니다.
 * * SSR 환경에서는 동작하지 않으며, 해당 경우에 대한 처리가 포함되어 있습니다.
 */
const storage = {
  /**
   * localStorage에 값을 저장합니다.
   * @param {string} key - 저장할 데이터의 키
   * @param {T} value - 저장할 데이터. 객체나 배열도 가능합니다.
   */
  set<T>(key: string, value: T): void {
    if (typeof window === "undefined") {
      console.warn(
        `localStorage is not available in SSR environment. Set operation for key "${key}" was ignored.`
      );
      return;
    }

    try {
      const serializedValue = JSON.stringify(value);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting item "${key}" to localStorage`, error);
    }
  },

  /**
   * localStorage에서 값을 가져옵니다.
   * @param {string} key - 가져올 데이터의 키
   * @returns {T | null} 저장된 데이터를 반환합니다. 값이 없거나 에러 발생 시 null을 반환합니다.
   */
  get<T>(key: string): T | null {
    if (typeof window === "undefined") {
      return null;
    }

    try {
      const serializedValue = window.localStorage.getItem(key);

      if (serializedValue === null) {
        return null;
      }

      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error(`Error getting item "${key}" from localStorage`, error);
      window.localStorage.removeItem(key);
      return null;
    }
  },

  /**
   * localStorage에서 값을 제거합니다.
   * @param {string} key - 제거할 데이터의 키
   */
  remove(key: string): void {
    if (typeof window === "undefined") {
      console.warn(
        `localStorage is not available in SSR environment. Remove operation for key "${key}" was ignored.`
      );
      return;
    }

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item "${key}" from localStorage`, error);
    }
  },
};
