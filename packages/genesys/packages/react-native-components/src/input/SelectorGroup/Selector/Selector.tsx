import {
    Selector as CoreSelector,
    SelectorControllerProps,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { JSXElementConstructor } from "react";
import { Switch } from "../../../input/Switch";
import { RadioButton } from "../../../input/RadioButton";
import { BaseNativeSelectorType, SelectorProps } from "./Selector.types";

export const SELECTOR_CONTROLLERS: Record<
    BaseNativeSelectorType,
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
        LabelProps,
        ...rest
    } = useMergeDefaultProps("Selector", props);

    const Controller = typeof content === "string" ? SELECTOR_CONTROLLERS[content] : content;

    return (
        <CoreSelector value={value}>
            {({ setSelected, isSelected, readonly, disabled, ...restOfContext }) => {
                return renderController ? (
                    renderController({
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
                        LabelProps={{ placement: "right", ...LabelProps }}
                        {...rest}
                    />
                );
            }}
        </CoreSelector>
    );
}

export default Selector;
