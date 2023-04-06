export default function <T, K extends (keyof T)[]>(obj: T, ...keys: K): Omit<T, K[number]> {
    return keys.reduce((filteredObj, key) => {
        (filteredObj as any)[key] = obj[key];
        return filteredObj;
    }, {} as Omit<T, K[number]>);
}
