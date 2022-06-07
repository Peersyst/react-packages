import { Slot } from "@peersyst/react-types";
import { ComponentType } from "react";

export default function <P = any, S extends string = string>(
    Component: ComponentType<P>,
    slot: S,
): Slot<P, S> {
    const SlotComponent = Component as Slot<P, S>;
    SlotComponent.slot = slot;
    return SlotComponent;
}
