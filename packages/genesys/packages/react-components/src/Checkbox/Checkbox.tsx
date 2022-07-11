import { CheckboxRoot } from "./Checkbox.styles";
import { cx } from "@peersyst/react-utils";
import { CheckedBoxIcon, UncheckedBoxIcon } from "../assets/icons";
import { FormControl } from "../FormControl";
import { Label } from "../Label";
import { CheckboxProps } from "./Checkbox.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

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

    return (
        <FormControl<boolean>
            Label={[LabelProp, { placement: "right", ...LabelProps }]}
            defaultValue={defaultValue}
            disabled={disabled}
            hideError={hideError}
            {...rest}
        >
            {(value, setValue) => (
                <CheckboxRoot
                    className={cx("Checkbox", value && "Checked", disabled && "Disabled")}
                    onClick={() => setValue(!value)}
                    role="checkbox"
                    aria-checked={value}
                    tabIndex={0}
                >
                    {value ? checkedIcon : icon}
                </CheckboxRoot>
            )}
        </FormControl>
    );
}