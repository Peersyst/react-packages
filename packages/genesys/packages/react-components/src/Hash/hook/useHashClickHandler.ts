import { HashAction } from "@peersyst/react-components-core";
import { useCopyToClipboard, useShare } from "@peersyst/react-hooks";
import { HashProps } from "../Hash.types";

export interface UseHashOnClickHandlerParams {
    action: HashAction | undefined;
    hash: string;
    hashToShareData?: HashProps["hashToShareData"];
}

export default function useHashOnClickHandler({
    action,
    hash,
    hashToShareData,
}: UseHashOnClickHandlerParams) {
    const { canShare, share } = useShare();
    const { copyToClipboard } = useCopyToClipboard();

    async function handleClick() {
        switch (action) {
            case "copy":
                await copyToClipboard(hash);
                break;
            case "share":
                const shareData: ShareData = hashToShareData?.(hash) ?? { text: hash };
                if (canShare(shareData)) await share(shareData);
                break;
            default:
                if (typeof action === "function") action(hash);
                break;
        }
    }

    return handleClick;
}
