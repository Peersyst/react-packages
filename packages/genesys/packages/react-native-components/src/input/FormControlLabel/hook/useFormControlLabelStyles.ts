import { FormControlLabelProps, FormControlLabelStyle } from "../FormControlLabel.types";
import { FormControlContextType } from "@peersyst/react-components-core";
import { useComputeStyles } from "../../../hooks";
import { makeStyleComputation } from "../../../utils";

export default function (
    props: FormControlLabelProps,
    { required, invalid, disabled, readonly, focused, valid }: FormControlContextType,
): FormControlLabelStyle {
    const compute = makeStyleComputation<FormControlLabelProps>(
        function (stylesheet) {
            const {
                required: { label: requiredLabelStyle, ...requiredStyle } = {},
                invalid: { label: invalidLabelStyle, ...invalidStyle } = {},
                disabled: { label: disabledLabelStyle, ...disabledStyle } = {},
                readonly: { label: readonlyLabelStyle, ...readonlyStyle } = {},
                focused: { label: focusedLabelStyle, ...focusedStyle } = {},
                valid: { label: validLabelStyle, ...validStyle } = {},
                label: labelStyle,
                ...style
            } = stylesheet;

            return {
                label: {
                    ...labelStyle,
                    ...(required && requiredLabelStyle),
                    ...(focused && focusedLabelStyle),
                    ...(readonly && readonlyLabelStyle),
                    ...(invalid && invalidLabelStyle),
                    ...(valid && validLabelStyle),
                    ...(disabled && disabledLabelStyle),
                },
                ...style,
                ...(required && requiredStyle),
                ...(focused && focusedStyle),
                ...(readonly && readonlyStyle),
                ...(invalid && invalidStyle),
                ...(valid && validStyle),
                ...(disabled && disabledStyle),
            };
        },
        [required, invalid, disabled, readonly, focused, valid],
    );

    return useComputeStyles("FormControlLabel", props, undefined, {
        compute,
    });
}
