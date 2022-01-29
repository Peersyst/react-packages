import React, { useCallback, useContext } from "react";
import { SelectContext } from "../SelectContext";
import { SelectItemRoot } from "./SelectItem.styles";
import { useSelected } from "../hooks/useSelected";
import { handleSelection } from "../utils/handleSelection";
import { SelectItemProps } from "./SelectItem.types";
import { fsx } from "../../utils/fsx";
import { cx } from "../../utils/cx";

export function SelectItem({ children, value, className, style }: SelectItemProps): JSX.Element {
    const { setValue, setOpen, readonly, value: selected, multiple } = useContext(SelectContext);
    const isSelected = useSelected(value, selected, multiple);

    const handleClick = useCallback(() => {
        if (!readonly) {
            setValue(handleSelection(value, selected, multiple, isSelected));
            !multiple && setOpen(false);
        }
    }, [value, selected, multiple, readonly, isSelected, setValue, setOpen]);

    const styleProps = { selected: isSelected };

    return (
        <SelectItemRoot
            onClick={handleClick}
            selected={isSelected}
            readonly={readonly}
            className={cx(className, "SelectItem", isSelected && "Selected")}
            style={fsx(style, styleProps)}
        >
            {children}
        </SelectItemRoot>
    );
}
