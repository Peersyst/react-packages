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
import { useGlobalStyles } from "../../config";

function FormControl<T = any, LabelStyleType = LabelStyle, ComponentStyle = ViewStyle>(
    props: FormControlProps<T, LabelStyleType, ComponentStyle>,
): JSX.Element {
    const {
        defaultStyle = {},
        globalStyle = {},
        style: {
            label: labelStyle = {},
            hint: hintStyle = {},
            error: errorStyle = {},
            // @ts-ignore
            component: componentStyle = {},
            ...rootStyleProp
        } = {},
        stylesMergeStrategy = getFormControlledComponentStyles,
        label,
        hint,
        Label = FormControlLabel,
        children,
        ...coreProps
    } = useMergeDefaultProps("FormControl", props);

    const globalRootStyle = useGlobalStyles("FormControl");
    const rootStyle = { ...globalRootStyle, ...rootStyleProp };

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
                            // @ts-ignore
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
                                {hint && <FormControlHint hint={hint} style={hintStyle} />}
                                {error && <FormControlError error={error} style={errorStyle} />}
                            </FormControlRoot>
                        );
                    }}
                </FormControlContext.Consumer>
            )}
        </CoreFormControl>
    );
}

export default FormControl;
