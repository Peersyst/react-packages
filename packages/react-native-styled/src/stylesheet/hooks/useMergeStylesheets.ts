import { deepmerge } from "@peersyst/react-utils";
import { Stylesheet, StyledComponentProps } from "../../types";
import { useMemo } from "react";

/**
 * Merges a set of stylesheets into a single stylesheet using a deepmerge strategy
 * @param stylesheets
 * @returns The merged stylesheet
 */
export default function useMergeStylesheets<P extends StyledComponentProps<P["style"]> = any>(
    ...stylesheets: (Stylesheet<P["style"]> | P["style"] | undefined)[]
): NonNullable<P["style"]> {
    return useMemo(() => {
        const [baseStylesheet = {}, ...restStylesheets] = stylesheets;
        let mergedStylesheet = baseStylesheet;
        for (const stylesheet of restStylesheets)
            if (stylesheet) mergedStylesheet = deepmerge(mergedStylesheet, stylesheet);

        return mergedStylesheet || {};
    }, [stylesheets]);
}
