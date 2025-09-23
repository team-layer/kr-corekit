import isPlainObject from "../../typeUtil/isPlainObject";

export default function clearNullProperties<T>(obj: T): T {
  const result = { ...obj };
  Object.keys(result as Record<string, any>).forEach((el) => {
    if (
      (result as Record<string, any>)[el] === null ||
      (result as Record<string, any>)[el] === undefined
    ) {
      delete (result as Record<string, any>)[el];
    } else if (isPlainObject((result as Record<string, any>)[el])) {
      (result as Record<string, any>)[el] = clearNullProperties(
        (result as Record<string, any>)[el]
      );
    }
  });
  return result;
}
