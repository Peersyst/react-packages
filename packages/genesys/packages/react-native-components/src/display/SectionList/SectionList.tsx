import {
    SectionList as BaseSectionList,
    RefreshControl,
    RefreshControlPropsAndroid,
    RefreshControlPropsIOS,
    ScrollView,
    SectionListProps as BaseSectionListProps,
} from "react-native";
import { useState } from "react";
import { useMergeDefaultProps, useTheme } from "@peersyst/react-components-core";

export interface SectionListProps<T, D>
    extends Omit<BaseSectionListProps<T, D>, "refreshControl" | "refreshing"> {
    refreshControlProps?: RefreshControlPropsIOS & RefreshControlPropsAndroid;
    loading?: boolean;
}

/**
 * Component used to render a nested SectionList.
 * A SectionList should never be rendered directly inside another ScrollView with the same orientation.
 * That's why we need to wrap it with a ScrollView in an horizontal direction.
 * More info here https://nyxo.app/fixing-virtualizedlists-should-never-be-nested-inside-plain-scrollviews
 */

const SectionList = (props: SectionListProps<any, any>): JSX.Element => {
    const {
        onRefresh,
        loading = false,
        refreshControlProps = {},
        indicatorStyle,
        ...rest
    } = useMergeDefaultProps("SectionList", props);

    const { tintColor, ...restControlProps } = refreshControlProps;

    const { palette } = useTheme();
    const spinnerColor = tintColor || palette.text;
    const scrollIndicatorStyle = indicatorStyle || (palette.mode === "dark" ? "white" : "black");

    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        setRefreshing(true);
        await onRefresh?.();
        setRefreshing(false);
    };

    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1 }}
            horizontal
            scrollEnabled={false}
        >
            <BaseSectionList
                refreshControl={
                    onRefresh || refreshing ? (
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
};

export default SectionList;
