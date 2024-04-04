import {
    ForwardRefExoticComponent,
    ForwardedRef,
    JSXElementConstructor,
    PropsWithoutRef,
    ReactNode,
    RefAttributes,
    forwardRef,
} from "react";
import extractSlots from "./extractSlots";
import createSlot from "./createSlot";

//eslint-disable-next-line @typescript-eslint/ban-types
export type Slots<S extends string[], E extends object> = {
    [K in Exclude<S[number], keyof E>]: JSXElementConstructor<{ children: ReactNode }>;
} & {
    [K in keyof E]: E[K];
};

//eslint-disable-next-line @typescript-eslint/ban-types
export type SlotElements<S extends string[]> = {
    [K in S[number]]: JSX.Element;
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
    E extends {
        //@ts-ignore
        [x: K]: JSXElementConstructor<any>;
    },
    T,
>(
    factory: (props: P, slots: SlotElements<K[]>, ref: ForwardedRef<T>) => JSX.Element,
    slots: K[],
    // @ts-ignore
    extensions: E = {},
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> & Slots<K[], E> {
    const RackComponent = forwardRef<T, P>(function RackComponent(
        { children, ...rest }: P,
        ref,
    ): JSX.Element {
        const [slots, remainingChildren] = extractSlots(children);

        // @ts-ignore
        return factory({ children: remainingChildren, ...rest }, slots, ref);
    });

    const Rack = RackComponent as ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> &
        Slots<K[], E>;
    Object.defineProperty(Rack, "name", { value: factory.name, writable: true, enumerable: true });

    for (const [name, element] of Object.entries(extensions)) {
        Object.defineProperty(Rack, name, {
            value: createSlot(name, element as JSXElementConstructor<any>),
            writable: false,
            enumerable: true,
        });
    }
    for (const slot of slots) {
        if (!Rack[slot as keyof typeof Rack])
            Object.defineProperty(Rack, slot, {
                value: createSlot(slot),
                writable: false,
                enumerable: true,
            });
    }

    return Rack;
}
