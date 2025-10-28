/**
 * 숫자나 문자열을 3자리마다 콤마(,)가 포함된 문자열로 변환합니다.
 * null, undefined, 또는 유효하지 않은 값이 들어오면 빈 문자열을 반환합니다.
 *
 * @param value - 콤마를 추가할 숫자 또는 문자열
 * @returns 콤마가 추가된 문자열
 *
 * @example
 * formatNumberWithCommas(1234567); // "1,234,567"
 * formatNumberWithCommas(-12345.67); // "-12,345.67"
 * formatNumberWithCommas("12345"); // "12,345"
 */
export default function formatNumberWithCommas(
  value: number | string | null | undefined
): string {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  const num = Number(value);

  if (isNaN(num)) {
    return String(value);
  }

  return num.toLocaleString("en-US");
}
