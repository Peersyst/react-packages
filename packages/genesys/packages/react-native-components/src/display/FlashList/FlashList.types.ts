import { FlashListProps as BaseFlashListProps } from "@shopify/flash-list";
import { RefreshControlPropsAndroid, RefreshControlPropsIOS } from "react-native";

export interface FlashListProps<T = any>
    extends Omit<BaseFlashListProps<T>, "refreshControl" | "refreshing"> {
    refreshControlProps?: RefreshControlPropsIOS & RefreshControlPropsAndroid;
    loading?: boolean;
}
