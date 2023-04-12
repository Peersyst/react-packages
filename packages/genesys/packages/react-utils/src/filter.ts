export default function <T, K extends (keyof T)[]>(obj: T, ...keys: K): Omit<T, K[number]> {
    return keys.reduce(
        (filteredObj, key) => {
            delete filteredObj[key as keyof typeof filteredObj];
            return filteredObj;
        },
        { ...obj } as Omit<T, K[number]>,
    );
}
