import { FlashList as BaseFlashList } from "@shopify/flash-list";
import { RefreshControl, ScrollView } from "react-native";
import { FlatListProps } from "./FlatList.types";
import { useMergeDefaultProps, useTheme } from "@peersyst/react-native-components";
import { useState } from "react";

export default function FlatList<T>(props: FlatListProps<T>): JSX.Element {
    const {
        onRefresh = () => undefined,
        loading = false,
        refreshControlProps = {},
        indicatorStyle,
        ...rest
    } = useMergeDefaultProps("FlatList", props);

    const { tintColor, ...restControlProps } = refreshControlProps;

    const { palette } = useTheme();
    const spinnerColor = tintColor || palette.text;
    const scrollIndicatorStyle = indicatorStyle || (palette.mode === "dark" ? "white" : "black");

    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        setRefreshing(true);
        await Promise.resolve(onRefresh?.());
        setRefreshing(false);
    };
    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1 }}
            horizontal
            scrollEnabled={false}
        >
            <BaseFlashList
                refreshControl={
                    onRefresh || loading ? (
                        <RefreshControl
                            refreshing={loading || refreshing}
                            onRefresh={handleRefresh}
                            tintColor={spinnerColor}
                            {...restControlProps}
                        />
                    ) : undefined
                }
                indicatorStyle={scrollIndicatorStyle}
                {...rest}
            />
        </ScrollView>
    );
}
