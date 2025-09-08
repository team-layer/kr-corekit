export default function buildQueryString(
  params: Record<string, string | number | boolean | string[] | null | undefined>
): string {
  if (!params || typeof params !== 'object') {
    return '';
  }

  const pairs: string[] = [];
  
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      return;
    }
    
    const encodedKey = encodeURIComponent(key);
    
    if (Array.isArray(value)) {
      value.forEach(item => {
        if (item !== null && item !== undefined) {
          pairs.push(`${encodedKey}=${encodeURIComponent(String(item))}`);
        }
      });
    } else {
      pairs.push(`${encodedKey}=${encodeURIComponent(String(value))}`);
    }
  });
  
  return pairs.join('&');
}