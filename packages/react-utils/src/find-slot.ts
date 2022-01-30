import { Children, JSXElementConstructor, ReactElement, ReactNode } from "react";

export default function findSlot<TElement extends JSXElementConstructor<never>>(
    children: ReactNode,
    type: never,
): ReactElement<TElement> {
    return Children.toArray(children).find(
        (child) => (child as ReactElement).type === type,
    ) as ReactElement<TElement>;
}
