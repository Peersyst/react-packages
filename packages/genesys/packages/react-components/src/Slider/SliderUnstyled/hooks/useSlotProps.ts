// From @mui/mui-base
import { ElementType as ReactElementType } from "react";
import mergeSlotProps, {
    MergeSlotPropsParameters,
    MergeSlotPropsResult,
    WithCommonProps,
} from "../utils/mergeSlotProps";
import resolveComponentProps from "../utils/resolveComponentProps";
import appendOwnerState, { AppendOwnerStateReturnType } from "../utils/appendOwnerState";
import { useForkRef } from "@peersyst/react-hooks";

export type UseSlotPropsParameters<
    ElementType extends ReactElementType,
    SlotProps,
    ExternalForwardedProps,
    ExternalSlotProps,
    AdditionalProps,
    OwnerState,
> = Omit<
    MergeSlotPropsParameters<SlotProps, ExternalForwardedProps, ExternalSlotProps, AdditionalProps>,
    "externalSlotProps"
> & {
    /**
     * The type of the component used in the slot.
     */
    elementType: ElementType;
    /**
     * The `componentsProps.*` of the unstyled component.
     */
    externalSlotProps:
        | ExternalSlotProps
        | ((ownerState: OwnerState) => ExternalSlotProps)
        | undefined;
    /**
     * The ownerState of the unstyled component.
     */
    ownerState: OwnerState;
};

export type UseSlotPropsResult<
    ElementType extends ReactElementType,
    SlotProps,
    AdditionalProps,
    OwnerState,
> = AppendOwnerStateReturnType<
    ElementType,
    MergeSlotPropsResult<SlotProps, object, object, AdditionalProps>["props"] & {
        ref: ((instance: any | null) => void) | null;
    },
    OwnerState
>;

/**
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
export default function useSlotProps<
    ElementType extends ReactElementType,
    SlotProps,
    AdditionalProps,
    OwnerState,
>(
    parameters: UseSlotPropsParameters<
        ElementType,
        SlotProps,
        object,
        WithCommonProps<Record<string, any>>,
        AdditionalProps,
        OwnerState
    >,
) {
    const { elementType, externalSlotProps, ownerState, ...rest } = parameters;
    const resolvedComponentsProps = resolveComponentProps(externalSlotProps, ownerState);
    const { props: mergedProps, internalRef } = mergeSlotProps({
        ...rest,
        externalSlotProps: resolvedComponentsProps,
    });

    const ref = useForkRef(
        internalRef,
        useForkRef(resolvedComponentsProps?.ref, parameters.additionalProps?.ref),
    ) as ((instance: any | null) => void) | null;

    const props: UseSlotPropsResult<ElementType, SlotProps, AdditionalProps, OwnerState> =
        appendOwnerState(
            elementType,
            {
                ...mergedProps,
                ref,
            },
            ownerState,
        );

    return props;
}
