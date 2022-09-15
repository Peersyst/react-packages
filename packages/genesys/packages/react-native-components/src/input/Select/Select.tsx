import { Children, cloneElement, ReactElement } from "react";
import {
    SelectProvider,
    renderSelectValue,
    selectIsValid,
    useSelectDisplayContent,
    useMergeDefaultProps,
} from "@peersyst/react-components-core";
import { InnerSelectProps, SelectProps, SelectStyle } from "./Select.types";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import useSelectStyles from "./hooks/useSelectStyles";
import { SelectMenu } from "./SelectMenu";
import { Icon } from "../../display/Icon";
import { Row } from "../../layout/Row";
import { ChevronDownIcon } from "../../assets/icons";
import { FormControl } from "../FormControl";
import { FormControlLabel, FormControlLabelStyle } from "../FormControlLabel";
import { SelectItemProps } from "./SelectItem";
import { useControlled } from "@peersyst/react-hooks";

function InnerSelect<T>({
    autoFocus,
    disabled,
    readonly,
    renderValue,
    placeholder,
    value,
    setValue,
    multiple,
    children,
    style: styleProp,
    display,
    header,
    footer,
    icon,
    open: openProp,
    onOpen,
    onClose,
}: InnerSelectProps<T>): JSX.Element {
    const [open, setOpen] = useControlled(autoFocus, openProp, openProp ? onClose : onOpen);

    const handlePress = () => {
        !disabled && setOpen(!open);
    };

    const displayContent = useSelectDisplayContent<T, SelectItemProps<T>>(
        value,
        multiple,
        children,
    );

    const {
        style,
        display: [displayTextStyle, { placeholderColor, ...displayRootStyle }],
        menu: menuStyle,
        item: itemStyle,
    } = useSelectStyles(styleProp || {}, disabled, readonly);

    const renderedValue = renderValue ? (
        renderValue(displayContent)
    ) : (
        <Text style={displayTextStyle} numberOfLines={1}>
            {renderSelectValue(displayContent)}
        </Text>
    );

    return (
        <View style={{ width: "100%", ...style }}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View onStartShouldSetResponderCapture={() => true}>
                    {display || (
                        <Row
                            style={displayRootStyle}
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <View style={{ maxWidth: "92%" }}>
                                {renderedValue || (
                                    <Text
                                        style={[displayTextStyle, { color: placeholderColor }]}
                                        numberOfLines={1}
                                    >
                                        {placeholder}
                                    </Text>
                                )}
                            </View>
                            <Icon style={{ ...displayTextStyle, fontSize: 14 }}>{icon}</Icon>
                        </Row>
                    )}
                </View>
            </TouchableWithoutFeedback>
            <SelectProvider value={{ value, setValue, setOpen, multiple, readonly }}>
                <SelectMenu open={open} style={menuStyle} header={header} footer={footer}>
                    {Children.map(children, (child) => {
                        const { style: childStyle, ...rest } = child!.props || {};
                        return cloneElement(child!, {
                            ...rest,
                            style: { ...itemStyle, ...childStyle },
                        }) as ReactElement;
                    })}
                </SelectMenu>
            </SelectProvider>
        </View>
    );
}

export default function Select<T = any, Multiple extends boolean = false>(
    props: SelectProps<T, Multiple>,
): JSX.Element {
    const {
        required,
        multiple = false,
        defaultValue,
        open,
        onClose,
        onOpen,
        placeholder,
        icon = <ChevronDownIcon />,
        autoFocus = false,
        disabled = false,
        readonly = false,
        renderValue,
        header,
        footer,
        children,
        display,
        LabelProps = {},
        Label = FormControlLabel,
        ...rest
    } = useMergeDefaultProps("Select", props);

    return (
        <FormControl<T | T[], FormControlLabelStyle, SelectStyle>
            Label={[Label, LabelProps]}
            // @ts-ignore
            defaultValue={defaultValue}
            disabled={disabled}
            readonly={readonly}
            required={required}
            validation={(val) => [selectIsValid(val, multiple, required), undefined]}
            {...rest}
        >
            {(value, setValue, _, style) => (
                <InnerSelect<T>
                    value={value}
                    setValue={setValue}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    readonly={readonly}
                    renderValue={renderValue}
                    placeholder={placeholder}
                    multiple={multiple}
                    open={open}
                    onOpen={onOpen}
                    onClose={onClose}
                    icon={icon}
                    header={header}
                    footer={footer}
                    display={display}
                    style={style}
                >
                    {children}
                </InnerSelect>
            )}
        </FormControl>
    );
}
