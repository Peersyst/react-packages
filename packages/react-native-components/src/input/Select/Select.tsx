import { Children, cloneElement, ReactElement, useCallback } from "react";
import { useControlled } from "@peersyst/react-hooks";
import { useSelectDisplayContent } from "./hooks/useSelectDisplayContent";
import { useFormNotification } from "../Form";
import { selectIsValid } from "./utils/selectIsValid";
import { renderValue as renderDefaultValue } from "./utils/renderValue";
import { SelectProps } from "./Select.types";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import useSelectStyles from "./hooks/useSelectStyles";
import { SelectProvider } from "./SelectContext";
import { SelectMenu } from "./SelectMenu";
import { ChevronDownIcon } from "../../assets/icons";
import { ElementStyler } from "../../util/ElementStyler";
import { Row } from "../../layout/Row";

export default function Select<T = undefined>({
    name,
    required,
    multiple = false,
    defaultValue,
    value: valueProp,
    onChange,
    open: openProp,
    onClose,
    onOpen,
    placeholder,
    icon = <ChevronDownIcon />,
    autoFocus = false,
    disabled = false,
    readonly = false,
    style: styleProp,
    renderValue,
    header,
    footer,
    children,
    display,
}: SelectProps<T>): JSX.Element {
    const [value, setValue] = useControlled<T | T[] | undefined>(
        defaultValue || (multiple ? [] : undefined),
        valueProp,
        onChange as (value: T | T[] | undefined) => unknown,
    );
    useFormNotification(name, value, selectIsValid(value, multiple, required));
    const [open, setOpen] = useControlled(autoFocus, openProp, openProp ? onClose : onOpen);

    const displayContent = useSelectDisplayContent(value, multiple, children);

    const handlePress = useCallback(() => {
        !disabled && setOpen(!open);
    }, [open, disabled]);

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
            {renderDefaultValue(displayContent)}
        </Text>
    );

    return (
        <View style={style}>
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
                            <ElementStyler style={{ ...displayTextStyle, fontSize: 14 }}>
                                {icon}
                            </ElementStyler>
                        </Row>
                    )}
                </View>
            </TouchableWithoutFeedback>
            <SelectProvider value={{ value, setValue, setOpen, multiple, readonly } as any}>
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
