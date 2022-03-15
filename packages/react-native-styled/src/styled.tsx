/* eslint-disable @typescript-eslint/ban-types */
import { Theme, useTheme } from "@peersyst/react-native-styled";
import { ComponentType, useMemo } from "react";
import { deepmerge } from "@peersyst/react-utils";
import { ScaledSize, StyleSheet, useWindowDimensions } from "react-native";
import { SX, StyledFunction } from "./types";

export default function styled<P extends { sx?: SX<P["style"]>; style?: P["style"] }>(
    Component: ComponentType<P>,
    props?: Partial<Omit<P, "sx" | "style">>,
): <E = {}>(sx?: StyledFunction<P, E>) => ComponentType<P & E> {
    const styledConstructor = function <E = {}>(styledSx?: StyledFunction<P, E>) {
        const StyledComponent = ({ sx: sxProp, style: styleProp, ...rest }: P & E): JSX.Element => {
            const theme = useTheme();
            const dimensions = useWindowDimensions();

            const style = useMemo(
                () =>
                    deepmerge(
                        deepmerge(
                            styledSx?.({ theme, dimensions, ...rest } as P &
                                E & { theme: Theme } & { dimensions: ScaledSize }),
                            StyleSheet.flatten(styleProp),
                        ),
                        sxProp?.(theme),
                    ),
                [styleProp, theme, rest, sxProp, dimensions],
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
