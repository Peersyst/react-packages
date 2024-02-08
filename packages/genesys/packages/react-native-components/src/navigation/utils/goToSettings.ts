import { Linking } from "react-native";

/**
 * Open the operating system settings app and displays the app’s custom settings, if it has any.
 */
export default async function openSettings(): Promise<void> {
    if (Linking.openSettings) {
        return await Linking.openSettings();
    }
    await Linking.openURL("app-settings:");
}
