/* eslint-disable @typescript-eslint/ban-types */
import { Theme, useTheme } from "@peersyst/react-native-styled";
import { ComponentType, useMemo } from "react";
import { deepmerge } from "@peersyst/react-utils";
import { ScaledSize, StyleSheet, useWindowDimensions } from "react-native";
import { SX, StyledFunction } from "./types";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

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
        function StyledComponent<AP = P>({
            sx: sxProp,
            style: styleProp,
            as,
            ...rest
        }: AP & E & As<AP> & { sx?: SX<P["style"]>; style?: P["style"] }) {
            const theme = useTheme();
            const dimensions = useWindowDimensions();
            const safeAreaInsets = useSafeAreaInsets();

            const style = useMemo(
                () =>
                    deepmerge(
                        deepmerge(
                            styledSx?.({ theme, dimensions, safeAreaInsets, ...rest } as AP &
                                E & { theme: Theme } & {
                                    dimensions: ScaledSize;
                                    safeAreaInsets: EdgeInsets;
                                }),
                            StyleSheet.flatten(styleProp),
                        ),
                        sxProp?.({ theme, dimensions, safeAreaInsets }),
                    ),
                [
                    theme,
                    dimensions,
                    safeAreaInsets,
                    JSON.stringify(styleProp),
                    JSON.stringify(rest),
                    sxProp?.toString(),
                ],
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
