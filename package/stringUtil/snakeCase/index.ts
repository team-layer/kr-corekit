import wordTokenize from "../_wordTokenize";

export default function snakeCase(text: string): string {
  return wordTokenize(text).join("_");
}
