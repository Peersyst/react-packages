/* eslint-disable @typescript-eslint/ban-types */
import { ComponentType } from "react";
import {
    StyledComponentProps,
    Stylesheet,
    StylesheetFunction,
    StylesheetWithMetadata,
} from "../types";
import { fromTheme, fromProps, fromDimensions, fromSafeAreaInsets } from "../accessors";
import { getComponentStylesheetName } from "./utils";

/**
 * Creates a stylesheet for a component with a set of accessors.
 * Similar to the css function from styled-components.
 * @param Component
 * @returns A function that takes a stylesheet function and returns a stylesheet.
 */
export default function stylesheet<P extends StyledComponentProps<P["style"]>>(
    Component: ComponentType<P> | string,
): (sx?: StylesheetFunction<P>) => StylesheetWithMetadata<P["style"]> {
    function stylesheetFn(
        stylesheetSx?: StylesheetFunction<P>,
    ): StylesheetWithMetadata<P["style"]> {
        const stylesheet = (stylesheetSx?.({
            fromTheme,
            fromProps,
            fromDimensions,
            fromSafeAreaInsets,
        } as any) || {}) as Stylesheet<P["style"]> as StylesheetWithMetadata<P["style"]>;
        stylesheet._metadata = {
            component: getComponentStylesheetName(Component),
            isStylesheet: true,
        };
        return stylesheet;
    }
    return stylesheetFn;
}
