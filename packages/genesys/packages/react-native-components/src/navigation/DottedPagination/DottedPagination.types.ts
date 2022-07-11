import { ViewStyle } from "react-native";

export interface DottedPaginationProps {
    style?: ViewStyle & { active?: ViewStyle };
    pages: number;
    currentPage: number;
}

export interface PaginationDotProps {
    active: boolean;
}
