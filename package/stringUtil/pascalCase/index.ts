import wordTokenize from "../_wordTokenize";

export default function pascalCase(text: string): string {
  return wordTokenize(text)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}
