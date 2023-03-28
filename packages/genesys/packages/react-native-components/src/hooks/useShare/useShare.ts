import { useState } from "react";
import { Share } from "react-native";
import { SharePayload, UseShareParams, UseShareReturn } from "./useShare.types";

export default function useShare({
    onError,
    onDismiss,
    onShare,
}: UseShareParams = {}): UseShareReturn {
    const [isSharing, setIsSharing] = useState(false);

    async function share({ shareContent, options }: SharePayload) {
        setIsSharing(true);
        try {
            const result = await Share.share(shareContent, options);
            //In Android, the result is always {action: "sharedAction"}
            //In IOS, if it is not dismissed, the sharedAction will {action: "sharedAction", activityType: string }
            if (result.action === Share.sharedAction) {
                onShare?.(result);
            }
            // Dismissed (IOS only)
            else if (result.action === Share.dismissedAction) {
                onDismiss?.();
            }
        } catch (error: any) {
            if (error instanceof Error) {
                onError?.(error);
            }
        }
        setIsSharing(false);
    }

    return { share, isSharing };
}
