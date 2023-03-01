import { useContext } from "react";
import { useSelected } from "../../../Select/hooks";
import { handleSelection } from "../../../Select/utils";
import { SelectorGroupContextType } from "../../SelectorGroup.types";
import { SelectorGroupContext } from "../../SelectorGroupContext";
import { SelectorChildrenContext } from "../Selector.types";

export interface UseSelectorProps<T> {
    value: T;
}

export function useSelector<T>({ value }: UseSelectorProps<T>): SelectorChildrenContext<T> {
    const {
        setValue,
        readonly,
        value: selected,
        multiple,
        disabled,
    } = useContext<SelectorGroupContextType<T>>(SelectorGroupContext);

    const isSelected = useSelected(value, selected, multiple);

    const handleSelect = () => {
        console.log("Running");
        if (!readonly && !disabled) {
            setValue(handleSelection(value, selected, multiple, isSelected));
        }
    };

    return {
        isSelected,
        selected,
        setSelected: handleSelect,
        readonly,
        disabled,
        multiple,
    };
}
