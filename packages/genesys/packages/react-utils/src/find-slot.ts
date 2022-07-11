import { Children, JSXElementConstructor, ReactElement, ReactNode } from "react";

export default function findSlot<TElement extends JSXElementConstructor<any>>(
    children: ReactNode,
    type: any,
): ReactElement<TElement> {
    return Children.toArray(children).find(
        (child) => (child as ReactElement).type === type,
    ) as ReactElement<TElement>;
}
