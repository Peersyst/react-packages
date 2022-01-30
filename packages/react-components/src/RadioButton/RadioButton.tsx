import { useFormNotification } from "../Form";
import { RadioButtonRoot } from "./RadioButton.styles";
import { RadioButtonProps } from "./RadioButton.types";
import { useControlled } from "@peersyst/react-hooks";
import { fsx, cx } from "@peersyst/react-utils";
import { RadioCheckedIcon, RadioUncheckedIcon } from "../assets/icons";

export default function RadioButton({
    name,
    value: propValue,
    onChange,
    className,
    style,
    defaultChecked = false,
    required,
    disabled = false,
    icon = <RadioUncheckedIcon />,
    checkedIcon = <RadioCheckedIcon />,
}: RadioButtonProps) {
    const [value, setValue] = useControlled(defaultChecked, propValue, onChange);
    useFormNotification(name, value, !required || (required && value));

    const styleProps = { checked: value, disabled };

    return (
        <RadioButtonRoot
            className={cx(className, "RadioButton", value && "Checked", disabled && "Disabled")}
            style={fsx(style, styleProps)}
            onClick={() => !disabled && setValue(!value)}
            role="radio"
            aria-checked={value}
            tabIndex={0}
            disabled={disabled}
            checked={value}
        >
            {value ? checkedIcon : icon}
        </RadioButtonRoot>
    );
}
