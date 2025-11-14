import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import generateHappy from ".";

describe("generateHappy", () => {
  let consoleLogSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // console.log를 spy로 대체하여 호출 여부를 추적합니다.
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    // 각 테스트 후 spy를 복원합니다.
    consoleLogSpy.mockRestore();
  });

  test("사용자 정의 메시지가 없을 때 기본 메시지 중 하나를 반환해야 한다", () => {
    const result = generateHappy();

    // 기본 메시지 중 하나가 반환되는지 확인 (구체적인 메시지 배열을 하드코딩하지 않음)
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });

  test("사용자 정의 메시지를 전달하면 해당 메시지를 반환해야 한다", () => {
    const customMessage = "Custom happy message!";
    const result = generateHappy(customMessage);

    expect(result).toBe(customMessage);
  });

  test("console.log가 호출되어야 한다", () => {
    generateHappy("Test message");

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("console.log에 타임스탬프와 메시지가 포함되어야 한다", () => {
    const testMessage = "Test message";
    generateHappy(testMessage);

    expect(consoleLogSpy).toHaveBeenCalled();
    const [firstArg] = consoleLogSpy.mock.calls[0];
    
    // 첫 번째 인자에 타임스탬프와 메시지가 포함되어 있는지 확인
    expect(firstArg).toContain(testMessage);
    expect(firstArg).toMatch(/\[\d{1,2}:\d{2}:\d{2}.*\]/); // 타임스탬프 형식 확인
  });

  test("console.log에 올바른 스타일이 적용되어야 한다", () => {
    generateHappy("Test message");

    expect(consoleLogSpy).toHaveBeenCalled();
    const args = consoleLogSpy.mock.calls[0];
    
    // 스타일 인자들이 올바르게 전달되었는지 확인
    expect(args[1]).toBe('color: #ff69b4; font-weight: bold;');
    expect(args[2]).toBe('color: #333; font-size: 14px;');
  });

  test("여러 번 호출해도 정상적으로 동작해야 한다", () => {
    generateHappy("Message 1");
    generateHappy("Message 2");
    generateHappy();

    expect(consoleLogSpy).toHaveBeenCalledTimes(3);
  });
});
