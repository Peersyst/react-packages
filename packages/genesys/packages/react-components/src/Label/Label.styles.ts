import styled from "styled-components";
import { LabelAlignment, LabelRowRootProps, LabelTextProps } from "@peersyst/react-components-core";
import { Property } from "csstype";
import { Col } from "../Col";
import { Row } from "../Row";

const labelFlexAlignemnts: Record<LabelAlignment, Property.AlignItems> = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    "space-between": "flex-start",
};

const labelFlexJustification: Record<LabelAlignment, Property.JustifyContent> = {
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

export const LabelText = styled.label<LabelTextProps>(({ alignment, variant, theme }) => {
    const textAlign: Property.TextAlign = (() => {
        if (alignment === "end") return "right";
        else if (alignment === "center") return "center";
        else return "left";
    })();
    const variantStyle = variant ? theme.typography[variant].style : {};
    return {
        cursor: "text",
        textAlign,
        ["&&"]: {
            ...variantStyle,
        },
        ["&.SingleLine"]: {
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        },
    };
});

export const LabelChildren = styled.div`
    display: contents;
`;
