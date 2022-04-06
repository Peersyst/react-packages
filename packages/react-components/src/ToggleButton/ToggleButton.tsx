import { ToggleButtonRoot } from "./ToggleButton.styles";
import { ToggleButtonProps } from "./ToggleButton.types";
import { useControlled } from "@peersyst/react-hooks";
import { cx } from "@peersyst/react-utils";

const ToggleButton = ({
    defaultSelected = false,
    selected: selectedProp,
    onChange,
    className,
    ...buttonProps
}: ToggleButtonProps): JSX.Element => {
    const [selected, setSelected] = useControlled(defaultSelected, selectedProp, onChange);

    return (
        <ToggleButtonRoot
            className={cx("ToggleButton", selected && "Selected", className)}
            onClick={() => setSelected(!selected)}
            {...buttonProps}
        />
    );
};

export default ToggleButton;
