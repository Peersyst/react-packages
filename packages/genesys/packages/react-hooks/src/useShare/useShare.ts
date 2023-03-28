import { useState } from "react";
import { UseShareParams, UseShareReturn } from "./useShare.types";

/**
 * Share the ShareData with the native share dialog
 * only works on mobile/tablet
 * @returns
 * - canShare: if the device can share the data (ShareData) provided
 * - share: function to share the data (ShareData)
 * - isSharing: if the device is currently sharing
 */
export default function useShare({ onShare, onShareFailed }: UseShareParams = {}): UseShareReturn {
    const [isSharing, setIsSharing] = useState(false);

    async function share(shareData: ShareData) {
        setIsSharing(true);
        try {
            if (canShare(shareData)) await window.navigator.share(shareData);
            onShare?.();
        } catch (e) {
            onShareFailed?.();
        }
        setIsSharing(false);
    }

    return { share, canShare, isSharing };
}

function canShare(shareData: ShareData | undefined): boolean {
    return (
        !!shareData &&
        typeof window !== undefined &&
        window.navigator &&
        window.navigator.canShare &&
        window.navigator.canShare(shareData)
    );
}
