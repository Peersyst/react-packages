import { Linking } from "react-native";

// from https://github.com/expo/expo/
//The MIT License (MIT)
//Copyright (c) 2015-present 650 Industries, Inc. (aka Expo)

/**
 * Open the operating system settings app and displays the app’s custom settings, if it has any.
 */
export default async function openSettings(): Promise<void> {
    if (Linking.openSettings) {
        return await Linking.openSettings();
    }
    await Linking.openURL("app-settings:");
}
