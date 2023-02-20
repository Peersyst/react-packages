import { ReactElement } from "react";
import { ActivityIndicatorProps, ViewStyle } from "react-native";
import { SpinnerProps } from "../Spinner";

export interface SuspenseProps {
    isLoading: boolean;
    activityIndicatorColor?: SpinnerProps["color"];
    activityIndicatorSize?: ActivityIndicatorProps["size"];
    children: ReactElement;
    fallback?: ReactElement;
}
