/* eslint-disable @typescript-eslint/ban-types */
import { Theme, useTheme } from "@peersyst/react-native-styled";
import { ComponentType, useMemo } from "react";
import { deepmerge } from "@peersyst/react-utils";
import { ScaledSize, StyleSheet, useWindowDimensions } from "react-native";
import { StyledFunction, StyledComponentProps } from "./types";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { Loosen } from "@peersyst/react-types";

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

        const StyledComponent = ({ sx: sxProp, style: styleProp, ...rest }: P & E): JSX.Element => {
            const theme = useTheme();
            const dimensions = useWindowDimensions();
            const safeAreaInsets = useSafeAreaInsets();

            const style = useMemo(
                () =>
                    deepmerge(
                        deepmerge(
                            styledSx?.({ theme, dimensions, safeAreaInsets, ...rest } as P &
                                E & {
                                    theme: Theme;
                                    dimensions: ScaledSize;
                                    safeAreaInsets: EdgeInsets;
                                }),
                            StyleSheet.flatten(styleProp),
                        ),
                        sxProp?.({ theme, dimensions, safeAreaInsets }),
                    ),
                [theme, dimensions, safeAreaInsets, styleProp, rest, sxProp?.toString()],
            );

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
