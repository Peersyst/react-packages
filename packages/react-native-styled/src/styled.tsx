/* eslint-disable @typescript-eslint/ban-types */
import { ComponentType } from "react";
import { StyleSheet } from "react-native";
import { Theme, useTheme } from "./theme";

export type StyledFunction<P extends { sx?: P["sx"]; style?: P["style"] }, E = {}> = P extends {
    sx?: P["sx"];
}
    ? P["sx"]
    : (p: { theme: Theme } & E) => P["style"];

export default function styled<P extends { sx?: P["sx"]; style?: P["style"] }>(
    Component: ComponentType<P>,
    props?: Partial<Omit<P, "sx">>,
): <E = {}>(sx?: StyledFunction<P, E>) => ComponentType<P & E> {
    const styledConstructor = function <E = {}>(styledSx?: StyledFunction<P, E>) {
        const StyledComponent = ({ sx: sxProp, style: styleProp, ...rest }: P & E): JSX.Element => {
            const theme = useTheme();

            const style = sxProp
                ? styleProp
                : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  StyleSheet.flatten([styledSx?.({ theme, ...rest }), styleProp]);

            const sx: P["sx"] = sxProp
                ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  (args: Parameters<P["sx"]>) => StyleSheet.flatten([styledSx?.(args), sx?.(args)])
                : undefined;

            const finalProps = {
                ...props,
                ...rest,
                style,
                sx,
            };
            return (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <Component {...finalProps} />
            );
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
