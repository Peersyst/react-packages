import {
    Selector as CoreSelector,
    SelectorControllerProps,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { JSXElementConstructor } from "react";
import { Switch } from "../../../input/Switch";
import { RadioButton } from "../../../input/RadioButton";
import { BaseNativeSelectorController, SelectorProps } from "./Selector.types";

export const SELECTOR_CONTROLLERS: Record<
    BaseNativeSelectorController,
    JSXElementConstructor<SelectorControllerProps>
> = {
    radio: RadioButton,
    switch: Switch,
};

function Selector<T>(props: SelectorProps<T>): JSX.Element {
    const {
        controller = "radio",
        renderController,
        value,
        label,
        LabelProps,
        ...rest
    } = useMergeDefaultProps("Selector", props);

    const Controller =
        typeof controller === "string" ? SELECTOR_CONTROLLERS[controller] : controller;

    return (
        <CoreSelector value={value}>
            {({ setSelected, isSelected, readonly, disabled, ...restOfContext }) => {
                return renderController ? (
                    renderController({
                        label,
                        isSelected,
                        setSelected,
                        readonly,
                        disabled,
                        ...restOfContext,
                    })
                ) : (
                    <Controller
                        readonly={readonly}
                        disabled={disabled}
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
