import { cloneElement } from "react";
import { IconProps } from "./Icon.types";
import { StyleSheet } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Icon = (props: IconProps): JSX.Element => {
    const { children: child, style: iconStyle } = useMergeDefaultProps("Icon", props);

    const { style, ...rest } = child.props;

    return cloneElement(child, {
        ...rest,
        style: { ...StyleSheet.flatten(iconStyle), ...style },
    });
};

export default Icon;
