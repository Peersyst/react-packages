import { Fragment, JSXElementConstructor, PropsWithChildren, ReactNode } from "react";

export default function <
    S extends string = string,
    P extends PropsWithChildren = { children: ReactNode },
>(
    slot: S,
    Component: JSXElementConstructor<P> = (p: P) => <Fragment {...p} />,
): JSXElementConstructor<P> {
    const Slot: JSXElementConstructor<P> = (props: P) => <Component {...props} />;
    Object.defineProperty(Slot, "name", { value: slot, writable: false });
    return Slot;
}
