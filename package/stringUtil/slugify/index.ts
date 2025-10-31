/**
 * 문자열을 URL 친화적인 slug 형태로 변환합니다.
 * 공백을 대시(-)로 변환하고, 특수문자를 제거하며, 소문자로 변환합니다.
 * 한글도 지원합니다.
 *
 * @param text - slug로 변환할 문자열
 * @returns URL 친화적인 slug 문자열
 */
export default function slugify(text: string): string {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9가-힣\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
