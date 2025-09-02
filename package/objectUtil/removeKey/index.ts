export default function removeKey(key: string, obj: Record<string, any>) {
  const { [key]: _, ...rest } = obj;
  return rest;
}
