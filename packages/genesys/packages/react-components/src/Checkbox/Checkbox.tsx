import { CheckboxRoot } from "./Checkbox.styles";
import { cx } from "@peersyst/react-utils";
import { CheckedBoxIcon, UncheckedBoxIcon } from "../assets/icons";
import { Label } from "../Label";
import { CheckboxProps } from "./Checkbox.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useRef } from "react";
import PointerFormControl from "../common/PointerFormControl";

export default function Checkbox(props: CheckboxProps) {
    const {
        defaultValue = false,
        icon = <UncheckedBoxIcon />,
        checkedIcon = <CheckedBoxIcon />,
        disabled = false,
        LabelProps = {},
        hideError = true,
        Label: LabelProp = Label,
        ...rest
    } = useMergeDefaultProps("Checkbox", props);

    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (checkboxRef.current) checkboxRef.current.click();
    };

    return (
        <PointerFormControl<boolean>
            Label={[LabelProp, { placement: "right", ...LabelProps }]}
            defaultValue={defaultValue}
            disabled={disabled}
            hideError={hideError}
            onClick={handleClick}
            {...rest}
        >
            {(value, setValue) => (
                <CheckboxRoot
                    className={cx("Checkbox", value && "Checked", disabled && "Disabled")}
                    onClick={() => setValue(!value)}
                    role="checkbox"
                    aria-checked={value}
                    tabIndex={0}
                    ref={checkboxRef}
                >
                    {value ? checkedIcon : icon}
                </CheckboxRoot>
            )}
        </PointerFormControl>
    );
}
