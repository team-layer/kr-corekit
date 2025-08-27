export default function checkHttpUrl(str: string): boolean {
  const roughPattern = /^(https?:\/\/)/i;

  if (!roughPattern.test(str)) return false;

  try {
    new URL(str);

    return true;
  } catch {
    return false;
  }
}
