import { FormControlProps } from "./FormControl.types";
import { LabelStyle } from "../../display/Label";
import { FormControlLabel } from "../FormControlLabel";
import { FormControlRoot } from "./FormControl.styles";
import {
    FormControlContext,
    FormControl as CoreFormControl,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { FormControlHint } from "../FormControlHint";
import { FormControlError } from "../FormControlError";
import getFormControlledComponentStyles from "./util/getFormControlledComponentStyles";
import { ViewStyle } from "react-native";
import { useFormControlStyles } from "./hooks";

function FormControl<T = any, LabelStyleType = LabelStyle, ComponentStyle = ViewStyle>(
    rawProps: FormControlProps<T, LabelStyleType, ComponentStyle>,
): JSX.Element {
    const props = useMergeDefaultProps("FormControl", rawProps);

    const {
        defaultStyle = {},
        globalStyle = {},
        stylesMergeStrategy = getFormControlledComponentStyles,
        label,
        hint,
        Label = FormControlLabel,
        children,
        style: _style,
        ...coreProps
    } = props;

    const {
        label: labelStyle = {},
        hint: hintStyle = {},
        error: errorStyle = {},
        component: componentStyle = {},
        ...rootStyle
    } = useFormControlStyles(props);

    const [LabelComponent, { style: LabelPropsStyle = {}, ...LabelProps }] = Array.isArray(Label)
        ? Label
        : [Label, {}];

    return (
        <CoreFormControl<T> {...coreProps}>
            {(value, setValue, setFocused, error) => (
                <FormControlContext.Consumer>
                    {(context) => {
                        const content = children(
                            value,
                            setValue,
                            context,
                            stylesMergeStrategy(defaultStyle, globalStyle, componentStyle, context),
                            setFocused,
                        );

                        return (
                            <FormControlRoot gap={5} style={rootStyle}>
                                {label ? (
                                    <LabelComponent
                                        label={label}
                                        style={{ ...labelStyle, ...LabelPropsStyle }}
                                        {...LabelProps}
                                    >
                                        {content}
                                    </LabelComponent>
                                ) : (
                                    content
                                )}
                                {!!hint && <FormControlHint hint={hint} style={hintStyle} />}
                                {!!error && <FormControlError error={error} style={errorStyle} />}
                            </FormControlRoot>
                        );
                    }}
                </FormControlContext.Consumer>
            )}
        </CoreFormControl>
    );
}

export default FormControl;
