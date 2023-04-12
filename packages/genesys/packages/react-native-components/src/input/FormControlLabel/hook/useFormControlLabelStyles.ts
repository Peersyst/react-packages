import { FormControlLabelProps } from "../FormControlLabel.types";
import { FormControlContextType } from "@peersyst/react-components-core";
import { LabelStyle } from "../../../display/Label";
import { useGlobalStyles } from "../../../config";
import {
    useMergeStylesheets,
    useResolveStylesheet,
    useStylesheet,
} from "@peersyst/react-native-styled";
import { useMemo } from "react";

export default function (
    props: FormControlLabelProps,
    { required, invalid, disabled, readonly, focused, valid }: FormControlContextType,
): LabelStyle {
    const { style } = props;

    const defaultStyles = useGlobalStyles("FormControlLabel");
    const stylesheet = useStylesheet<FormControlLabelProps>("FormControlLabel");

    const mergedStylesheet = useMergeStylesheets<FormControlLabelProps>(
        stylesheet,
        defaultStyles,
        style,
    );

    const labelStyles = useMemo(() => {
        const {
            required: { label: requiredLabelStyle, ...requiredStyle } = {},
            invalid: { label: invalidLabelStyle, ...invalidStyle } = {},
            disabled: { label: disabledLabelStyle, ...disabledStyle } = {},
            readonly: { label: readonlyLabelStyle, ...readonlyStyle } = {},
            focused: { label: focusedLabelStyle, ...focusedStyle } = {},
            valid: { label: validLabelStyle, ...validStyle } = {},
            label: labelStyle,
            ...style
        } = mergedStylesheet;

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
    }, [mergedStylesheet]);

    return useResolveStylesheet(props, labelStyles);
}
