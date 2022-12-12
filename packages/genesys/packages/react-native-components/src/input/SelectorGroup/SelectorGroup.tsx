import {
    SelectorDirection,
    SelectorGroupProvider,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import {
    Col,
    Row,
    FormControlLabel,
    Selector,
    FormControl,
} from "@peersyst/react-native-components";
import { InnerSelectorGroupProps, SelectorGroupProps } from "./SelectorGroup.types";

function InnerSelectGroup<T, Multiple extends boolean, D extends SelectorDirection>({
    value,
    setValue,
    disabled,
    direction,
    gap,
    justifyContent,
    alignItems,
    selectorLabelProps,
    type,
    readonly,
    multiple,
    options,
    children,
}: InnerSelectorGroupProps<T, Multiple, D>): JSX.Element {
    const layoutProps = { gap, justifyContent, alignItems };
    const [Wrapper, WrapperProps] =
        direction === "row"
            ? [Row, { ...layoutProps, wrap: true, wrapGap: gap }]
            : [Col, layoutProps];

    return (
        <SelectorGroupProvider value={{ value, setValue, disabled, multiple, readonly }}>
            <Wrapper {...WrapperProps}>
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
        type = "radio",
        gap = 20,
        justifyContent,
        alignItems,
        ...rest
    } = useMergeDefaultProps("SelectorGroup", props);

    return (
        <FormControl<Multiple extends true ? T[] : T>
            Label={[Label, LabelProps]}
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

export default SelectorGroup;
