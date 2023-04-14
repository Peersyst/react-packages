import { SwitchProps, SwitchStyle } from "./Switch.types";
import InnerSwitch from "./InnerSwitch";
import { Label, LabelStyle } from "../../display/Label";
import { useMergeDefaultProps } from "../../config";
import { FormControl } from "../FormControl";
import { useSwitchStyles } from "./hooks";

const Switch = (rawProps: SwitchProps): JSX.Element => {
    const props = useMergeDefaultProps("Switch", rawProps);

    const {
        defaultValue = false,
        disabled = false,
        readonly = false,
        LabelProps = {},
        hideError = true,
        Label: LabelProp = Label,
        animationConfig,
        children,
        style: _style,
        ...rest
    } = props;

    const style = useSwitchStyles(props);

    return (
        <FormControl<boolean, LabelStyle, SwitchStyle>
            Label={[LabelProp, { placement: "left", ...LabelProps }]}
            defaultValue={defaultValue}
            disabled={disabled}
            hideError={hideError}
            style={style}
            readonly={readonly}
            {...rest}
        >
            {(value, setValue, _, style) => (
                <InnerSwitch
                    value={value}
                    setValue={setValue}
                    style={style}
                    animationConfig={animationConfig}
                >
                    {children}
                </InnerSwitch>
            )}
        </FormControl>
    );
};

export default Switch;
