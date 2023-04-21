import { JSXElementConstructor } from "react";

export default function getComponentStylesheetName(
    Component: JSXElementConstructor<any> | string,
): string {
    return typeof Component === "string"
        ? Component
        : // Class component || Function component || ForwardRef
          (Component as any).displayName || Component.name || (Component as any).render.name;
}
