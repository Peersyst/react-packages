import { AnyObject } from "@peersyst/react-types";
import { JSXElementConstructor, useContext, useMemo } from "react";
import { StylesheetContext } from "../context";
import { getComponentStylesheetName } from "../utils";

export default function useStylesheet<P extends { style?: AnyObject }>(
    Component: JSXElementConstructor<P> | string,
): NonNullable<P["style"]> {
    const stylesheets = useContext(StylesheetContext);

    return useMemo(
        () => stylesheets[getComponentStylesheetName(Component)] || {},
        [Component, stylesheets],
    );
}
