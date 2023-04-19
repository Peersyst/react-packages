import { JSXElementConstructor } from "react";
import { useDynamicImport } from "docusaurus-plugin-react-docgen-typescript/dist/esm/hooks";

export default function useReactDocgenProps<P>(
    component: JSXElementConstructor<P> | string,
): P | null {
    return useDynamicImport(
        typeof component === "string"
            ? component
            : (component as any).displayName || component.name,
    ) as P;
}
