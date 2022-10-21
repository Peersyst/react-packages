import {
    SelectorDirection,
    SelectGroupProvider,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { Col } from "../Col";
import { FormControlLabel } from "../FormControlLabel";
import { Row } from "../Row";
import { InnerSelectGroupProps, SelectGroupProps } from "./SelectGroup.types";
import { Selector } from "./Selector";

function InnerSelectGroup<T, Multiple extends boolean, D extends SelectorDirection>({
    value,
    setValue,
    disabled,
    direction,
    gap,
    justifyContent,
    alignItems,
    reverse,
    selectorLabelProps,
    type,
    readonly,
    multiple,
    options,
    children,
}: InnerSelectGroupProps<T, Multiple, D>): JSX.Element {
    const layoutProps = { gap, justifyContent, alignItems, reverse };
    const Wrapper = direction === "row" ? Row : Col;
    return (
        <SelectGroupProvider value={{ value, setValue, disabled, multiple, readonly }}>
            <Wrapper {...layoutProps} className={"SelectorWrapper"} wrap wrapGap={gap}>
                {children ||
                    options?.map(({ label, value }, index) => {
                        return (
                            <Selector
                                LabelProps={selectorLabelProps}
                                value={value}
                                type={type}
                                label={label}
                                key={index}
                            />
                        );
                    })}
            </Wrapper>
        </SelectGroupProvider>
    );
}

function SelectGroup<T, Multiple extends boolean = false, D extends SelectorDirection = "column">(
    props: SelectGroupProps<T, Multiple, D>,
): JSX.Element {
    const {
        required,
        multiple = false as Multiple,
        defaultValue,
        disabled = false,
        readonly = false,
        children,
        LabelProps = {},
        selectorLabelProps = {},
        Label = FormControlLabel,
        options,
        direction = "column" as D,
        type = "radio",
        className,
        gap = "1rem",
        justifyContent,
        alignItems,
        reverse,
        ...rest
    } = useMergeDefaultProps("SelectGroup", props);

    return (
        <FormControl<Multiple extends true ? T[] : T>
            Label={[Label, LabelProps]}
            className={cx("SelectGroup", className)}
            // @ts-ignore
            defaultValue={defaultValue}
            disabled={disabled}
            readonly={readonly}
            required={required}
            {...rest}
        >
            {(value, setValue) => (
                <InnerSelectGroup<T, Multiple, D>
                    value={value}
                    setValue={setValue}
                    disabled={disabled}
                    direction={direction}
                    selectorLabelProps={selectorLabelProps}
                    gap={gap}
                    justifyContent={justifyContent}
                    alignItems={alignItems}
                    reverse={reverse}
                    type={type}
                    readonly={readonly}
                    multiple={multiple}
                    options={options}
                >
                    {children}
                </InnerSelectGroup>
            )}
        </FormControl>
    );
}

export default SelectGroup;
