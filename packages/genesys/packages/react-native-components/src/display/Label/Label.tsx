import { LabelProps } from "./Label.types";
import { FlexStyle } from "react-native";
import { LabelColRoot, LabelRowRoot, LabelText } from "./Label.styles";
import { Fragment, isValidElement } from "react";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useLabelStyles } from "./hooks";

const Label = (rawProps: LabelProps): JSX.Element => {
    const props = useMergeDefaultProps("Label", rawProps);
    const {
        label,
        placement = "top",
        alignment = "start",
        gap = 10,
        children,
        numberOfLines,
        variant,
        style: _style,
    } = props;

    const { label: labelStyle, ...rootStyle } = useLabelStyles(props);

    const direction: FlexStyle["flexDirection"] = (() => {
        if (placement === "top") return "column";
        else if (placement === "bottom") return "column-reverse";
        else if (placement === "left") return "row";
        else return "row-reverse";
    })();

    const RootComponent = direction.includes("row") ? LabelRowRoot : LabelColRoot;

    const content = [
        isValidElement(label) ? (
            <Fragment key={"label"}>{label}</Fragment>
        ) : (
            <LabelText
                key="label"
                placement={placement}
                alignment={alignment}
                style={labelStyle}
                variant={variant}
                numberOfLines={numberOfLines}
            >
                {label}
            </LabelText>
        ),
        <Fragment key="children">{children}</Fragment>,
    ];

    return (
        <RootComponent gap={gap} alignment={alignment} style={{ width: "100%", ...rootStyle }}>
            {direction.includes("reverse") ? content.reverse() : content}
        </RootComponent>
    );
};

export default Label;
