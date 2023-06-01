import { FormControlProps, InnerFormControlProps } from "./FormControl.types";
import { LabelStyle } from "../../display/Label";
import { FormControlLabel } from "../FormControlLabel";
import { FormControlRoot } from "./FormControl.styles";
import {
    FormControl as CoreFormControl,
    useMergeDefaultProps,
    useFormControl,
} from "@peersyst/react-components-core";
import { FormControlHint } from "../FormControlHint";
import { FormControlError } from "../FormControlError";
import getFormControlledComponentStyles from "./util/getFormControlledComponentStyles";
import { ViewStyle } from "react-native";
import { useFormControlStyles } from "./hooks";

function InnerFormControl<T = any, LabelStyleType = LabelStyle, ComponentStyle = ViewStyle>(
    props: InnerFormControlProps<T, LabelStyleType, ComponentStyle>,
): JSX.Element {
    const {
        value,
        setValue,
        setFocused,
        defaultStyle = {},
        globalStyle = {},
        stylesMergeStrategy = getFormControlledComponentStyles,
        label,
        hint,
        Label = FormControlLabel,
        children,
        errorMsg,
        style: _style,
    } = props;

    const context = useFormControl();

    const {
        label: labelStyle = {},
        hint: hintStyle = {},
        error: errorStyle = {},
        component: componentStyle = {},
        ...rootStyle
    } = useFormControlStyles(props, context);

    const [LabelComponent, { style: LabelPropsStyle = {}, ...LabelProps }] = Array.isArray(Label)
        ? Label
        : [Label, {}];

    const content = children(
        value!,
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
            {!!errorMsg && <FormControlError error={errorMsg} style={errorStyle} />}
        </FormControlRoot>
    );
}

function FormControl<T = any, LabelStyleType = LabelStyle, ComponentStyle = ViewStyle>(
    rawProps: FormControlProps<T, LabelStyleType, ComponentStyle>,
): JSX.Element {
    const props = useMergeDefaultProps("FormControl", rawProps);

    const {
        defaultStyle: _defaultStyle,
        globalStyle: _globalStyle,
        stylesMergeStrategy: _stylesMergeStrategy,
        label: _label,
        hint: _hint,
        Label: _Label,
        children: _children,
        style: _style,
        ...coreProps
    } = props;

    return (
        <CoreFormControl<T> {...coreProps}>
            {(value, setValue, setFocused, error) => (
                <InnerFormControl
                    {...props}
                    value={value}
                    setValue={setValue}
                    setFocused={setFocused}
                    errorMsg={error}
                />
            )}
        </CoreFormControl>
    );
}

export default FormControl;
