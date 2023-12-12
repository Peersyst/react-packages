import { useWindowDimensions, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/*
 * This hook is a workaround for the backdrop component on android devices
 */
export default function useBackdropDeviceHeight(): undefined | number {
    const { height } = useWindowDimensions();
    const { top } = useSafeAreaInsets();

    return Platform.OS === "android" ? height + top : undefined;
}
