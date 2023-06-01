import { FlashListProps } from "@shopify/flash-list";
import { RefreshControlPropsAndroid, RefreshControlPropsIOS } from "react-native";

export interface FlatListProps<T = any>
    extends Omit<FlashListProps<T>, "refreshControl" | "refreshing"> {
    refreshControlProps?: RefreshControlPropsIOS & RefreshControlPropsAndroid;
    loading?: boolean;
}
