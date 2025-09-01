export default function checkBase64(value: string): boolean {
  if (value.trim() === "") return false;
  const base64Regex =
    /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=)?$/i;
  return base64Regex.test(value);
}
