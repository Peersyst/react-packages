import { Children, ReactElement, useState } from "react";
import { ActivityIndicatorProps, ColorValue, LayoutChangeEvent, View } from "react-native";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { Spinner, SpinnerProps } from "../Spinner";
import { useDimensions } from "@react-native-community/hooks";

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

    const {
        screen: { width },
    } = useDimensions();

    const loaderComponent = fallback || (
        <Spinner color={activityIndicatorColor} size={activityIndicatorSize} />
    );
    const child = Children.only(children);

    const [childHeight, setChildHeight] = useState<number>();

    const handleChildLayout = (e: LayoutChangeEvent) => {
        setChildHeight(e.nativeEvent.layout.height);
    };

    if (!isLoading) return child;
    else if (isLoading && childHeight === undefined)
        return (
            <View style={{ opacity: 0 }} onLayout={handleChildLayout}>
                {child}
            </View>
        );
    else
        return (
            <View>
                <View style={{ height: childHeight }}>{loaderComponent}</View>
                <View
                    style={{ position: "absolute", opacity: 0, overflow: "hidden", width }}
                    onLayout={handleChildLayout}
                >
                    {child}
                </View>
            </View>
        );
};

export default Suspense;
