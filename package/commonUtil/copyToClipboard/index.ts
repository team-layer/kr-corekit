/**
 * 주어진 텍스트를 사용자의 클립보드에 비동기적으로 복사합니다.
 *
 * 최신 Clipboard API (`navigator.clipboard.writeText`)를 우선적으로 시도하며,
 * 실패하거나 사용할 수 없는 경우 레거시 `document.execCommand('copy')` 방식으로 대체 수행합니다.
 *
 * @param {string} text - 클립보드에 복사할 문자열
 * @returns {Promise<boolean>} 복사 성공 시 `true`, 실패 시 `false`를 반환
 */
export default async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (text.length > 1000000) {
      throw new Error("Text too large to copy");
    }

    await navigator.clipboard.writeText(text);

    return true;
  } catch (error) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      return successful;
    } catch (execError) {
      document.body.removeChild(textArea);

      return false;
    }
  }
}
