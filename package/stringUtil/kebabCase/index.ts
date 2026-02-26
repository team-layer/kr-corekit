import wordTokenize from "../_wordTokenize";

export default function kebabCase(text: string): string {
  return wordTokenize(text).join("-");
}
