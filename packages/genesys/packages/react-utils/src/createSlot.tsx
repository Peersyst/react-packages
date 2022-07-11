import {
    ComponentType,
    JSXElementConstructor,
    PropsWithChildren,
    ReactElement,
    ValidationMap,
    WeakValidationMap,
} from "react";

export type SlotElement<
    S extends string = string,
    P = any,
    T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
> = ReactElement<P, T> & { slot: S };

export interface Slot<S extends string = string, P = any> {
    (props: PropsWithChildren<P>, context?: any): SlotElement<S, any, any> | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
}

export default function <
    S extends string = string,
    P = PropsWithChildren<never>,
    T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>,
>(slot: S, Component: ComponentType<P> = ({ children }) => <>{children}</>): Slot<S, P> {
    return (props: P) => {
        const element = (<Component {...props} />) as SlotElement<S, P, T>;
        element.slot = slot;
        return element;
    };
}
