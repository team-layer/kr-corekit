export default function wordTokenize(text: string): string[] {
  if (text.trim() === "") {
    return [];
  }

  const normalized = text
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_\-]+/g, " ");

  return normalized
    .match(/[\p{L}\p{N}]+/gu)
    ?.map((word) => word.toLowerCase()) ?? [];
}
