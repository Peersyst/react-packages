import { ReactNode } from "react";
import { FlexStyle, ViewProps } from "react-native";

export interface RowProps extends ViewProps {
    flex?: number;
    gap?: number | string;
    justifyContent?: FlexStyle["justifyContent"];
    alignItems?: FlexStyle["alignItems"];
    wrap?: boolean;
    children?: ReactNode;
}
