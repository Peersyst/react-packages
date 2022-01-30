import { ComponentType, useCallback, useState } from "react";
import { useControlled } from "@peersyst/react-hooks";
import { DisplayContent, SelectDisplay, SelectDropdown, SelectRoot } from "./Select.styles";
import { SelectMenu } from "./SelectMenu";
import { SelectProvider } from "./SelectContext";
import { useSelectDisplayContent } from "./hooks/useSelectDisplayContent";
import { useFormNotification } from "../Form";
import { selectIsValid } from "./utils/selectIsValid";
import { renderValueDefault } from "./utils/renderValueDefault";
import { SelectProps } from "./Select.types";
import { fsx, cx } from "@peersyst/react-utils";
import { ClickAwayListener } from "../ClickAwayListener";

export default function Select({
    name,
    required,
    multiple = false,
    defaultValue,
    value: valueProp,
    onChange,
    placeholder,
    DropdownComponent = SelectDropdown as ComponentType,
    renderValue = renderValueDefault,
    autoFocus = false,
    disabled = false,
    readonly = false,
    expandable = false,
    displayClassName,
    displayStyle,
    menuClassName,
    menuStyle,
    children,
}: SelectProps): JSX.Element {
    const [value, setValue] = useControlled<unknown | unknown[]>(
        defaultValue || (multiple ? [] : undefined),
        valueProp,
        onChange,
    );
    useFormNotification(name, value, selectIsValid(value, multiple, required));

    const [open, setOpen] = useState<boolean>(autoFocus);

    const displayContent = useSelectDisplayContent(value, multiple, children);

    const handleClick = useCallback(() => {
        !disabled && setOpen(!open);
    }, [open, disabled]);

    const styleProps = { open, disabled };

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <SelectRoot className="Select">
                <SelectDisplay
                    onClick={handleClick}
                    open={open}
                    disabled={disabled}
                    readonly={readonly}
                    className={cx(
                        displayClassName,
                        "SelectDisplay",
                        open && "Open",
                        disabled && "Disabled",
                    )}
                    style={fsx(displayStyle, styleProps)}
                >
                    <DisplayContent className="DisplayContent">
                        {renderValue(displayContent) || placeholder}
                    </DisplayContent>
                    <DropdownComponent open={open} />
                </SelectDisplay>
                <SelectProvider value={{ value, setValue, setOpen, multiple, readonly }}>
                    <SelectMenu
                        open={open}
                        expandable={expandable}
                        className={menuClassName}
                        style={menuStyle}
                    >
                        {children}
                    </SelectMenu>
                </SelectProvider>
            </SelectRoot>
        </ClickAwayListener>
    );
}
