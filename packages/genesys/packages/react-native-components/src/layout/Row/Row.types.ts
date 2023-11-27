import { ReactNode } from "react";
import { DimensionValue, FlexStyle, ViewProps } from "react-native";

export interface RowProps extends ViewProps {
    flex?: number;
    gap?: DimensionValue;
    justifyContent?: FlexStyle["justifyContent"];
    alignItems?: FlexStyle["alignItems"];
    wrap?: boolean;
    children?: ReactNode;
}
