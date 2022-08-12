// From @mui/mui-base
import { Simplify } from "../required.types";
import { ComponentType, ElementType as ReactElementType } from "react";
import isHostComponent from "./isHostComponent";

/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */
type OwnerStateWhenApplicable<
    ElementType extends ReactElementType,
    OwnerState,
> = ElementType extends ComponentType<any>
    ? OwnerState
    : ElementType extends keyof JSX.IntrinsicElements
    ? undefined
    : OwnerState | undefined;

export type AppendOwnerStateReturnType<
    ElementType extends ReactElementType,
    OtherProps,
    OwnerState,
> = Simplify<
    OtherProps & {
        ownerState: OwnerStateWhenApplicable<ElementType, OwnerState>;
    }
>;

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
export default function appendOwnerState<
    ElementType extends ReactElementType,
    OtherProps extends Record<string, any>,
    OwnerState,
>(
    elementType: ElementType,
    otherProps: OtherProps = {} as OtherProps,
    ownerState: OwnerState,
): AppendOwnerStateReturnType<ElementType, OtherProps, OwnerState> {
    if (isHostComponent(elementType)) {
        return otherProps as AppendOwnerStateReturnType<ElementType, OtherProps, OwnerState>;
    }

    return {
        ...otherProps,
        ownerState: { ...otherProps.ownerState, ...ownerState },
    } as AppendOwnerStateReturnType<ElementType, OtherProps, OwnerState>;
}
