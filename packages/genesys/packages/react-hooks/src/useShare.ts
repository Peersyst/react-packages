import { useState } from "react";

export interface UseShareReturn {
    /**
     * A function that returns a boolean indicating whether the specified ShareData can be shared.
     */
    canShare: (shareData: ShareData | undefined) => boolean;
    /**
     * Share the ShareData with the native share dialog.
     * If the shareData is not provided, the shareData provided in the hook will be used.
     */
    share: (shareData: ShareData) => Promise<void>;
    /**
     * If the device is currently sharing
     */
    isSharing: boolean;
}

export type UseShare = (data: ShareData) => UseShareReturn;

/**
 * Share the ShareData with the native share dialog
 * only works on mobile/tablet
 * - canShare: if the device can share
 * - share: function to share the data
 */
export default function useShare(): UseShareReturn {
    const [isSharing, setIsSharing] = useState(false);

    async function share(shareData: ShareData) {
        setIsSharing(true);
        try {
            if (canShare(shareData)) await shareWithNavigator(shareData);
        } catch (e) {}
        setIsSharing(false);
    }

    return { share, canShare, isSharing };
}

function canShare(shareData: ShareData | undefined) {
    return (
        !!shareData &&
        window.navigator &&
        window.navigator.canShare &&
        window.navigator.canShare(shareData)
    );
}

function shareWithNavigator(shareData: ShareData) {
    return window.navigator.share(shareData);
}
