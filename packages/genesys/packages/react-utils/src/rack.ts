import {
    ForwardRefExoticComponent,
    ForwardedRef,
    ComponentType,
    PropsWithoutRef,
    ReactNode,
    RefAttributes,
    forwardRef,
} from "react";
import extractSlots, { SlotsResult, SlotType } from "./extractSlots";
import createSlot from "./createSlot";

export type SlotParams<
    T extends SlotType = SlotType,
    C extends ComponentType<any> = ComponentType<any>,
> = {
    component: C;
    type: T;
};

export type SlotsOptions = Record<string, ComponentType<any> | SlotParams>;

export type Slots<S extends SlotsOptions> = {
    [K in keyof S]: S[K] extends SlotParams ? S[K]["component"] : S[K];
};

export type PickSlotsType<S extends SlotsOptions> = {
    [K in keyof S]: S[K] extends SlotParams<infer T> ? T : SlotType.SLOT;
};

export type RackSlots<S extends SlotsOptions> = SlotsResult<PickSlotsType<S>>;

export function Slot<C extends ComponentType<any>>(component: C): SlotParams<SlotType.SLOT, C> {
    return { component, type: SlotType.SLOT };
}

export function ArraySlot<C extends ComponentType<any>>(
    component: C,
): SlotParams<SlotType.ARRAY, C> {
    return { component, type: SlotType.ARRAY };
}

/**
 * Utility that creates racks and its slots.
 *
 * @param factory
 * @param slots
 * @param extensions
 */
export default function rack<S extends SlotsOptions, P extends { children?: ReactNode }, T>(
    slotsOptions: S,
    factory: (props: P, slots: RackSlots<S>, ref: ForwardedRef<T>) => JSX.Element,
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> & Slots<S> {
    const slots = Object.entries(slotsOptions).reduce(
        (acc, [key, value]) => [
            ...acc,
            [key, typeof value === "object" && "component" in value ? value : Slot(value)] as [
                key: keyof S,
                params: SlotParams,
            ],
        ],
        [] as [key: keyof S, params: SlotParams][],
    );

    const slotsDef = slots.reduce(
        (acc, [key, { type }]) => ({
            ...acc,
            [key]: type,
        }),
        {} as PickSlotsType<S>,
    );

    const RackComponent = forwardRef<T, P>(function RackComponent(
        { children, ...rest }: P,
        ref,
    ): JSX.Element {
        const [slots, remainingChildren] = extractSlots(slotsDef, children);

        // @ts-ignore
        return factory({ children: remainingChildren, ...rest }, slots, ref);
    });

    const Rack = RackComponent as ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> &
        Slots<S>;
    Object.defineProperty(Rack, "name", { value: factory.name, writable: true, enumerable: true });

    for (const [slot, { component }] of slots) {
        Object.defineProperty(Rack, slot, {
            value: createSlot(slot as string, component),
            writable: false,
            enumerable: true,
        });
    }

    return Rack;
}
