interface TruncateOptions {
  length?: number;
  omission?: string;
}

export default function truncate(
  text: string,
  options: TruncateOptions = {}
): string {
  const { length = 30, omission = "..." } = options;

  if (text.length <= length) {
    return text;
  }

  if (length <= omission.length) {
    return omission.slice(0, Math.max(0, length));
  }

  return text.slice(0, length - omission.length) + omission;
}
