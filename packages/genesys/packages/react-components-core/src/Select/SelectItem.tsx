import { SelectItemProps } from "./Select.types";
import { useContext, useTransition } from "react";
import { SelectContext, SelectContextType } from "./SelectContext";
import { useSelected } from "./hooks";
import { handleSelection } from "./utils";

function SelectItem<T>({ value, children }: SelectItemProps<T>): JSX.Element {
    const [, startTransition] = useTransition();

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
            // Close if not multiple or (multiple and it is a clear item)
            (!multiple || value === undefined) && setOpen(false);
            // Do not block ui
            startTransition(() => {
                setValue(handleSelection(value, selected, multiple, isSelected));
            });
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
