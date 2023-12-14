import { Children, Fragment } from "react";
import { View } from "react-native";
import { ColRoot } from "./Col.styles";
import { ColProps } from "./Col.types";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { isValidGapChild } from "../../utils";

const Col = (props: ColProps): JSX.Element => {
    const {
        children: childrenProp,
        gap,
        justifyContent,
        alignItems,
        style,
        flex,
        ...rest
    } = useMergeDefaultProps("Col", props);

    const children = Children.toArray(childrenProp).filter(isValidGapChild);
    const childrenLength = Children.count(children);

    const hasGap =
        !justifyContent ||
        justifyContent === "flex-start" ||
        justifyContent === "flex-end" ||
        justifyContent === "center";

    return (
        <ColRoot style={[{ alignItems, justifyContent, flex }, style]} {...rest}>
            {Children.map(children, (child, index: number) => (
                <Fragment key={index}>
                    {child}
                    {hasGap && (
                        <View
                            style={{ flex: 0, marginBottom: index < childrenLength - 1 ? gap : 0 }}
                        />
                    )}
                </Fragment>
            ))}
        </ColRoot>
    );
};

export default Col;
