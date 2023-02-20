import extractFlagStyles from "./extractFlagStyles";

export default function flattenStyles<S extends object, F extends keyof S>(
    style: S,
    flags: Record<F, boolean>,
    strategy: (prev: Omit<S, F>, next: Omit<S, F>) => Omit<S, F> = (prev, next) => ({
        ...prev,
        ...next,
    }),
): Omit<S, F> {
    const [baseStyle, flagStyle] = extractFlagStyles(style, flags);
    if (!Object.keys(flagStyle).length) return baseStyle;
    return strategy(baseStyle, flattenStyles(flagStyle as S, flags));
}
