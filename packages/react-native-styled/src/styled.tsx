/* eslint-disable @typescript-eslint/ban-types */
import { Theme, useTheme } from "@peersyst/react-native-styled";
import { ComponentType, useMemo } from "react";
import { deepmerge } from "@peersyst/react-utils";
import { StyleSheet } from "react-native";

export type ExtendedSx<SX extends (args: any) => any, E> = (
    p: Parameters<SX>[0] & E,
) => ReturnType<SX>;

export type StyledFunction<P extends { sx?: P["sx"]; style?: P["style"] }, E = {}> = P extends {
    sx?: P["sx"];
}
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ExtendedSx<P["sx"], E>
    : (p: { theme: Theme } & E) => P["style"];

export default function styled<P extends { sx?: P["sx"]; style?: P["style"] }>(
    Component: ComponentType<P>,
    props?: Partial<Omit<P, "sx">>,
): <E = {}>(sx?: StyledFunction<P, E>) => ComponentType<P & E> {
    const styledConstructor = function <E = {}>(styledSx?: StyledFunction<P, E>) {
        const StyledComponent = ({ sx: sxProp, style: styleProp, ...rest }: P & E): JSX.Element => {
            const theme = useTheme();

            const style = useMemo(
                () =>
                    deepmerge(
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        deepmerge(styledSx?.({ theme, ...rest }), StyleSheet.flatten(styleProp)),
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        sxProp?.(theme),
                    ),
                [styleProp, theme, rest, sxProp],
            );

            const finalProps = {
                ...props,
                ...rest,
                style,
            };

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return <Component {...finalProps} />;
        };
        StyledComponent.displayName = Component.displayName;
        return StyledComponent;
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return function <E = {}>(sx?: StyledFunction<P, E>) {
        return styledConstructor<E>(sx);
    };
}
