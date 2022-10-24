import {
    SelectorType,
    Selector as CoreSelector,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { RadioButton } from "../../RadioButton";
import { Checkbox } from "../../Checkbox";
import { Switch } from "../../Switch";
import { SelectorControllerProps, SelectorProps } from "./Selector.types";
import { JSXElementConstructor } from "react";

export const SELECTOR_CONTROLLERS: Record<
    SelectorType,
    JSXElementConstructor<SelectorControllerProps>
> = {
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
        LabelProps,
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
                        LabelProps={{ placement: "right", ...LabelProps }}
                        {...rest}
                    />
                );
            }}
        </CoreSelector>
    );
}

export default Selector;
