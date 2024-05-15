import { RadioButtonRoot } from "./RadioButton.styles";
import { RadioButtonProps } from "./RadioButton.types";
import { cx } from "@peersyst/react-utils";
import { RadioCheckedIcon, RadioUncheckedIcon } from "../assets/icons";
import { Label } from "../Label";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useRef } from "react";
import PointerFormControl from "../common/PointerFormControl";

export default function RadioButton(props: RadioButtonProps) {
    const {
        defaultValue = false,
        icon = <RadioUncheckedIcon />,
        checkedIcon = <RadioCheckedIcon />,
        disabled = false,
        LabelProps = {},
        hideError = true,
        Label: LabelProp = Label,
        ...rest
    } = useMergeDefaultProps("RadioButton", props);

    const radioButtonRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (radioButtonRef.current) radioButtonRef.current.click();
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
                <RadioButtonRoot
                    className={cx("RadioButton", value && "Checked", disabled && "Disabled")}
                    onClick={() => setValue(!value)}
                    role="radio"
                    aria-checked={value}
                    tabIndex={0}
                    ref={radioButtonRef}
                >
                    {value ? checkedIcon : icon}
                </RadioButtonRoot>
            )}
        </PointerFormControl>
    );
}
