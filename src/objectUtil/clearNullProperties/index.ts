export default function clearNullProperties<T>(obj: T): T {
    const result = { ...obj };
    Object.keys(result as Record<string, any>).forEach((el) => {
        if (!(result as Record<string, any>)[el]) {
            delete (result as Record<string, any>)[el];
        } else if (typeof (result as Record<string, any>)[el] === "object") {
            (result as Record<string, any>)[el] = clearNullProperties((result as Record<string, any>)[el]);
        }
    })
    return result;
}
