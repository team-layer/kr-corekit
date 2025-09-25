interface decodeBase64Options {
  convertSpecialChars?: boolean;
}

export default function decodeBase64(
  str: string,
  { convertSpecialChars = true }: decodeBase64Options = {}
): string {
  if (str == null) return str;

  if (convertSpecialChars) {
    return decodeURIComponent(atob(str));
  }
  return decodeURI(atob(str));
}
