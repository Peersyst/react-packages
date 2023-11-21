import { DividerRootProps, DividerWidths, DividerWithChildrenProps } from "./Divider.types";
import styled, { currentColor } from "@peersyst/react-native-styled";
import { DimensionValue, View } from "react-native";
import { Row } from "../../layout/Row";

const dividerWidths: Record<DividerWidths, DimensionValue> = {
    sm: "25%",
    md: "50%",
    lg: "75%",
    "full-width": "100%",
};

export const DividerRoot = styled(View)<DividerRootProps>(({ height, width }) => ({
    height,
    width: dividerWidths[width],
    backgroundColor: currentColor(),
}));

export const DividerWithChildren = styled(Row, {
    gap: "6%",
    justifyContent: "center",
    alignItems: "center",
})<DividerWithChildrenProps>(({ width }) => ({
    width: dividerWidths[width],
    overflow: "hidden",
}));
