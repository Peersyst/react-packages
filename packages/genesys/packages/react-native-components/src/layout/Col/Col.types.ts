import { DimensionValue, FlexStyle, ViewProps } from "react-native";
import { ReactNode } from "react";

export interface ColProps extends ViewProps {
    gap?: DimensionValue;
    justifyContent?: FlexStyle["justifyContent"];
    alignItems?: FlexStyle["alignItems"];
    flex?: number;
    children?: ReactNode;
}
