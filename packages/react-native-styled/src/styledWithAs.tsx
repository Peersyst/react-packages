/* eslint-disable @typescript-eslint/ban-types */
import { useTheme } from "@peersyst/react-native-styled";
import { ComponentType, useMemo } from "react";
import { deepmerge } from "@peersyst/react-utils";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SX, StyledFunction, StyledParams, Stylesheet } from "./types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppState } from "./hooks/useAppState";

export interface As<P> {
    as?: ComponentType<P>;
}

/**
 * @Experimental
 */
export default function styled<
    P extends { sx?: SX<P["style"]>; style?: P["style"] },
    IP extends Partial<Omit<P, "sx" | "style">>,
>(Component: ComponentType<P>, props?: IP) {
    const styledConstructor = function <E = {}>(styledSx?: StyledFunction<P, E>) {
        function StyledComponent<AP extends { sx?: SX<P["style"]>; style?: P["style"] } = P>(
            styledComponentProps: AP & E & As<AP> & { sx?: SX<P["style"]>; style?: P["style"] },
        ) {
            const { sx: sxProp, style: styleProp, as, ...rest } = styledComponentProps;

            const theme = useTheme();
            const dimensions = useWindowDimensions();
            const safeAreaInsets = useSafeAreaInsets();
            const appState = useAppState();

            const params = {
                theme,
                dimensions,
                safeAreaInsets,
                appState,
                ...styledComponentProps,
            } as StyledParams<AP, E>;

            // Compute style
            const style = useMemo(() => {
                return deepmerge(
                    deepmerge(
                        styledSx?.(params as unknown as StyledParams<P, E>),
                        StyleSheet.flatten(styleProp),
                    ),
                    sxProp?.({ theme, dimensions, safeAreaInsets, appState }),
                ) as Stylesheet<P["style"]>;
            }, [theme, dimensions, safeAreaInsets, styleProp, rest, sxProp?.toString(), appState]);

            const finalProps = {
                ...props,
                ...rest,
                style,
            };

            const FinalComponent = as || Component;

            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return <FinalComponent {...(finalProps as AP & E)} />;
        }

        StyledComponent.displayName = Component.displayName;
        return StyledComponent;
    };

    return function <E = {}>(sx?: StyledFunction<P, E>) {
        return styledConstructor<E>(sx);
    };
}
