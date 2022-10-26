import { Children, isValidElement, ReactElement, ReactNode } from "react";

/**
 * Extracts all slots from children and other remaining children
 * @param children
 */
export default function extractSlots(
    children: ReactNode,
): [Record<string, ReactElement>, ReactNode] {
    let slots: Record<string, ReactElement> = {};
    let remainingChildren: ReactNode[] = [];
    Children.forEach(children, (child) => {
        if (isValidElement(child)) {
            const elementChild = child as ReactElement;
            const childType = elementChild.type;
            if ((childType as unknown as symbol) == Symbol.for("react.fragment")) {
                const [fragmentSlots, fragmentRemainingChildren] = extractSlots(
                    child.props.children,
                );
                slots = { ...slots, ...fragmentSlots };
                remainingChildren = [...remainingChildren, fragmentRemainingChildren];
            } else if (typeof childType === "function" && "name" in childType) {
                slots[childType.name] = elementChild;
            } else remainingChildren.push(child);
        } else remainingChildren.push(child);
    });
    return [slots, remainingChildren];
}
