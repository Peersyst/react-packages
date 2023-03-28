import { useState, useEffect } from "react";
import useShare from "./useShare";
import { UseShareDataReturn, UseShareParams } from "./useShare.types";

export default function useShareData(
    shareData: ShareData | undefined,
    { onShare, onShareFailed }: UseShareParams = {},
): UseShareDataReturn {
    const { share, canShare: canShareFn, isSharing } = useShare();

    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        try {
            if (canShareFn(shareData)) setCanShare(true);
        } catch (e) {
            setCanShare(false);
        }
    }, [shareData]);

    const shareFn = async () => {
        try {
            await share(shareData!);
            onShare?.();
        } catch (e) {
            onShareFailed?.();
        }
    };

    return { canShare, share: shareFn, isSharing };
}
