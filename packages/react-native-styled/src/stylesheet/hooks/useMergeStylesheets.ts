import { deepmerge } from "@peersyst/react-utils";
import { Stylesheet, StyledComponentProps } from "../../types";
import { useMemo } from "react";

export default function useMergeStylesheets<P extends StyledComponentProps<P["style"]> = any>(
    ...stylesheets: Stylesheet<P["style"]>[]
): NonNullable<P["style"]> {
    return useMemo(() => {
        const [baseStylesheet, ...restStylesheets] = stylesheets;
        let resolvedStylesheet = baseStylesheet;
        for (const stylesheet of restStylesheets)
            resolvedStylesheet = deepmerge(resolvedStylesheet, stylesheet);

        return resolvedStylesheet || {};
    }, [stylesheets]);
}
