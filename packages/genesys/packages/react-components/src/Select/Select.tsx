import { ComponentType, useEffect, useState } from "react";
import { DisplayContent, SelectDisplay, SelectDropdown, SelectRoot } from "./Select.styles";
import { SelectMenu } from "./SelectMenu";
import {
    SelectProvider,
    renderSelectValue,
    selectIsValid,
    useSelectDisplayContent,
    useMergeDefaultProps,
    useFormControl,
} from "@peersyst/react-components-core";
import { InnerSelectProps, SelectProps } from "./Select.types";
import { cx } from "@peersyst/react-utils";
import { ClickAwayListener } from "../ClickAwayListener";
import { SelectItem, SelectItemProps } from "./SelectItem";
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
    options = [],
    children,
}: InnerSelectProps<T>): JSX.Element {
    const [open, setOpen] = useState<boolean>(autoFocus);
    const { setFocused } = useFormControl();

    useEffect(() => {
        setFocused(open);
    }, [open]);

    const handleClick = () => {
        if (!disabled && !readonly) setOpen(!open);
    };

    const displayContent = useSelectDisplayContent<T, SelectItemProps<T>>(
        value,
        multiple,
        children || options,
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
                        {children ||
                            options.map((option, index) => (
                                <SelectItem key={index} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                    </SelectMenu>
                </SelectProvider>
            </SelectRoot>
        </ClickAwayListener>
    );
}

export default function Select<T = any, Multiple extends boolean = false>(
    props: SelectProps<T, Multiple>,
): JSX.Element {
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
        options,
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
                    options={options}
                >
                    {children}
                </InnerSelect>
            )}
        </FormControl>
    );
}
