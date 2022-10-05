import { Children, ReactElement } from "react";
import { ActivityIndicatorProps, ColorValue } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { Spinner, SpinnerProps } from "../Spinner";

export interface SuspenseProps {
    isLoading: boolean;
    activityIndicatorColor?: SpinnerProps["color"] | ColorValue;
    activityIndicatorSize?: ActivityIndicatorProps["size"];
    children: ReactElement;
    fallback?: ReactElement;
}

const Suspense = (props: SuspenseProps) => {
    const {
        isLoading,
        children,
        fallback,
        activityIndicatorColor,
        activityIndicatorSize = "large",
    } = useMergeDefaultProps("Suspense", props);

    const loaderComponent = fallback || (
        <Spinner color={activityIndicatorColor} size={activityIndicatorSize} />
    );
    const child = Children.only(children);

    return isLoading ? loaderComponent : child;
};

export default Suspense;
