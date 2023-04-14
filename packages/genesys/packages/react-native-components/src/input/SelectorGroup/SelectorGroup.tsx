import {
    SelectorDirection,
    SelectorGroupProvider,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { Col } from "../../layout/Col";
import { Row } from "../../layout/Row";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import Selector from "./Selector/Selector";
import { InnerSelectorGroupProps, SelectorGroupProps } from "./SelectorGroup.types";
import { useSelectorGroupStyles } from "./hooks";

function InnerSelectGroup<T, Multiple extends boolean, D extends SelectorDirection>({
    value,
    setValue,
    disabled,
    direction,
    gap,
    justifyContent,
    alignItems,
    selectorLabelProps,
    controller,
    renderController,
    readonly,
    multiple,
    options,
    children,
    style,
}: InnerSelectorGroupProps<T, Multiple, D>): JSX.Element {
    const layoutProps = { gap, justifyContent, alignItems };
    const [Wrapper, WrapperProps] =
        direction === "row"
            ? [Row, { ...layoutProps, wrap: true, wrapGap: gap }]
            : [Col, layoutProps];

    return (
        <SelectorGroupProvider value={{ value, setValue, disabled, multiple, readonly }}>
            <Wrapper {...WrapperProps} style={style}>
                {children ||
                    options?.map(({ label, value }, index) => {
                        return (
                            <Selector
                                LabelProps={selectorLabelProps}
                                value={value}
                                controller={controller}
                                renderController={renderController}
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
    rawProps: SelectorGroupProps<T, Multiple, D>,
): JSX.Element {
    const props = useMergeDefaultProps("SelectorGroup", rawProps);

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
        controller = "radio",
        renderController,
        gap = 20,
        justifyContent,
        alignItems,
        style: _style,
        ...rest
    } = props;

    const style = useSelectorGroupStyles(props);

    return (
        <FormControl<Multiple extends true ? T[] : T>
            Label={[Label, LabelProps]}
            disabled={disabled}
            readonly={readonly}
            required={required}
            style={style}
            {...rest}
            // @ts-ignore
            defaultValue={defaultValue}
        >
            {(value, setValue, _, style) => (
                <InnerSelectGroup<T, Multiple, D>
                    value={value}
                    setValue={setValue}
                    disabled={disabled}
                    direction={direction}
                    selectorLabelProps={selectorLabelProps}
                    gap={gap}
                    justifyContent={justifyContent}
                    alignItems={alignItems}
                    controller={controller}
                    renderController={renderController}
                    style={style}
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
