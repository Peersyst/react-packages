import { LabelProps } from "./Label.types";
import { FlexStyle } from "react-native";
import { LabelColRoot, LabelRowRoot, LabelText } from "./Label.styles";
import { Fragment } from "react";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

const Label = (props: LabelProps): JSX.Element => {
    const {
        label,
        placement = "top",
        alignment = "start",
        gap = 10,
        children,
        style: { label: labelStyle = {}, ...rootStyle } = {},
        variant,
    } = useMergeDefaultProps("Label", props);

    const direction: FlexStyle["flexDirection"] = (() => {
        if (placement === "top") return "column";
        else if (placement === "bottom") return "column-reverse";
        else if (placement === "left") return "row";
        else return "row-reverse";
    })();

    const RootComponent = direction.includes("row") ? LabelRowRoot : LabelColRoot;

    const content = [
        <LabelText key="label" alignment={alignment} style={labelStyle} variant={variant}>
            {label}
        </LabelText>,
        <Fragment key="children">{children}</Fragment>,
    ];

    return (
        <RootComponent gap={gap} alignment={alignment} style={rootStyle}>
            {direction.includes("reverse") ? content.reverse() : content}
        </RootComponent>
    );
};

export default Label;