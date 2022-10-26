import { Children, isValidElement, ReactElement, ReactNode } from "react";

export default function (children: ReactNode): [Record<string, ReactElement>, ReactNode] {
    const slots: Record<string, ReactElement> = {};
    const remainingChildren: ReactNode[] = [];
    Children.forEach(children, (child) => {
        if (isValidElement(child)) {
            const elementChild = child as ReactElement;
            const childType = elementChild.type;
            if (typeof childType === "function" && "name" in childType) {
                slots[childType.name] = elementChild;
            } else remainingChildren.push(child);
        } else remainingChildren.push(child);
    });
    return [slots, remainingChildren];
}
