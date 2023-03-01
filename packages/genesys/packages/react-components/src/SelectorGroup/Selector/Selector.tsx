import {
    Selector as CoreSelector,
    useMergeDefaultProps,
    BaseSelectorController,
} from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { RadioButton } from "../../RadioButton";
import { Checkbox } from "../../Checkbox";
import { Switch } from "../../Switch";
import { SelectorControllerProps, SelectorProps } from "./Selector.types";
import { JSXElementConstructor } from "react";

export const SELECTOR_CONTROLLERS: Record<
    BaseSelectorController,
    JSXElementConstructor<SelectorControllerProps>
> = {
    checkbox: Checkbox,
    radio: RadioButton,
    switch: Switch,
};

function Selector<T>(props: SelectorProps<T>): JSX.Element {
    const {
        controller = "radio",
        renderController,
        className,
        style,
        value,
        label,
        LabelProps,
        ...rest
    } = useMergeDefaultProps("Selector", props);

    const Controller =
        typeof controller === "string" ? SELECTOR_CONTROLLERS[controller] : controller;

    return (
        <CoreSelector value={value}>
            {({ setSelected, isSelected, readonly, disabled, ...contextRest }) => {
                return renderController ? (
                    renderController({
                        label,
                        isSelected,
                        setSelected,
                        readonly,
                        disabled,
                        ...contextRest,
                    })
                ) : (
                    <Controller
                        style={style}
                        readonly={readonly}
                        disabled={disabled}
                        className={cx("Selector", isSelected && "Selected", className)}
                        value={isSelected}
                        onChange={setSelected}
                        label={label}
                        LabelProps={{ placement: "right", ...LabelProps }}
                        {...rest}
                    />
                );
            }}
        </CoreSelector>
    );
}

export default Selector;
