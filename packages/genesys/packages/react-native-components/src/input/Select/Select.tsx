import { Children, cloneElement, ReactElement } from "react";
import {
    SelectProvider,
    renderSelectValue,
    selectIsValid,
    useSelectDisplayContent,
    useMergeDefaultProps,
    useTheme,
} from "@peersyst/react-components-core";
import { InnerSelectProps, SelectProps, SelectStyle } from "./Select.types";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { SelectMenu } from "./SelectMenu";
import { Icon } from "../../display/Icon";
import { Row } from "../../layout/Row";
import { FormControl } from "../FormControl";
import { FormControlLabel, FormControlLabelStyle } from "../FormControlLabel";
import { SelectItem, SelectItemProps } from "./SelectItem";
import { useControlled } from "@peersyst/react-hooks";
import { useInnerSelectStyles, useSelectStyles } from "./hooks";

function InnerSelect<T>({
    autoFocus,
    disabled,
    readonly,
    renderValue,
    placeholder,
    clear,
    value,
    setValue,
    multiple,
    options = [],
    children,
    style: styleProp = {},
    display,
    header,
    footer,
    icon,
    open: openProp,
    onOpen,
    onClose,
    compare = (a, b) => a === b,
}: InnerSelectProps<T>): JSX.Element {
    const [open, setOpen] = useControlled(autoFocus, openProp, openProp ? onClose : onOpen);

    const handlePress = () => {
        !disabled && setOpen(!open);
    };

    const displayContent = useSelectDisplayContent<T, SelectItemProps<T>>(
        value,
        multiple,
        children || options,
        compare,
    );

    const {
        style,
        display: [displayTextStyle, { placeholderColor, icon: iconStyle, ...displayRootStyle }],
        menu: menuStyle,
        item: itemStyle,
    } = useInnerSelectStyles(styleProp);

    const renderedValue = renderValue
        ? renderValue(displayContent)
        : displayContent && (
              <Text style={displayTextStyle} numberOfLines={1}>
                  {renderSelectValue(displayContent)}
              </Text>
          );

    return (
        <View style={{ width: "100%", ...style }}>
            <TouchableWithoutFeedback onPress={handlePress} testID="select-display-touchable">
                <View onStartShouldSetResponderCapture={() => true} style={{ flex: 1 }}>
                    {display || (
                        <Row
                            style={displayRootStyle}
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <View style={{ maxWidth: "92%" }}>
                                {renderedValue || (
                                    <Text
                                        style={{
                                            ...displayTextStyle,
                                            color: displayTextStyle.color || placeholderColor,
                                        }}
                                        numberOfLines={1}
                                    >
                                        {placeholder}
                                    </Text>
                                )}
                            </View>
                            <Icon style={{ ...displayTextStyle, fontSize: 14, ...iconStyle }}>
                                {icon}
                            </Icon>
                        </Row>
                    )}
                </View>
            </TouchableWithoutFeedback>
            <SelectMenu
                open={open}
                setOpen={setOpen}
                style={menuStyle}
                header={header}
                footer={footer}
            >
                <SelectProvider value={{ value, setValue, setOpen, multiple, readonly, compare }}>
                    {clear && <SelectItem value={undefined}>{clear}</SelectItem>}
                    {children
                        ? Children.map(children, (child) => {
                              const { style: childStyle, ...rest } = child!.props || {};
                              return cloneElement(child!, {
                                  ...rest,
                                  style: { ...itemStyle, ...childStyle },
                              }) as ReactElement;
                          })
                        : options.map((option, index) => (
                              <SelectItem key={index} value={option.value} style={itemStyle}>
                                  {option.label}
                              </SelectItem>
                          ))}
                </SelectProvider>
            </SelectMenu>
        </View>
    );
}

export default function Select<T = any, Multiple extends boolean = false>(
    rawProps: SelectProps<T, Multiple>,
): JSX.Element {
    const props = useMergeDefaultProps("Select", rawProps);

    const {
        required,
        multiple = false,
        defaultValue,
        open,
        onClose,
        onOpen,
        placeholder,
        clear,
        icon: iconProp,
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
        options,
        compare,
        style: _style,
        ...rest
    } = props;

    const {
        icons: { chevronDown: ChevronDown },
    } = useTheme();

    const icon = iconProp || <ChevronDown />;

    const style = useSelectStyles(props, disabled, readonly);

    return (
        <FormControl<T | T[], FormControlLabelStyle, SelectStyle>
            Label={[Label, LabelProps]}
            // @ts-ignore
            defaultValue={defaultValue}
            disabled={disabled}
            readonly={readonly}
            required={required}
            validation={(val) => [selectIsValid(val, multiple, required), undefined]}
            style={style}
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
                    options={options}
                    clear={clear}
                    compare={compare}
                >
                    {children}
                </InnerSelect>
            )}
        </FormControl>
    );
}
