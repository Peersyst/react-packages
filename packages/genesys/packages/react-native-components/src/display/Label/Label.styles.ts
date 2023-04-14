import styled, { currentColor } from "@peersyst/react-native-styled";
import { Col } from "../../layout/Col";
import { LabelAlignment, LabelRowRootProps, LabelTextProps } from "@peersyst/react-components-core";
import { FlexAlignType, FlexStyle, Text } from "react-native";
import { Row } from "../../layout/Row";
import { Property } from "csstype";

const labelFlexAlignemnts: Record<LabelAlignment, FlexAlignType> = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    "space-between": "flex-start",
};

const labelFlexJustification: Record<LabelAlignment, FlexStyle["justifyContent"]> = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    "space-between": "space-between",
};

export const LabelColRoot = styled(Col)<LabelRowRootProps>(({ alignment }) => ({
    alignItems: labelFlexAlignemnts[alignment],
}));

export const LabelRowRoot = styled(Row)<LabelRowRootProps>(({ alignment }) => ({
    alignItems: "center",
    justifyContent: labelFlexJustification[alignment],
}));

export const LabelText = styled(Text)<LabelTextProps>(
    ({ placement, alignment, variant, theme }) => {
        const textAlign: Property.TextAlign = (() => {
            if (alignment === "end") return "right";
            else if (alignment === "center") return "center";
            else return "left";
        })();
        const variantStyle = variant ? theme.typography[variant] : {};
        return {
            alignSelf: placement === "left" || placement === "right" ? "center" : undefined,
            textAlign,
            ...variantStyle,
        };
    },
);
