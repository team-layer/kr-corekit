interface encodeBase64Options {
  convertSpecialChars?: boolean;
}

export default function encodeBase64(
  str: string,
  { convertSpecialChars = true }: encodeBase64Options = {}
): string {
  if (str == null) return str;

  if (convertSpecialChars) {
    return btoa(encodeURIComponent(str));
  }
  return btoa(encodeURI(str));
}
