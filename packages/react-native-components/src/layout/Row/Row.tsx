import { Children, Fragment } from "react";
import { RowRoot } from "./Row.styles";
import { RowProps } from "./Row.types";
import { View } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Row = (props: RowProps): JSX.Element => {
    const {
        children: childrenProp,
        gap,
        justifyContent,
        alignItems,
        style,
        flex,
        wrap = false,
        ...rest
    } = useMergeDefaultProps("Row", props);

    const children = Children.toArray(childrenProp).filter((child) => !!child);
    const childrenLength = Children.count(children);

    const hasGap =
        !justifyContent ||
        justifyContent === "flex-start" ||
        justifyContent === "flex-end" ||
        justifyContent === "center";

    return (
        <RowRoot style={[{ alignItems, justifyContent, flex }, style]} wrap={wrap} {...rest}>
            {Children.map(children, (child, index: number) => (
                <Fragment key={index}>
                    {child}
                    {hasGap && (
                        <View
                            style={{ flex: 0, marginRight: index < childrenLength - 1 ? gap : 0 }}
                        />
                    )}
                </Fragment>
            ))}
        </RowRoot>
    );
};

export default Row;
