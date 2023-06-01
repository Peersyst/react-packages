import { ViewStyle } from "react-native";
import { FormControlProps, FormControlStyle } from "../FormControl.types";
import { LabelStyle } from "../../../display/Label";
import { useComputeStyles } from "../../../hooks";
import { makeStyleComputation } from "../../../utils";
import { FormControlContextType } from "@peersyst/react-components-core";
import { deepmerge } from "@peersyst/react-utils";

export default function useFormControlStyles<
    T = any,
    LabelStyleType = LabelStyle,
    ComponentStyleType = ViewStyle,
>(
    props: FormControlProps<T, LabelStyleType, ComponentStyleType>,
    { required, focused, readonly, invalid, valid, disabled }: FormControlContextType,
): FormControlStyle<LabelStyleType, ComponentStyleType> {
    const compute = makeStyleComputation<FormControlProps<T, LabelStyleType, ComponentStyleType>>(
        function (stylesheet) {
            const {
                component: {
                    required: requiredStyle,
                    focused: focusedStyle,
                    readonly: readonlyStyle,
                    invalid: invalidStyle,
                    valid: validStyle,
                    disabled: disabledStyle,
                    ...restComponentStyle
                } = {} as any,
                ...styles
            } = stylesheet;

            let componentStyle = { ...restComponentStyle };

            if (required && requiredStyle)
                componentStyle = deepmerge(componentStyle, requiredStyle);
            if (focused && focusedStyle) componentStyle = deepmerge(componentStyle, focusedStyle);
            if (readonly && readonlyStyle)
                componentStyle = deepmerge(componentStyle, readonlyStyle);
            if (invalid && invalidStyle) componentStyle = deepmerge(componentStyle, invalidStyle);
            if (valid && validStyle) componentStyle = deepmerge(componentStyle, validStyle);
            if (disabled && disabledStyle)
                componentStyle = deepmerge(componentStyle, disabledStyle);

            return {
                component: componentStyle,
                ...styles,
            };
        },
        [required, focused, readonly, invalid, valid, disabled],
    );

    return useComputeStyles("FormControl", props, undefined, { compute });
}
