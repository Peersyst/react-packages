import { useEffect, useState } from "react";
import {
    ClearItem,
    DisplayContent,
    SelectDisplay,
    SelectDropdown,
    SelectRoot,
} from "./Select.styles";
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
import { ChevronDownIcon } from "../assets/icons";

function InnerSelect<T>({
    clear,
    autoFocus,
    disabled,
    readonly,
    renderValue,
    placeholder,
    value,
    setValue,
    multiple,
    expandable,
    dropdownElement,
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
                    <DisplayContent
                        className={cx("DisplayContent", !!placeholder && "Placeholder")}
                    >
                        {renderValue(displayContent) || placeholder}
                    </DisplayContent>
                    {dropdownElement && (
                        <SelectDropdown open={open} className="SelectDropdown">
                            {dropdownElement}
                        </SelectDropdown>
                    )}
                </SelectDisplay>
                <SelectProvider value={{ value, setValue, setOpen, multiple, readonly }}>
                    <SelectMenu open={open} expandable={expandable}>
                        {clear && <ClearItem value={undefined}>{clear}</ClearItem>}
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
        clear,
        dropdownElement = <ChevronDownIcon />,
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
                    dropdownElement={dropdownElement}
                    multiple={multiple}
                    options={options}
                    clear={clear}
                >
                    {children}
                </InnerSelect>
            )}
        </FormControl>
    );
}
