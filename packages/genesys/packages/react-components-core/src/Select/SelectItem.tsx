import { SelectItemProps } from "./Select.types";
import { useContext } from "react";
import { SelectContext, SelectContextType } from "./SelectContext";
import { useSelected } from "./hooks";
import { handleSelection } from "./utils";

function SelectItem<T>({ value, children }: SelectItemProps<T>): JSX.Element {
    const {
        setValue,
        setOpen,
        readonly,
        value: selected,
        multiple,
    } = useContext<SelectContextType<T>>(SelectContext);
    const isSelected = useSelected(value, selected, multiple);

    const handleSelect = () => {
        if (!readonly) {
            setValue(handleSelection(value, selected, multiple, isSelected));
            // Close if not multiple or (multiple and it is a clear item)
            (!multiple || value === undefined) && setOpen(false);
        }
    };

    return (
        <>
            {children({
                isSelected,
                selected,
                setSelected: handleSelect,
                setOpen,
                readonly,
                multiple,
            })}
        </>
    );
}

export default SelectItem;
