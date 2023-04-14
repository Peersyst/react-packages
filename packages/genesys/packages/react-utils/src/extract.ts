export default function extract<T extends object, K extends (keyof T)[]>(
    obj: T,
    ...keys: K
): [Pick<T, K[number]>, Omit<T, K[number]>] {
    return keys.reduce(
        ([extractedObj, rest], key) => {
            if (key in obj) {
                extractedObj[key] = obj[key];
                delete rest[key];
            }
            return [extractedObj, rest];
        },
        [{} as Pick<T, K[number]>, { ...obj }],
    );
}
