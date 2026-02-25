function flatDeep<T>(array: readonly unknown[], result: T[]): T[] {
  array.forEach((value) => {
    if (Array.isArray(value)) {
      flatDeep<T>(value, result);
      return;
    }

    result.push(value as T);
  });

  return result;
}

export default function flattenDeep<T>(array: readonly unknown[]): T[] {
  return flatDeep<T>(array, []);
}
