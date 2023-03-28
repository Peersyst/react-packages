export type UseShare = (data: ShareData) => UseShareReturn;

export interface UseShareParams {
    /**
     * Callback called when the share is successful
     */
    onShare?: () => void;
    /**
     * Callback called when the share is cancelled/failed
     */
    onShareFailed?: () => void;
}

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

export interface UseShareDataReturn {
    /**
     * A boolean indicating whether the specified ShareData can be shared.
     */
    canShare: boolean;
    /**
     * Share the ShareData with the native share dialog.
     */
    share: () => Promise<void>;
    /**
     * If the device is currently sharing
     */
    isSharing: boolean;
}
