/* eslint-disable @typescript-eslint/ban-types */
import { resolveStyles, useTheme } from "@peersyst/react-native-styled";
import { ComponentType, ForwardedRef, forwardRef, useMemo } from "react";
import { deepmerge } from "@peersyst/react-utils";
import { StyleSheet, useWindowDimensions } from "react-native";
import { StyledFunction, StyledComponentProps, StyledParams, Stylesheet } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Loosen } from "@swisstype/essential";

/**
 * Makes a styled component
 * @param Component
 * @param props
 * @returns
 */
export default function styled<
    P extends StyledComponentProps<P["style"]>,
    K extends keyof Omit<P, "style" | "sx">,
>(
    Component: ComponentType<P>,
    props?: Record<K, P[K]>,
): <E = {}>(
    sx?: StyledFunction<P, E>,
) => ComponentType<
    Loosen<P, K> & E & StyledComponentProps<P["style"]> & { ref?: ForwardedRef<unknown> }
> {
    const styledConstructor = function <E = {}>(styledSx?: StyledFunction<P, E>) {
        const componentName = Component.displayName || Component.name;

        const StyledComponent = forwardRef((styledComponentProps: P & E, ref): JSX.Element => {
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

            // TODO: Add in v4 as it is not backward compatible with deprecated global styles
            // const stylesheet = useStylesheet(componentName);

            // Compute style
            const style = useMemo(() => {
                let styles = {} as Stylesheet<P["style"]>;

                if (styledSx) styles = deepmerge(styles, styledSx(params));
                if (styleProp) styles = deepmerge(styles, StyleSheet.flatten(styleProp));
                if (sxProp)
                    styles = deepmerge(styles, sxProp({ theme, dimensions, safeAreaInsets }));

                return resolveStyles(params, styles);
            }, [theme, dimensions, safeAreaInsets, styleProp, rest, sxProp?.toString()]);

            const finalProps = {
                ...props,
                ...rest,
                style,
                ref,
            };

            return <Component {...(finalProps as P & E & { ref?: ForwardedRef<unknown> })} />;
        });
        StyledComponent.displayName = componentName;
        return StyledComponent;
    };

    // @ts-ignore
    return function <E = {}>(sx?: StyledFunction<P, E>) {
        return styledConstructor<E>(sx);
    };
}

StyleSheet;
