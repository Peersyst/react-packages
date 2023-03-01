import {
    SelectorDirection,
    SelectorGroupProvider,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { Col } from "../Col";
import { FormControlLabel } from "../FormControlLabel";
import { Row } from "../Row";
import { InnerSelectorGroupProps, SelectorGroupProps } from "./SelectorGroup.types";
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
    content,
    renderSelector,
    readonly,
    multiple,
    options,
    children,
}: InnerSelectorGroupProps<T, Multiple, D>): JSX.Element {
    const layoutProps = { gap, justifyContent, alignItems, reverse };
    const [Wrapper, WrapperProps] =
        direction === "row"
            ? [Row, { ...layoutProps, wrap: true, wrapGap: gap }]
            : [Col, layoutProps];

    return (
        <SelectorGroupProvider value={{ value, setValue, disabled, multiple, readonly }}>
            <Wrapper className={"SelectorWrapper"} {...WrapperProps}>
                {children ||
                    options?.map(({ label, value }, index) => {
                        return (
                            <Selector
                                LabelProps={selectorLabelProps}
                                value={value}
                                content={content}
                                label={label}
                                key={index}
                                renderSelector={renderSelector}
                            />
                        );
                    })}
            </Wrapper>
        </SelectorGroupProvider>
    );
}

function SelectorGroup<T, Multiple extends boolean = false, D extends SelectorDirection = "column">(
    props: SelectorGroupProps<T, Multiple, D>,
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
        content = "radio",
        renderSelector,
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
                    renderSelector={renderSelector}
                    content={content}
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

export default SelectorGroup;
