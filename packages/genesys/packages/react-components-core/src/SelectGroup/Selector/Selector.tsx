import { useContext } from "react";
import { SelectGroupContext } from "../SelectGroupContext";
import { SelectorProps } from "./Selector.types";
import { SelectGroupContextType } from "../SelectGroup.types";
import { handleSelection, useSelected } from "../../Select";

function Selector<T>({ value, children }: SelectorProps<T>): JSX.Element {
    const {
        setValue,
        readonly,
        value: selected,
        multiple,
        disabled,
    } = useContext<SelectGroupContextType<T>>(SelectGroupContext);
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
