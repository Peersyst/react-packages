import { ReactElement } from "react";
import { ActivityIndicatorProps, ViewStyle } from "react-native";
import { SpinnerProps } from "../Spinner";

export type SuspenseStyle = ViewStyle;

export type ActivityIndicatorAlignment = "start" | "center" | "end";
export interface SuspenseProps {
    isLoading: boolean;
    activityIndicatorColor?: SpinnerProps["color"];
    activityIndicatorSize?: ActivityIndicatorProps["size"];
    activityIndicatorAlignment?: ActivityIndicatorAlignment;
    children: ReactElement;
    fallback?: ReactElement;
    style?: SuspenseStyle;
}

export interface SuspenseLoaderProps {
    activityIndicatorAlignment: ActivityIndicatorAlignment;
}

export interface SuspenseContentProps {
    isLoading: boolean;
}
