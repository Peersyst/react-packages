import { useTheme } from "../../theme";
import { StyledComponentProps, Stylesheet } from "../../types";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useMemo } from "react";
import { resolveStyles } from "../../helpers";

export default function useResolveStylesheet<P extends StyledComponentProps<P["style"]>>(
    props: P,
    styles: Stylesheet<P["style"]>,
): NonNullable<P["style"]> {
    const theme = useTheme();
    const dimensions = useWindowDimensions();
    const safeAreaInsets = useSafeAreaInsets();

    return useMemo(() => {
        const params = { theme, dimensions, safeAreaInsets, ...props };

        return resolveStyles(params, styles) || {};
    }, [theme, dimensions, safeAreaInsets, props]);
}
