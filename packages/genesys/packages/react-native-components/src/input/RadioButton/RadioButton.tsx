import { RadioButtonCoreStyle, RadioButtonProps } from "./RadioButton.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { RadioCheckedIcon, RadioUncheckedIcon } from "../../assets/icons";
import { FormControl, IconButton, Label, useGlobalStyles } from "@peersyst/react-native-components";
import useDefaultRadioButtonStyles from "./hooks/useDefaultRadioButtonStyles";
import radioButtonStylesMergeStrategy from "./utils/radioButtonStylesMergeStrategy";
import { LabelStyle } from "src/display/Label";

export default function RadioButton(props: RadioButtonProps) {
    const {
        defaultValue = false,
        icon = <RadioUncheckedIcon />,
        checkedIcon = <RadioCheckedIcon />,
        disabled = false,
        LabelProps = {},
        hideError = true,
        Label: LabelProp = Label,
        style: styleProp,
        ...rest
    } = useMergeDefaultProps("RadioButton", props);

    // Styles
    const globalStyles = useGlobalStyles("RadioButton");
    const defaultStyles = useDefaultRadioButtonStyles();

    return (
        <FormControl<boolean, LabelStyle, RadioButtonCoreStyle>
            Label={[LabelProp, { placement: "right", ...LabelProps }]}
            defaultValue={defaultValue}
            disabled={disabled}
            globalStyle={globalStyles}
            defaultStyle={defaultStyles}
            stylesMergeStrategy={radioButtonStylesMergeStrategy}
            hideError={hideError}
            style={styleProp}
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
