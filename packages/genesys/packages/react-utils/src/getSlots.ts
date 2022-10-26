import { Children, isValidElement, ReactElement, ReactNode } from "react";

export default function (children: ReactNode): Record<string, ReactElement> {
    const slots: Record<string, ReactElement> = {};
    Children.forEach(children, (child) => {
        if (isValidElement(child)) {
            const elementChild = child as ReactElement;
            const childType = elementChild.type;
            if (typeof childType === "function" && "name" in childType) {
                slots[childType.name] = elementChild;
            }
        }
    });
    return slots;
}
