import wordTokenize from "../_wordTokenize";

export default function camelCase(text: string): string {
  const words = wordTokenize(text);

  if (words.length === 0) {
    return "";
  }

  return words
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}
