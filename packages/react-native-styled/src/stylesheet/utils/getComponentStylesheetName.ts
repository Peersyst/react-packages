import { JSXElementConstructor } from "react";

export default function getComponentStylesheetName(
    Component: JSXElementConstructor<any> | string,
): string {
    return typeof Component === "string"
        ? Component
        : (Component as any).displayName || Component.name;
}
