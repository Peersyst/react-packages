import { Children, JSXElementConstructor, ReactElement, ReactNode } from "react";

/**
 * Deprecated
 * @param children
 * @param type
 */
export default function findSlot<TElement extends JSXElementConstructor<any>>(
    children: ReactNode,
    type: any,
): ReactElement<TElement> {
    return Children.toArray(children).find(
        (child) => (child as ReactElement).type === type,
    ) as ReactElement<TElement>;
}
