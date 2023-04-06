/* eslint-disable @typescript-eslint/ban-types */
import { useTheme } from "@peersyst/react-native-styled";
import { ComponentType, useMemo } from "react";
import { deepmerge } from "@peersyst/react-utils";
import { StyleSheet, useWindowDimensions } from "react-native";
import { StyledFunction, StyledComponentProps, StyledParams, Stylesheet } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Loosen } from "@peersyst/react-types";
import { resolveStyles } from "./helpers";

export default function styled<
    P extends StyledComponentProps<P["style"]>,
    K extends keyof Omit<P, "style" | "sx">,
>(
    Component: ComponentType<P>,
    props?: Record<K, P[K]>,
): <E = {}>(
    sx?: StyledFunction<P, E>,
) => ComponentType<Loosen<P, K> & E & StyledComponentProps<P["style"]>> {
    const styledConstructor = function <E = {}>(styledSx?: StyledFunction<P, E>) {
        const componentName = Component.displayName || Component.name;

        const StyledComponent = (styledComponentProps: P & E): JSX.Element => {
            const { sx: sxProp, style: styleProp, ...rest } = styledComponentProps;

            const theme = useTheme();
            const dimensions = useWindowDimensions();
            const safeAreaInsets = useSafeAreaInsets();

            const params = {
                theme,
                dimensions,
                safeAreaInsets,
                ...styledComponentProps,
            } as StyledParams<P, E>;

            // Compute style
            const style = useMemo(() => {
                const styles = deepmerge(
                    deepmerge(styledSx?.(params), StyleSheet.flatten(styleProp)),
                    sxProp?.({ theme, dimensions, safeAreaInsets }),
                ) as Stylesheet<P["style"]>;

                // TODO: Evaluate adding a resolved prop in the stylesheet metadata to not recompute styles if not needed
                return resolveStyles(params, styles);
            }, [theme, dimensions, safeAreaInsets, styleProp, rest, sxProp?.toString()]);

            const finalProps = {
                ...props,
                ...rest,
                style,
            };

            return <Component {...(finalProps as P & E)} />;
        };
        StyledComponent.displayName = componentName;
        return StyledComponent;
    };

    // @ts-ignore
    return function <E = {}>(sx?: StyledFunction<P, E>) {
        return styledConstructor<E>(sx);
    };
}
