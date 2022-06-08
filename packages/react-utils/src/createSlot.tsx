import { Slot } from "@peersyst/react-types";
import { ComponentType, PropsWithChildren } from "react";

export default function <P = PropsWithChildren<{}>, S extends string = string>(
    slot: S,
    Component: ComponentType<P> = ({ children }) => <>{children}</>,
): Slot<P, S> {
    const SlotComponent = Component as Slot<P, S>;
    SlotComponent.slot = slot;
    return SlotComponent;
}
