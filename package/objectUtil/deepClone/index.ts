function cloneFallback<T>(value: T, seen: WeakMap<object, unknown>): T {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (seen.has(value)) {
    return seen.get(value) as T;
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as T;
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags) as T;
  }

  if (value instanceof Map) {
    const clonedMap = new Map();
    seen.set(value, clonedMap);

    value.forEach((mapValue, mapKey) => {
      clonedMap.set(
        cloneFallback(mapKey, seen),
        cloneFallback(mapValue, seen)
      );
    });

    return clonedMap as T;
  }

  if (value instanceof Set) {
    const clonedSet = new Set();
    seen.set(value, clonedSet);

    value.forEach((item) => {
      clonedSet.add(cloneFallback(item, seen));
    });

    return clonedSet as T;
  }

  if (Array.isArray(value)) {
    const clonedArray: unknown[] = [];
    seen.set(value, clonedArray);

    value.forEach((item, index) => {
      clonedArray[index] = cloneFallback(item, seen);
    });

    return clonedArray as T;
  }

  const clonedObject = Object.create(Object.getPrototypeOf(value));
  seen.set(value, clonedObject);

  const descriptors = Object.getOwnPropertyDescriptors(value);

  Reflect.ownKeys(descriptors).forEach((key) => {
    const descriptor = descriptors[key as keyof typeof descriptors];

    if (!descriptor) {
      return;
    }

    if ("value" in descriptor) {
      descriptor.value = cloneFallback(descriptor.value, seen);
    }

    Object.defineProperty(clonedObject, key, descriptor);
  });

  return clonedObject;
}

export default function deepClone<T>(value: T): T {
  if (typeof globalThis.structuredClone === "function") {
    try {
      return globalThis.structuredClone(value);
    } catch {
      return cloneFallback(value, new WeakMap<object, unknown>());
    }
  }

  return cloneFallback(value, new WeakMap<object, unknown>());
}
