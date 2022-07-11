import { ComponentType, useState } from "react";
import { DisplayContent, SelectDisplay, SelectDropdown, SelectRoot } from "./Select.styles";
import { SelectMenu } from "./SelectMenu";
import {
    SelectProvider,
    renderSelectValue,
    selectIsValid,
    useSelectDisplayContent,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { InnerSelectProps, SelectProps } from "./Select.types";
import { cx } from "@peersyst/react-utils";
import { ClickAwayListener } from "../ClickAwayListener";
import { SelectItemProps } from "./SelectItem";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";

function InnerSelect<T>({
    autoFocus,
    disabled,
    readonly,
    renderValue,
    placeholder,
    value,
    setValue,
    multiple,
    expandable,
    DropdownComponent,
    children,
}: InnerSelectProps<T>): JSX.Element {
    const [open, setOpen] = useState<boolean>(autoFocus);

    const handleClick = () => {
        !disabled && setOpen(!open);
    };

    const displayContent = useSelectDisplayContent<T, SelectItemProps<T>>(
        value,
        multiple,
        children,
    );

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <SelectRoot className="Select">
                <SelectDisplay
                    onClick={handleClick}
                    open={open}
                    disabled={disabled}
                    readonly={readonly}
                    className={cx("SelectDisplay", open && "Open", disabled && "Disabled")}
                >
                    <DisplayContent className="DisplayContent">
                        {renderValue(displayContent) || placeholder}
                    </DisplayContent>
                    <DropdownComponent open={open} />
                </SelectDisplay>
                <SelectProvider value={{ value, setValue, setOpen, multiple, readonly }}>
                    <SelectMenu open={open} expandable={expandable}>
                        {children}
                    </SelectMenu>
                </SelectProvider>
            </SelectRoot>
        </ClickAwayListener>
    );
}

export default function Select<T = any>(props: SelectProps<T>): JSX.Element {
    const {
        required,
        multiple = false,
        defaultValue,
        placeholder,
        DropdownComponent = SelectDropdown as ComponentType,
        renderValue = renderSelectValue,
        autoFocus = false,
        disabled = false,
        readonly = false,
        expandable = false,
        children,
        LabelProps = {},
        Label = FormControlLabel,
        ...rest
    } = useMergeDefaultProps("Select", props);

    return (
        <FormControl<T | T[]>
            Label={[Label, LabelProps]}
            // @ts-ignore
            defaultValue={defaultValue}
            disabled={disabled}
            readonly={readonly}
            required={required}
            validation={(val) => [selectIsValid(val, multiple, required), undefined]}
            {...rest}
        >
            {(value, setValue) => (
                <InnerSelect<T>
                    value={value}
                    setValue={setValue}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    readonly={readonly}
                    renderValue={renderValue}
                    placeholder={placeholder}
                    expandable={expandable}
                    DropdownComponent={DropdownComponent}
                    multiple={multiple}
                >
                    {children}
                </InnerSelect>
            )}
        </FormControl>
    );
}
