import { cloneElement } from "react";
import { ElementStylerProps } from "./ElementStyler.types";
import { StyleProp, StyleSheet } from "react-native";

function ElementStyler<TProps extends { style?: StyleProp<any> }>({
    children: child,
    style: iconStyle,
}: ElementStylerProps<TProps>): JSX.Element {
    const { style, ...rest } = child.props;

    return cloneElement(child, {
        ...rest,
        style: { ...StyleSheet.flatten(iconStyle), ...style } as TProps["style"],
    } as TProps);
}

export default ElementStyler;
