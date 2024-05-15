import { Children, isValidElement, ReactElement, ReactNode } from "react";

export enum SlotType {
    SLOT = "SLOT",
    ARRAY = "ARRAY",
}

export type SlotsResult<S extends Record<string, SlotType> = Record<string, SlotType.SLOT>> = {
    [K in keyof S]: S[K] extends SlotType.SLOT ? ReactElement : ReactElement[];
};

/**
 * Extracts all slots from children and other remaining children
 * @param children
 */
export default function extractSlots<
    S extends Record<string, SlotType> = Record<string, SlotType.SLOT>,
>(slotsDef: S, children: ReactNode): [SlotsResult<S>, ReactNode] {
    let slots = Object.entries(slotsDef).reduce((acc, [key, value]) => {
        if (value === SlotType.ARRAY) return { ...acc, [key]: [] };
        return { ...acc, [key]: undefined };
    }, {} as SlotsResult<S>);
    let remainingChildren: ReactNode[] = [];
    Children.forEach(children, (child) => {
        if (isValidElement(child)) {
            const elementChild = child as ReactElement;
            const childType = elementChild.type;
            if ((childType as unknown as symbol) == Symbol.for("react.fragment")) {
                const [fragmentSlots, fragmentRemainingChildren] = extractSlots(
                    slotsDef,
                    child.props.children,
                );
                slots = { ...slots, ...fragmentSlots };
                remainingChildren = [...remainingChildren, fragmentRemainingChildren];
            } else if (
                (typeof childType === "function" || typeof childType === "object") &&
                "name" in childType &&
                slotsDef[childType.name]
            ) {
                if (slotsDef[childType.name] === SlotType.ARRAY) {
                    (slots[childType.name] as ReactElement[]).push(elementChild);
                } else (slots[childType.name] as ReactElement) = elementChild;
            } else remainingChildren.push(child);
        } else remainingChildren.push(child);
    });
    return [slots, remainingChildren];
}
