import { useWindowDimensions, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/*
 * This hook is a workaround for the backdrop component on android devices.
 * The backdrop component is not able to cover the whole screen on android devices
 * @see https://github.com/react-native-modal/react-native-modal#the-backdrop-is-not-completely-filledcovered-on-some-android-devices-galaxy-for-one
 */
export default function useBackdropDeviceHeight(): undefined | number {
    const { height } = useWindowDimensions();
    const { top } = useSafeAreaInsets();

    return Platform.OS === "android" ? height + top : undefined;
}
