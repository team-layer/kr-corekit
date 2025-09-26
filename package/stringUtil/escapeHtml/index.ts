export default function escapeHtml(str: string): string;
export default function escapeHtml(str: null): null;
export default function escapeHtml(str: undefined): undefined;
export default function escapeHtml(
  str: string | null | undefined
): string | null | undefined;
export default function escapeHtml(
  str: string | null | undefined
): string | null | undefined {
  if (str == null) return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
