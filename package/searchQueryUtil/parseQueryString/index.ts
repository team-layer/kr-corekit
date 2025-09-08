export default function parseQueryString(queryString: string): Record<string, string | string[]> {
  if (!queryString || typeof queryString !== 'string') {
    return {};
  }

  // Remove leading ? if present
  const cleanQuery = queryString.replace(/^\?/, '');
  
  if (!cleanQuery) {
    return {};
  }

  const result: Record<string, string | string[]> = {};
  
  cleanQuery.split('&').forEach(pair => {
    const [key, value = ''] = pair.split('=');
    
    if (!key) return;
    
    const decodedKey = decodeURIComponent(key);
    const decodedValue = decodeURIComponent(value);
    
    // Handle multiple values for the same key
    if (result[decodedKey]) {
      if (Array.isArray(result[decodedKey])) {
        (result[decodedKey] as string[]).push(decodedValue);
      } else {
        result[decodedKey] = [result[decodedKey] as string, decodedValue];
      }
    } else {
      result[decodedKey] = decodedValue;
    }
  });
  
  return result;
}