import { RadioButtonCoreStyle, RadioButtonProps } from "./RadioButton.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { RadioCheckedIcon, RadioUncheckedIcon } from "../../assets/icons";
import { Label, LabelStyle } from "../../display/Label";
import { FormControl } from "../FormControl";
import { IconButton } from "../IconButton";
import { useRadioButtonStyles } from "./hooks";

export default function RadioButton(rawProps: RadioButtonProps) {
    const props = useMergeDefaultProps("RadioButton", rawProps);

    const {
        defaultValue = false,
        icon = <RadioUncheckedIcon />,
        checkedIcon = <RadioCheckedIcon />,
        disabled = false,
        LabelProps = {},
        hideError = true,
        Label: LabelProp = Label,
        style: _style,
        ...rest
    } = props;

    const style = useRadioButtonStyles(props);

    return (
        <FormControl<boolean, LabelStyle, RadioButtonCoreStyle>
            Label={[LabelProp, { placement: "right", ...LabelProps }]}
            defaultValue={defaultValue}
            disabled={disabled}
            hideError={hideError}
            style={style}
            {...rest}
        >
            {(value, setValue, _, style) => {
                const { active: activeStyle, ...inactiveStyle } = style;
                return (
                    <IconButton
                        onPress={() => setValue(!value)}
                        style={{ ...inactiveStyle, ...(value && { ...activeStyle }) }}
                    >
                        {value ? checkedIcon : icon}
                    </IconButton>
                );
            }}
        </FormControl>
    );
}
