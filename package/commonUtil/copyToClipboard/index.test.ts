import { describe, expect, test, vi, beforeEach } from "vitest";
import copyToClipboard from ".";

// * 브라우저 API를 모킹
// * 실제로는 아무것도 하지 않지만, 호출 여부를 추적할 수 있는 가짜 함수
const mockClipboard = {
  writeText: vi.fn(),
};

vi.stubGlobal("navigator", {
  clipboard: mockClipboard,
});

const mockElement = {
  value: "",
  style: {},
  select: vi.fn(),
  focus: vi.fn(),
};

vi.stubGlobal("document", {
  execCommand: vi.fn(),
  body: {
    appendChild: vi.fn(),
    removeChild: vi.fn(),
  },
  createElement: vi.fn(() => mockElement),
});

describe("copyToClipboard", () => {
  // * 각 테스트 실행 전 모킹 함수 초기화
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("성공 케이스", () => {
    test("최신 Clipboard API를 사용하여 성공적으로 복사한다", async () => {
      // * Clipboard API 성공 시나리오
      mockClipboard.writeText.mockResolvedValue(undefined);

      const result = await copyToClipboard("hello world");

      expect(result).toBe(true);
      expect(mockClipboard.writeText).toHaveBeenCalledTimes(1);
      expect(mockClipboard.writeText).toHaveBeenCalledWith("hello world");

      // * 대체(레거시) 방식은 호출되지 않아야 함
      expect(document.execCommand).not.toHaveBeenCalled();
    });

    test("Clipboard API 실패 시, 레거시 execCommand 방식으로 대체하여 성공적으로 복사한다", async () => {
      // * Clipboard API 실패, execCommand 성공 시나리오
      mockClipboard.writeText.mockRejectedValue(new Error("API not available"));
      vi.mocked(document.execCommand).mockReturnValue(true);

      const result = await copyToClipboard("fallback test");

      expect(result).toBe(true);
      expect(mockClipboard.writeText).toHaveBeenCalledTimes(1);
      expect(document.execCommand).toHaveBeenCalledWith("copy");
    });
  });

  describe("실패 및 예외 케이스", () => {
    test("두 가지 방식 모두 실패하면 false를 반환한다", async () => {
      // * 두 방식 모두 실패 시나리오
      mockClipboard.writeText.mockRejectedValue(new Error("API not available"));
      vi.mocked(document.execCommand).mockReturnValue(false);

      const result = await copyToClipboard("fail test");

      expect(result).toBe(false);
      expect(mockClipboard.writeText).toHaveBeenCalledTimes(1);
      expect(document.execCommand).toHaveBeenCalledWith("copy");
    });

    test("빈 문자열도 성공적으로 복사한다", async () => {
      mockClipboard.writeText.mockResolvedValue(undefined);

      const result = await copyToClipboard("");

      expect(result).toBe(true);
      expect(mockClipboard.writeText).toHaveBeenCalledWith("");
    });

    test("매우 긴 텍스트가 주어지면 에러를 던지고 대체(fallback) 로직으로 복사를 시도한다", async () => {
      const longText = "a".repeat(1000001);
      vi.mocked(document.execCommand).mockReturnValue(true);

      const result = await copyToClipboard(longText);

      expect(result).toBe(true);
      // * 크기 제한으로 Clipboard API는 호출되지 않음
      expect(mockClipboard.writeText).not.toHaveBeenCalled();
      // * execCommand로 대체 처리
      expect(document.execCommand).toHaveBeenCalledWith("copy");
    });
  });
});
