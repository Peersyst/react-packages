export default function <T, K extends (keyof T)[]>(obj: T, ...keys: K): Omit<T, K[number]> {
    const objCopy = { ...obj };
    for (const key of keys) {
        delete objCopy[key];
    }
    return objCopy;
}
