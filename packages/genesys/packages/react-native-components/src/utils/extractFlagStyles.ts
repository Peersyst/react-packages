export type StyleFlags<S extends object, K extends keyof S> = Record<K, boolean>;

export default function extractFlagStyles<S extends object, F extends keyof S>(
    styles: S,
    flags: Record<F, boolean>,
): [Omit<S, F>, Pick<S, F>] {
    return Object.entries(flags).reduce(
        ([filteredObj, pickedObj], [key, value]) => {
            if (key in styles) {
                delete filteredObj[key as F];
                if (value) pickedObj[key as F] = styles[key as F];
            }
            return [filteredObj, pickedObj];
        },
        [{ ...styles }, {} as Pick<S, F>],
    );
}
