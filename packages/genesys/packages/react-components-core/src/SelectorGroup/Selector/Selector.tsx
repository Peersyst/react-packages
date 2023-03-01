import { useContext } from "react";
import { SelectorGroupContext } from "../SelectorGroupContext";
import { SelectorProps } from "./Selector.types";
import { SelectorGroupContextType } from "../SelectorGroup.types";
import { handleSelection, useSelected } from "../../Select";

function Selector<T>({ value, children }: SelectorProps<T>): JSX.Element {
    const {
        setValue,
        readonly,
        value: selected,
        multiple,
        disabled,
    } = useContext<SelectorGroupContextType<T>>(SelectorGroupContext);

    const isSelected = useSelected(value, selected, multiple);

    const handleSelect = () => {
        if (!readonly && !disabled) {
            setValue(handleSelection(value, selected, multiple, isSelected));
        }
    };

    return (
        <>
            {children({
                isSelected,
                selected,
                setSelected: handleSelect,
                readonly,
                disabled,
                multiple,
            })}
        </>
    );
}

export default Selector;
