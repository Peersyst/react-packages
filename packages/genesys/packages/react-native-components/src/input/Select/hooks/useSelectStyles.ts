import { SelectProps } from "../Select.types";
import { useComputeStyles } from "../../../hooks";
import { makeStyleComputation } from "../../../utils";

export default function useSelectStyles<T = any, Multiple extends boolean = false>(
    props: SelectProps<T, Multiple>,
    disabled: boolean,
    readonly: boolean,
): SelectProps<T, Multiple>["style"] {
    const compute = makeStyleComputation<SelectProps<T, Multiple>>(
        function (stylesheet) {
            const {
                component: {
                    display: {
                        disabled: disabledDisplayStyles = {},
                        readonly: readonlyDisplayStyles = {},
                        ...displayStyles
                    } = {},
                    ...restComponentStyles
                } = {},
                ...restStyles
            } = stylesheet;

            return {
                component: {
                    display: {
                        ...(readonly && { ...readonlyDisplayStyles }),
                        ...(disabled && { ...disabledDisplayStyles }),
                        ...displayStyles,
                    },
                    ...restComponentStyles,
                },
                ...restStyles,
            };
        },

        [disabled, readonly],
    );

    return useComputeStyles("Select", props, undefined, { bypass: true, compute });
}
