import { LabelProps } from "./Label.types";
import { FlexStyle } from "react-native";
import { LabelColRoot, LabelRowRoot, LabelText } from "./Label.styles";
import { Fragment, isValidElement } from "react";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useGlobalStyles } from "../../config";
import { useColorStyle } from "../../theme";

const Label = (props: LabelProps): JSX.Element => {
    const {
        label,
        placement = "top",
        alignment = "start",
        gap = 10,
        children,
        numberOfLines,
        style: { label: labelStyleProp = {}, ...rootStyleProp } = {},
        variant,
        color: colorProp,
    } = useMergeDefaultProps("Label", props);

    const { label: labelGlobalStyles, ...rootGlobalStyles } = useGlobalStyles("Label");

    const colorStyle = useColorStyle(colorProp);

    const rootStyle = { ...rootGlobalStyles, ...rootStyleProp };
    const labelStyle = { ...labelGlobalStyles, ...colorStyle, ...labelStyleProp };

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
