import { ViewStyle } from "react-native";
import { SuspenseProps } from "../Suspense";

export type ContainedSuspenseStyle = ViewStyle;

export type ActivityIndicatorAlignment = "start" | "center" | "end";
export interface ContainedSuspenseProps extends SuspenseProps {
    activityIndicatorAlignment?: ActivityIndicatorAlignment;
    style?: ContainedSuspenseStyle;
}

export interface ContainedSuspenseLoaderProps {
    activityIndicatorAlignment: ActivityIndicatorAlignment;
}

export interface ContainedSuspenseContentProps {
    isLoading: boolean;
}
