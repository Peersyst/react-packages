import { JSXElementConstructor, ReactNode } from "react";
import extractSlots from "./extractSlots";
import createSlot from "./createSlot";

export type Slots<S extends string[], E extends object> = {
    [K in Exclude<S[number], keyof E>]: JSXElementConstructor<{ children: ReactNode }>;
} & {
    [K in keyof E]: E[K] extends JSXElementConstructor<infer P>
        ? JSXElementConstructor<P>
        : JSXElementConstructor<any>;
};

export default function rack<
    P extends { children: ReactNode },
    S extends string[],
    K extends S[number],
    E extends Partial<Record<K, JSXElementConstructor<any>>>,
>(
    factory: (props: P, slots: Slots<K[], E>) => JSX.Element,
    slots: K[],
    //@ts-ignore
    extensions: E = {},
): JSXElementConstructor<P> & Slots<K[], E> {
    const RackComponent = ({ children, ...rest }: P): JSX.Element => {
        const [slots, remainingChildren] = extractSlots(children);

        // @ts-ignore
        return factory({ children: remainingChildren, ...rest }, slots);
    };
    const Rack = RackComponent as JSXElementConstructor<P> & Slots<K[], E>;
    for (const [name, element] of Object.entries(extensions))
        Object.defineProperty(Rack, name, { value: element, writable: false });
    for (const slot of slots) {
        if (!Rack[slot as keyof typeof Rack])
            Object.defineProperty(Rack, slot, { value: createSlot(slot), writable: false });
    }
    return Rack;
}
