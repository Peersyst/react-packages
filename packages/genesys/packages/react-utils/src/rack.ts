import { JSXElementConstructor, ReactNode } from "react";
import extractSlots from "./extractSlots";
import createSlot from "./createSlot";

export type Slots<S extends string[], E extends object> = {
    [K in Exclude<S[number], keyof E>]: JSXElementConstructor<{ children: ReactNode }>;
} & {
    [K in keyof E]: E[K];
};

/**
 * Utility that creates racks and its slots.
 * IMPORTANT: Recursive racks are supported.
 *   However, internal racks have to be extracted as a Component, as doing Rack.InternalRack.Slot doesn't work.
 *   The solution is to have a const InternalRack = rack(..., ["Slot"]) and const Rack = rack(..., [InternalRack], { InternalRack })
 *
 * @param factory
 * @param slots
 * @param extensions
 */
export default function <
    P extends { children: ReactNode },
    S extends string[],
    K extends S[number],
    E extends Partial<Record<K, JSXElementConstructor<any>>>,
    RE extends {
        //@ts-ignore
        [x: K]: JSXElementConstructor<any>;
    },
>(
    factory: (props: P, slots: Slots<K[], RE>) => JSX.Element,
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
    for (const [name, element] of Object.entries(extensions)) {
        //console.log(name, element);
        Object.defineProperty(Rack, name, {
            value: createSlot(name, element as JSXElementConstructor<any>),
            writable: false,
        });
    }
    for (const slot of slots) {
        if (!Rack[slot as keyof typeof Rack])
            Object.defineProperty(Rack, slot, { value: createSlot(slot), writable: false });
    }
    return Rack;
}
