import { ReactElement } from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export interface ControlledSuspenseProps {
    isLoading: boolean;
    activityIndicatorColor?: ActivityIndicatorProps["color"];
    activityIndicatorSize?: ActivityIndicatorProps["size"];
    children: ReactElement;
    fallback?: ReactElement;
}

const Suspense = (props: ControlledSuspenseProps) => {
    const { isLoading, children, fallback, activityIndicatorColor, activityIndicatorSize } =
        useMergeDefaultProps("Suspense", props);

    const loaderComponent = fallback || (
        <ActivityIndicator
            testID="actIndicator"
            color={activityIndicatorColor || "black"}
            size={activityIndicatorSize || "large"}
        />
    );
    return isLoading ? loaderComponent : children;
};

export default Suspense;
