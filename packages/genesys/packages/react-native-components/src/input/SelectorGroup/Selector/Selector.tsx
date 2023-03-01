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
            {({ setSelected, isSelected, ...restOfContext }) => {
                return renderController ? (
                    renderController({
                        label,
                        value,
                        isSelected,
                        setSelected,

                        ...restOfContext,
                    })
                ) : (
                    <Controller
                        value={isSelected}
                        onChange={setSelected}
                        label={label}
                        LabelProps={{ placement: "right", ...LabelProps }}
                        {...rest}
                        {...restOfContext}
                    />
                );
            }}
        </CoreSelector>
    );
}

export default Selector;
