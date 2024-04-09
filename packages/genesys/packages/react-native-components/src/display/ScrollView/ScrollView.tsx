import {
    RefreshControl,
    RefreshControlPropsAndroid,
    RefreshControlPropsIOS,
    ScrollView as BaseScrollView,
    ScrollViewProps as BaseScrollViewProps,
    View,
} from "react-native";
import { useState } from "react";
import { useMergeDefaultProps } from "@peersyst/react-components-core";

export interface ScrollViewProps
    extends Omit<BaseScrollViewProps, "refreshControl" | "refreshing"> {
    refreshControlProps?: RefreshControlPropsIOS & RefreshControlPropsAndroid;
    loading?: boolean;
    onRefresh?: () => Promise<any>;
}

const ScrollView = (props: ScrollViewProps): JSX.Element => {
    const {
        onRefresh,
        loading = false,
        refreshControlProps,
        children,
        ...rest
    } = useMergeDefaultProps("ScrollView", props);

    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        setRefreshing(true);
        await onRefresh?.();
        setRefreshing(false);
    };

    return (
        <BaseScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1 }}
            horizontal
            scrollEnabled={false}
        >
            <BaseScrollView
                refreshControl={
                    onRefresh ? (
                        <RefreshControl
                            refreshing={loading || refreshing}
                            onRefresh={handleRefresh}
                            {...refreshControlProps}
                        />
                    ) : undefined
                }
                {...rest}
            >
                <View style={{ flex: 1 }} onStartShouldSetResponder={() => true}>
                    {children}
                </View>
            </BaseScrollView>
        </BaseScrollView>
    );
};

export default ScrollView;
