export default function normalizeQuery(
  params: Record<string, any>,
  options?: {
    toLowerCase?: boolean;
    trimValues?: boolean;
    removeEmpty?: boolean;
    sortKeys?: boolean;
  }
): Record<string, any> {
  if (!params || typeof params !== 'object') {
    return {};
  }

  const {
    toLowerCase = false,
    trimValues = true,
    removeEmpty = true,
    sortKeys = false
  } = options || {};

  let result: Record<string, any> = { ...params };
  
  // Process each key-value pair
  Object.entries(result).forEach(([key, value]) => {
    let processedValue = value;
    
    // Handle string values
    if (typeof value === 'string') {
      if (trimValues) {
        processedValue = value.trim();
      }
      if (toLowerCase) {
        processedValue = processedValue.toLowerCase();
      }
    }
    
    // Handle arrays
    if (Array.isArray(value)) {
      processedValue = value.map(item => {
        if (typeof item === 'string') {
          let processed = item;
          if (trimValues) processed = processed.trim();
          if (toLowerCase) processed = processed.toLowerCase();
          return processed;
        }
        return item;
      });
    }
    
    // Update the result
    delete result[key];
    const finalKey = toLowerCase ? key.toLowerCase() : key;
    result[finalKey] = processedValue;
  });
  
  // Remove empty values if requested
  if (removeEmpty) {
    Object.entries(result).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '' ||
          (Array.isArray(value) && value.length === 0)) {
        delete result[key];
      }
    });
  }
  
  // Sort keys if requested
  if (sortKeys) {
    const sortedKeys = Object.keys(result).sort();
    const sortedResult: Record<string, any> = {};
    sortedKeys.forEach(key => {
      sortedResult[key] = result[key];
    });
    result = sortedResult;
  }
  
  return result;
}