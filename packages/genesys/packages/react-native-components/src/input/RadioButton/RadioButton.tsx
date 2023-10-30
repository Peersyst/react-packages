import { RadioButtonCoreStyle, RadioButtonProps } from "./RadioButton.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { RadioCheckedIcon, RadioUncheckedIcon } from "../../assets/icons";
import { Label, LabelStyle } from "../../display/Label";
import { FormControl } from "../FormControl";
import { IconButton } from "../IconButton";
import { useRadioButtonStyles } from "./hooks";
import { useControlled } from "@peersyst/react-hooks";
import { Pressable } from "react-native";

export default function RadioButton(rawProps: RadioButtonProps) {
    const props = useMergeDefaultProps("RadioButton", rawProps);

    const {
        value: valueProp,
        onChange,
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

    const [value, setValue] = useControlled(defaultValue, valueProp, onChange);

    const handlePress = () => {
        if (disabled) return;
        setValue(!value);
    }

    return (
        <Pressable onPress={handlePress}>
            <FormControl<boolean, LabelStyle, RadioButtonCoreStyle>
                Label={[LabelProp, { placement: "right", ...LabelProps }]}
                defaultValue={defaultValue}
                disabled={disabled}
                hideError={hideError}
                style={style}
                value={value}
                onChange={setValue}
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
        </Pressable>
    );
}
