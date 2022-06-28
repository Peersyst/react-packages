import { RadioButtonRoot } from "./RadioButton.styles";
import { RadioButtonProps } from "./RadioButton.types";
import { cx } from "@peersyst/react-utils";
import { RadioCheckedIcon, RadioUncheckedIcon } from "../assets/icons";
import { Label } from "../Label";
import { FormControl } from "../FormControl";

export default function RadioButton({
    defaultValue = false,
    icon = <RadioUncheckedIcon />,
    checkedIcon = <RadioCheckedIcon />,
    disabled = false,
    LabelProps = {},
    hideError = true,
    Label: LabelProp = Label,
    ...rest
}: RadioButtonProps) {
    return (
        <FormControl<boolean>
            Label={[LabelProp, { placement: "right", ...LabelProps }]}
            defaultValue={defaultValue}
            disabled={disabled}
            hideError={hideError}
            {...rest}
        >
            {(value, setValue) => (
                <RadioButtonRoot
                    className={cx("RadioButton", value && "Checked", disabled && "Disabled")}
                    onClick={() => setValue(!value)}
                    role="radio"
                    aria-checked={value}
                    tabIndex={0}
                >
                    {value ? checkedIcon : icon}
                </RadioButtonRoot>
            )}
        </FormControl>
    );
}
