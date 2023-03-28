import { useShare } from "@peersyst/react-hooks";
import { HashProps } from "../Hash.types";

export interface ShareHashParams {
    hash: string;
    hashToShareData?: HashProps["hashToShareData"];
}

export default function useShareHash() {
    const { canShare, share } = useShare();

    async function shareHash({ hash, hashToShareData }: ShareHashParams) {
        const shareData: ShareData = hashToShareData?.(hash) ?? { text: hash };
        if (canShare(shareData)) await share(shareData);
    }

    return shareHash;
}
