import { JSXElementConstructor } from "react";
import { useDynamicImport } from "docusaurus-plugin-react-docgen-typescript/dist/esm/hooks";
import { PropItem } from "react-docgen-typescript";

export default function useReactDocgenProps<P>(
    component: JSXElementConstructor<P> | string,
): Record<keyof P, PropItem> | null {
    return useDynamicImport(
        typeof component === "string"
            ? component
            : (component as any).displayName || component.name,
    ) as Record<keyof P, PropItem> | null;
}
