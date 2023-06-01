import { ChipProps } from "./Chip.types";
import { ChipRoot } from "./Chip.styles";
import { useColor, useMergeDefaultProps } from "@peersyst/react-components-core";
import { useChipStyles } from "./hooks";
import { isValidElement, useState } from "react";
import { GestureResponderEvent, TouchableWithoutFeedback, Text } from "react-native";
import { ElementStyler } from "../../util/ElementStyler";

const Chip = (rawProps: ChipProps): JSX.Element => {
    const props = useMergeDefaultProps("Chip", rawProps);

    const {
        disabled,
        prefix,
        label,
        suffix,
        onPressIn,
        onPressOut,
        onPress,
        style: _style,
        pressable: _pressable,
        rounded: _rounded,
        variant: _variant,
        size: _size,
        ...touchableProps
    } = props;

    const color = useColor("text");

    const [pressed, setPressed] = useState(false);

    const {
        textStyle,
        rootStyle: { gap, ...rootStyle },
    } = useChipStyles(props, { color }, pressed);

    const handlePressIn = (event: GestureResponderEvent) => {
        setPressed(true);
        onPressIn?.(event);
    };

    const handlePressOut = (event: GestureResponderEvent) => {
        setPressed(false);
        onPressOut?.(event);
    };

    return (
        <TouchableWithoutFeedback
            onPressIn={!disabled ? handlePressIn : undefined}
            onPressOut={!disabled ? handlePressOut : undefined}
            onPress={!disabled ? onPress : undefined}
            {...touchableProps}
        >
            <ChipRoot gap={gap} style={rootStyle}>
                {!!prefix && (
                    <ElementStyler style={textStyle}>
                        {isValidElement(prefix) ? prefix : <Text numberOfLines={1}>{prefix}</Text>}
                    </ElementStyler>
                )}
                <ElementStyler style={textStyle}>
                    {isValidElement(label) ? label : <Text numberOfLines={1}>{label}</Text>}
                </ElementStyler>
                {!!suffix && (
                    <ElementStyler style={textStyle}>
                        {isValidElement(suffix) ? suffix : <Text numberOfLines={1}>{suffix}</Text>}
                    </ElementStyler>
                )}
            </ChipRoot>
        </TouchableWithoutFeedback>
    );
};

export default Chip;
