import { useTheme } from "../../theme";
import { StyledComponentProps, Stylesheet } from "../../types";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMemo } from "react";
import { resolveStyles } from "../../helpers";

export interface ResolveStylesheetOptions<P extends StyledComponentProps<P["style"]>> {
    bypass?: boolean;
    compute?: [(style: NonNullable<Stylesheet<P["style"]>>) => Stylesheet<P["style"]>, Array<any>];
}

/**
 * Resolves a stylesheet of a component with props P
 * @param props Component props
 * @param styles Component styles or styleshet
 * @returns The resolved styles
 */
export default function useResolveStylesheet<P extends StyledComponentProps<P["style"]>>(
    props: P,
    styles: Stylesheet<P["style"]>,
    { bypass = false, compute = [(x) => x, []] }: ResolveStylesheetOptions<P> = {},
): NonNullable<P["style"]> {
    const theme = useTheme();
    const dimensions = useWindowDimensions();
    const safeAreaInsets = useSafeAreaInsets();

    return useMemo(() => {
        if (!styles) return {};

        const params = { theme, dimensions, safeAreaInsets, ...props };

        const computedSyles = compute[0](styles);

        if (bypass) return computedSyles || {};

        return resolveStyles(params, computedSyles) || {};
    }, [theme, dimensions, safeAreaInsets, props, ...compute[1]]);
}
