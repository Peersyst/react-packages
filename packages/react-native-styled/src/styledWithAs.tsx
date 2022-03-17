/* eslint-disable @typescript-eslint/ban-types */
import { Theme, useTheme } from "@peersyst/react-native-styled";
import { ComponentType, useMemo } from "react";
import { deepmerge } from "@peersyst/react-utils";
import { ScaledSize, StyleSheet, useWindowDimensions } from "react-native";
import { SX, StyledFunction } from "./types";

export interface As<P> {
    as?: ComponentType<P>;
}

export default function styled<
    P extends { sx?: SX<P["style"]>; style?: P["style"] },
    IP extends Partial<Omit<P, "sx" | "style">>,
>(Component: ComponentType<P>, props?: IP) {
    const styledConstructor = function <E = {}>(styledSx?: StyledFunction<P, E>) {
        function StyledComponent<AP = P>({
            sx: sxProp,
            style: styleProp,
            as,
            ...rest
        }: AP & E & As<AP> & { sx?: SX<P["style"]>; style?: P["style"] }) {
            const theme = useTheme();
            const dimensions = useWindowDimensions();

            const style = useMemo(
                () =>
                    deepmerge(
                        deepmerge(
                            styledSx?.({ theme, dimensions, ...rest } as AP &
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
