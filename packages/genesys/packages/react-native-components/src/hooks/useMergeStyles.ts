import { useMemo } from "react";
import { flattenStyles } from "../utils";

/**
 * Merges styles and returns a memoized S style
 * @param styles Array of S styles ordered by priority ASC
 * @param flags S flags orderer by priority ASC i.e. { disabled: true }
 */
export default function useMergeStyles<S extends object, F extends keyof S>(
    styles: S[],
    flags: Record<F, boolean>,
    strategy: (prev: Omit<S, F>, next: Omit<S, F>) => Omit<S, F> = (prev, next) => ({
        ...prev,
        ...next,
    }),
): Omit<S, F> {
    return useMemo(() => {
        let mergedStyles: Omit<S, F> = {} as Omit<S, F>;

        for (const style of styles)
            mergedStyles = strategy(mergedStyles, flattenStyles(style, flags, strategy));

        return mergedStyles;
    }, [JSON.stringify(styles), JSON.stringify(flags)]);
}
