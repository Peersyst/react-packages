import { ComponentPropsWithRef, ElementType, EventHandler } from "react";
import { DistributiveOmit } from "@peersyst/react-types";

export type EventHandlers = Record<string, EventHandler<any>>;

/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
    <C extends ElementType>(
        props: {
            /**
             * The component used for the root node.
             * Either a string to use a HTML element or a component.
             */
            component: C;
        } & OverrideProps<M, C>,
    ): JSX.Element;
    (props: DefaultComponentProps<M>): JSX.Element;
    propTypes?: any;
}

/**
 * Props of the component if `component={Component}` is used.
 */
// prettier-ignore
export type OverrideProps<
    M extends OverridableTypeMap,
    C extends ElementType
    > = (
    & BaseProps<M>
    & DistributiveOmit<ComponentPropsWithRef<C>, keyof BaseProps<M>>
    );

/**
 * Props if `component={Component}` is NOT used.
 */
// prettier-ignore
export type DefaultComponentProps<M extends OverridableTypeMap> =
    & BaseProps<M>
    & DistributiveOmit<ComponentPropsWithRef<M['defaultComponent']>, keyof BaseProps<M>>;

/**
 * Props defined on the component.
 */
// prettier-ignore
export type BaseProps<M extends OverridableTypeMap> = M['props'];

export interface OverridableTypeMap {
    props: {};
    defaultComponent: ElementType;
}

export type SlotComponentProps<TSlotComponent extends ElementType, TOverrides, TOwnerState> =
    | (Partial<ComponentPropsWithRef<TSlotComponent>> & TOverrides)
    | ((ownerState: TOwnerState) => Partial<ComponentPropsWithRef<TSlotComponent>> & TOverrides);

/**
 * Simplifies the display of a type (without modifying it).
 * Taken from https://effectivetypescript.com/2022/02/25/gentips-4-display/
 */
// tslint:disable-next-line: ban-types
export type Simplify<T> = T extends Function ? T : { [K in keyof T]: T[K] };
