import { cloneElement } from "react";
import { ElementStylerProps } from "./ElementStyler.types";
import { StyleProp, StyleSheet } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

function ElementStyler<TProps extends { style?: StyleProp<any> }>(
    props: ElementStylerProps<TProps>,
): JSX.Element {
    const { children: child, style: stylerStyle } = useMergeDefaultProps("ElementStyler", props);

    const { style, ...rest } = child.props;

    return cloneElement(child, {
        ...rest,
        style: { ...StyleSheet.flatten(stylerStyle), ...style } as TProps["style"],
    } as TProps);
}

export default ElementStyler;
