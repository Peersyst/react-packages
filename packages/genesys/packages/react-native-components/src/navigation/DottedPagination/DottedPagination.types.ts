import { ViewStyle } from "react-native";

export type DottedPaginationStyle = ViewStyle & { active?: ViewStyle };

export interface DottedPaginationProps {
    style?: DottedPaginationStyle;
    pages: number;
    currentPage: number;
}

export interface PaginationDotProps {
    active: boolean;
}
