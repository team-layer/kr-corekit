import { beforeEach, describe, expect, Mock, test, vi } from "vitest";
import storage from ".";

describe("storage", () => {
  const mockLocalStorage = () => {
    let store: Record<string, string> = {};

    return {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key];
      }),
      clear: vi.fn(() => {
        store = {};
      }),
    };
  };

  vi.stubGlobal("localStorage", mockLocalStorage());

  describe("storage 유틸리티", () => {
    beforeEach(() => {
      (window.localStorage.clear as Mock)();
    });

    describe("set 및 get 기능", () => {
      test("문자열 값을 올바르게 저장하고 불러와야 합니다.", () => {
        const key = "test-string";
        const value = "hello world";
        storage.set(key, value);
        expect(storage.get(key)).toBe(value);
      });

      test("객체 값을 JSON으로 변환하여 올바르게 저장하고, 파싱하여 불러와야 합니다.", () => {
        const key = "test-object";
        const value = { name: "John Yeom", version: 9.9, isReady: true };
        storage.set(key, value);
        expect(storage.get(key)).toEqual(value);
      });

      test("배열 값을 JSON으로 변환하여 올바르게 저장하고, 파싱하여 불러와야 합니다.", () => {
        const key = "test-array";
        const value = [1, "test", { id: 3 }];
        storage.set(key, value);
        expect(storage.get(key)).toEqual(value);
      });

      test("존재하지 않는 키를 불러오려고 하면 null을 반환해야 합니다.", () => {
        expect(storage.get("non-existent-key")).toBeNull();
      });
    });

    describe("remove 기능", () => {
      test("저장된 값을 올바르게 제거해야 합니다.", () => {
        const key = "item-to-remove";
        const value = "some data";

        storage.set(key, value);
        expect(storage.get(key)).toBe(value);

        storage.remove(key);
        expect(storage.get(key)).toBeNull();
      });
    });

    describe("예외 처리", () => {
      test("localStorage에 저장된 값이 손상된 JSON일 경우, null을 반환해야 합니다.", () => {
        const key = "corrupted-json";
        const corruptedValue = '{"name": "Gemini", "version": 1.5,}'; // 마지막에 잘못된 쉼표

        (window.localStorage.getItem as Mock).mockReturnValueOnce(
          corruptedValue
        );

        const spy = vi.spyOn(console, "error").mockImplementation(() => {});

        expect(storage.get(key)).toBeNull();

        spy.mockRestore();
      });
    });
  });
});
