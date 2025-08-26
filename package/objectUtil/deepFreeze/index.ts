export default function deepFreeze<T>(obj: T): T {
    const objectName = Object.getOwnPropertyNames(obj);
    for (const name of objectName) {
        const value = (obj as Record<string, any>)[name];
        if (typeof value === "object" && value !== null) {
            deepFreeze(value);
        }
    }
    return Object.freeze(obj);
}