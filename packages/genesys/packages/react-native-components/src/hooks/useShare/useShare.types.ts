import { ShareContent, ShareOptions, ShareSharedAction } from "react-native";

export interface UseShareParams {
    /**
     * Callback when the share is error
     */
    onError?: (e: Error) => unknown;
    /**
     * Callback when the share is dismissed
     */
    onDismiss?: () => unknown;
    /**
     * Callback when the share is successful
     */
    onShare?: (sharedAction?: ShareSharedAction) => unknown;
}

export interface UseShareReturn {
    /**
     * Share the ShareContent with the native share dialog
     */
    share: (sharePayload: SharePayload) => Promise<void>;
    /**
     * If the device is currently sharing
     */
    isSharing: boolean;
}

export interface SharePayload {
    /**
     * - `message`: a message to share
     * - `url`: a URL to share iOS
     * - `title`: title of the message Android
     * - **Note**: At least one of `url` and `message` is required.
     */
    shareContent: ShareContent;
    /**
     * dialogTitle Android
     * excludedActivityTypes iOS
     * subject - a subject to share via email iOS
     * tintColor iOS
     * anchor - the node to which the action sheet should be anchored (used for iPad)
     */
    options?: ShareOptions;
}
