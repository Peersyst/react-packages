import { useFormNotification } from "../Form";
import { CheckboxRoot } from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";
import { useControlled } from "../hooks";
import { fsx } from "../utils/fsx";
import { CheckedBoxIcon, UncheckedBoxIcon } from "../assets/icons";
import { cx } from "../utils/cx";

export function Checkbox({
    name,
    defaultChecked = false,
    value: propsValue,
    onChange,
    icon = <UncheckedBoxIcon />,
    checkedIcon = <CheckedBoxIcon />,
    className,
    style,
    required,
    disabled = false,
}: CheckboxProps) {
    const [value, setValue] = useControlled(defaultChecked, propsValue, onChange);
    useFormNotification(name, value, !required || (required && value));

    const styleProps = { checked: value, disabled };

    return (
        <CheckboxRoot
            className={cx("Checkbox", className, value && "Checked", disabled && "Disabled")}
            style={fsx(style, styleProps)}
            onClick={() => !disabled && setValue(!value)}
            disabled={disabled}
            checked={value}
            role="checkbox"
            aria-checked={value}
            tabIndex={0}
        >
            {value ? checkedIcon : icon}
        </CheckboxRoot>
    );
}
