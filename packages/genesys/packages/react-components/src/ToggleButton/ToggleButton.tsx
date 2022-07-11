import { ToggleButtonRoot } from "./ToggleButton.styles";
import { ToggleButtonProps } from "./ToggleButton.types";
import { useControlled } from "@peersyst/react-hooks";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const ToggleButton = (props: ToggleButtonProps): JSX.Element => {
    const {
        defaultSelected = false,
        selected: selectedProp,
        onChange,
        className,
        ...buttonProps
    } = useMergeDefaultProps("ToggleButton", props);

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
