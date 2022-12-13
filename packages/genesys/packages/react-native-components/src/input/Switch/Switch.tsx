import { SwitchProps, SwitchStyle } from "./Switch.types";
import switchStylesMergeStrategy from "./utils/switchStylesMergeStrategy";
import useDefaultSwitchStyles from "./hooks/useDefaultSwitchStyles";
import InnerSwitch from "./InnerSwitch";
import { Label, LabelStyle } from "../../display/Label";
import { useGlobalStyles, useMergeDefaultProps } from "../../config";
import { FormControl } from "../FormControl";

const Switch = (props: SwitchProps): JSX.Element => {
    const {
        defaultValue = false,
        disabled = false,
        readonly = false,
        LabelProps = {},
        hideError = true,
        Label: LabelProp = Label,
        animationConfig,
        children,
        style: styleProp,
        ...rest
    } = useMergeDefaultProps("Switch", props);

    // Styles
    const globalStyles = useGlobalStyles("Switch");
    const defaultStyles = useDefaultSwitchStyles();

    return (
        <FormControl<boolean, LabelStyle, SwitchStyle>
            Label={[LabelProp, { placement: "left", ...LabelProps }]}
            defaultValue={defaultValue}
            disabled={disabled}
            hideError={hideError}
            stylesMergeStrategy={switchStylesMergeStrategy}
            defaultStyle={defaultStyles}
            globalStyle={globalStyles}
            style={styleProp}
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
