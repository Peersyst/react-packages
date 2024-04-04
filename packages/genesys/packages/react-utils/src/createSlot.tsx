import { Fragment, JSXElementConstructor, PropsWithChildren, ReactNode } from "react";

export default function <
    S extends string = string,
    P extends PropsWithChildren = { children: ReactNode },
>(
    slot: S,
    Component: JSXElementConstructor<P> = (p: P) => <Fragment {...p} />,
): JSXElementConstructor<P> {
    const Slot: JSXElementConstructor<P> = (props: P) => <Component {...props} />;
    Object.entries(Component).forEach(([key, value]) => {
        if (key !== "name")
            Object.defineProperty(Slot, key, { value, writable: false, enumerable: true });
    });
    Object.defineProperty(Slot, "name", { value: slot, writable: true, enumerable: true });
    return Slot;
}
