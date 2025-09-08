export default function removeEmptyParams(
  params: Record<string, any>
): Record<string, any> {
  if (!params || typeof params !== 'object') {
    return {};
  }

  const result: Record<string, any> = {};
  
  Object.entries(params).forEach(([key, value]) => {
    // Skip null, undefined, empty strings, empty arrays
    if (value === null || value === undefined || value === '') {
      return;
    }
    
    // Handle arrays
    if (Array.isArray(value)) {
      const filteredArray = value.filter(item => 
        item !== null && item !== undefined && item !== ''
      );
      if (filteredArray.length > 0) {
        result[key] = filteredArray;
      }
      return;
    }
    
    // Handle objects recursively
    if (typeof value === 'object') {
      const cleanedObject = removeEmptyParams(value);
      if (Object.keys(cleanedObject).length > 0) {
        result[key] = cleanedObject;
      }
      return;
    }
    
    // Include non-empty primitive values
    result[key] = value;
  });
  
  return result;
}