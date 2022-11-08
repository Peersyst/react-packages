/* eslint-disable @typescript-eslint/ban-types */
import { Theme, useTheme } from "@peersyst/react-native-styled";
import { ComponentType, PropsWithChildren, useMemo } from "react";
import { deepmerge } from "@peersyst/react-utils";
import { ScaledSize, StyleSheet, useWindowDimensions } from "react-native";
import { SX, StyledFunction } from "./types";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

// T extends Partial<Omit<P, "sx" | "style">>
export default function styled<P extends { sx?: SX<P["style"]>; style?: P["style"] }>(
    Component: ComponentType<P>,
    props?: Partial<Omit<P, "sx" | "style">>,
): <E = {}>(sx?: StyledFunction<P, E>) => ComponentType<P & E> {
    const styledConstructor = function <E = {}>(styledSx?: StyledFunction<P, E>) {
        const StyledComponent = ({ sx: sxProp, style: styleProp, ...rest }: P & E): JSX.Element => {
            const theme = useTheme();
            const dimensions = useWindowDimensions();
            const safeAreaInsets = useSafeAreaInsets();

            const style = useMemo(
                () =>
                    deepmerge(
                        deepmerge(
                            styledSx?.({ theme, dimensions, safeAreaInsets, ...rest } as P &
                                E & { theme: Theme } & {
                                    dimensions: ScaledSize;
                                    safeAreaInsets: EdgeInsets;
                                }),
                            StyleSheet.flatten(styleProp),
                        ),
                        sxProp?.(theme),
                    ),
                [styleProp, theme, rest, sxProp, dimensions, safeAreaInsets],
            );

            const finalProps = {
                ...props,
                ...rest,
                style,
            };

            return <Component {...(finalProps as P & E)} />;
        };
        StyledComponent.displayName = Component.displayName;
        return StyledComponent;
    };

    return function <E = {}>(sx?: StyledFunction<P, E>) {
        return styledConstructor<E>(sx);
    };
}
