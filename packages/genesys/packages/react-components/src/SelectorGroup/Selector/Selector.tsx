import {
    Selector as CoreSelector,
    useMergeDefaultProps,
    BaseSelectorType,
} from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { RadioButton } from "../../RadioButton";
import { Checkbox } from "../../Checkbox";
import { Switch } from "../../Switch";
import { SelectorControllerProps, SelectorProps } from "./Selector.types";
import { JSXElementConstructor } from "react";

export const SELECTOR_CONTROLLERS: Record<
    BaseSelectorType,
    JSXElementConstructor<SelectorControllerProps>
> = {
    checkbox: Checkbox,
    radio: RadioButton,
    switch: Switch,
};

function Selector<T>(props: SelectorProps<T>): JSX.Element {
    const {
        content = "radio",
        renderSelector,
        className,
        style,
        value,
        LabelProps,
        ...rest
    } = useMergeDefaultProps("Selector", props);

    const Controller = typeof content === "string" ? SELECTOR_CONTROLLERS[content] : content;

    return (
        <CoreSelector value={value}>
            {({ setSelected, isSelected, readonly, disabled, ...contextRest }) => {
                return renderSelector ? (
                    renderSelector({
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
                        LabelProps={{ placement: "right", ...LabelProps }}
                        {...rest}
                    />
                );
            }}
        </CoreSelector>
    );
}

export default Selector;
