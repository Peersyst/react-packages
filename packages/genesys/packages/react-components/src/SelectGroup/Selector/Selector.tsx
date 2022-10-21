import {
    SelectorType,
    Selector as CoreSelector,
    useMergeDefaultProps,
    useFormControl,
} from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { RadioButton } from "../../RadioButton";
import { Checkbox } from "../../Checkbox";
import { Switch } from "../../Switch";
import { SelectorProps } from "./Selector.types";

export const SELECTOR_CONTROLLERS: Record<SelectorType, typeof Switch> = {
    checkbox: Checkbox,
    radio: RadioButton,
    switch: Switch,
};

function Selector<T>(props: SelectorProps<T>): JSX.Element {
    const {
        type = "radio",
        className,
        style,
        value,
        ...rest
    } = useMergeDefaultProps("Selector", props);

    const Controller = SELECTOR_CONTROLLERS[type];

    return (
        <CoreSelector value={value}>
            {({ setSelected, isSelected, readonly, disabled }) => {
                return (
                    <Controller
                        style={style}
                        readonly={readonly}
                        disabled={disabled}
                        className={cx("Selector", isSelected && "Selected", className)}
                        value={isSelected}
                        onChange={setSelected}
                        {...rest}
                    />
                );
            }}
        </CoreSelector>
    );
}

export default Selector;
